import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import LoginContainer from './components/login'
import Manage from './components/manage'
const RouterConfig = (
    <BrowserRouter >
        <Route path='/' component={Manage} />
    </BrowserRouter>
)
export default RouterConfig