import React from 'react';
import './app.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar state={props.state} />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/:userId?/' element={<ProfileContainer />} />
                        <Route path='/dialogs/*' element={<DialogsContainer />} />
                        <Route path='/users' element={<UsersContainer />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter >)
}

export default App;