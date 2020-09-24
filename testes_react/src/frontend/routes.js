import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Register from './pages/register/Register'

const Routes = props => {

    return (
        <Switch>
            <Route path="/" exact >
                <div>Home</div>
            </Route>
            <Route path="/register">
                <Register></Register>
            </Route>
        </Switch>

    )
}

export default Routes