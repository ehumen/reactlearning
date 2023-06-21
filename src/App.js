import React, {lazy, Suspense, useEffect} from 'react';
import "./Aapp.css"
import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
//import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/Login';
import {connect} from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));


const App = (props) => {
  useEffect(() => {
    props.initializeApp();
  }, [props.initialized])

  if (!props.initialized) {
    return <Preloader/>
  }
  return (
    <div className='app-wrapper'>
      <HeaderContainer/>
      <Navbar state={props.state}/>
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile/:id?' element={<ProfileContainer/>}/>
          <Route path='/dialogs/*' element={
            <Suspense fallback={<Preloader/>}>
              <DialogsContainer/>
            </Suspense>
          }/>
          <Route path='/users' element={
            <Suspense fallback={<Preloader/>}>
              <UsersContainer/>
            </Suspense>
          }/>
          <Route path='/login' element={<LoginContainer/>}/>
        </Routes>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  }
}


export default connect(mapStateToProps, {initializeApp})(App);
