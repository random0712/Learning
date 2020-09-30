import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Register from './pages/register/Register'
import ProductRegister from './pages/productsRegister/ProductsRegister'

const Routes = props => {

    return (
        <Switch>
            <Route path="/" exact >
                <div>Home</div>
            </Route>
            <Route path="/register" exact>
                <Register></Register>
            </Route>
            <Route path="/register/products">
                <ProductRegister></ProductRegister>
            </Route>
        </Switch>

    )
}

export default Routes