import '../index.scss';

import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { LoginPage } from './pages/login';
import { ProfilePage } from './pages/profile';
import { SignupPage } from './pages/signup';
import { CommonPage } from './pages/stocks';
import { ROUTES } from './routes';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path={ROUTES.main} element={<CommonPage />} />
                <Route path={ROUTES.login} element={<LoginPage />} />
                <Route path={ROUTES.signup} element={<SignupPage />} />
                <Route path={ROUTES.profile} element={<ProfilePage />} />
                {/*<Route path={ROUTES.stock} component={Img} />*/}
            </Routes>
        </Router>
    );
};

export default App;
