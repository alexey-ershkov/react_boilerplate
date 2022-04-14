import '../index.scss';

import { DocumentCard } from '@fluentui/react';
import { NeutralColors } from '@fluentui/theme';
import { default as axios } from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { Dispatch } from '../store';
import { asyncIncrease, decrease, increase } from '../store/counter';
import { getCounter } from '../store/counter/selectors';
import { fetchUserData } from '../store/user';
import { LoginPage } from './pages/login';
import { ProfilePage } from './pages/profile';
import { SignupPage } from './pages/signup';
import { CommonPage } from './pages/stocks';
import { ROUTES } from './routes';

const StyledDocumentCard = styled(DocumentCard)`
    height: 50vh;
    min-width: 50vw !important;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Counter = styled.div`
    height: 20px;
    padding: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Button = styled.div`
    width: 40px;
    height: 40px;

    background-color: darkred;
    color: white;
    margin: 20px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    user-select: none;

    & .someclass {
    }
`;

const App = () => {
    const dispatch = useDispatch<Dispatch>();
    useEffect(() => {
        dispatch(fetchUserData);
    }, []);

    //
    // useEffect(() => {
    //     axios.get('http://localhost:5000/').then((res) => {
    //         console.log(res);
    //         if (res.status === 200) {
    //             return res.data;
    //         }
    //         throw Error(res.data);
    //     });
    // }, []);

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
