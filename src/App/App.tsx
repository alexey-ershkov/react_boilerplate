import '../index.scss';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../pages/login';
import { ProfilePage } from '../pages/profile';
import { SignupPage } from '../pages/signup';
import { SingleStock } from '../pages/singleStock';
import { StockPage } from '../pages/stock';
import { CommonPage } from '../pages/stocks';
import { ROUTES } from './routes';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path={ROUTES.main} element={<CommonPage />} />
                <Route path={ROUTES.login} element={<LoginPage />} />
                <Route path={ROUTES.signup} element={<SignupPage />} />
                <Route path={ROUTES.profile} element={<ProfilePage />} />
                <Route path="/test/:id" element={<div>Test</div>} />
                <Route path={ROUTES.stock + ROUTES.symbol} element={<StockPage />} />
                <Route path="gr/:symbol" element={<SingleStock />} />
            </Routes>
        </Router>
    );
};

export default App;
