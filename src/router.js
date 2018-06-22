import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginContainer from './components/login'
import Manage from './components/manage'
import System from './components/system'
const RouterConfig = (
    <BrowserRouter>
        <Route render={({ location }) => {
            return (
                <Switch key={location.pathname}>
                    <Route location={location} exact path="/" component={LoginContainer} />
                    <Route location={location} path="/manage" component={Manage} />
                    <Route location={location} path="/system" component={System} />
                </Switch>
            )
        }} />
    </BrowserRouter>
)
export default RouterConfig