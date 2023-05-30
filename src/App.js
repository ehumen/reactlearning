import React, {useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/Login';
import {connect} from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';


const App = (props) => {
    useEffect(() => {
        props.initializeApp();
    }, [props.initialized])

    if (!props.initialized) {
        return <Preloader />
    }
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar state={props.state} />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/:userId?' element={<ProfileContainer />} />
                        <Route path='/dialogs/*' element={<DialogsContainer />} />
                        <Route path='/users' element={<UsersContainer />} />
                        <Route path='/login' element={<LoginContainer />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter >)
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,

    }
}


export default connect(mapStateToProps, { initializeApp })(App);
