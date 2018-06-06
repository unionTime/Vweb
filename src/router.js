import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import LoginContainer from './components/login';
const RouterConfig = (
    <BrowserRouter >
        <Route path='/' component={LoginContainer} />
    </BrowserRouter>
)
export default RouterConfig