import '../index.scss';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../pages/Login';
import { ProfilePage } from '../pages/Profile';
import { SignupPage } from '../pages/Signup';
import { CommonPage } from '../pages/Stocks';
import { ROUTES } from './routes';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path={ROUTES.main} element={<CommonPage />} />
                <Route path={ROUTES.login} element={<LoginPage />} />
                <Route path={ROUTES.signup} element={<SignupPage />} />
                <Route path={ROUTES.profile} element={<ProfilePage />} />
            </Routes>
        </Router>
    );
};

export default App;
