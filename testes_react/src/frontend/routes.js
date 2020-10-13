import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { UserContext } from './context/User'

import Register from './pages/register/Register'
import ProductRegister from './pages/productsRegister/ProductsRegister'
import Products from './pages/products/Products'
import Signin from './pages/signin/Signin'


function CustomRoute({ isPrivate, ...rest }) {
    const { loading, user } = useContext(UserContext)

    if(loading) {
        return <h1>Loading</h1>
    }

    if(isPrivate && !user.email) {
        return <Redirect to="/signin" />
    }

    if(rest.path==="/signin" && user.email) {
        return <Redirect to="/" />
    }

    return <Route {...rest} />
}


const Routes = props => {

    return (
        <Switch>
            <CustomRoute isPrivate path="/" exact >
                <div>Home</div>
            </CustomRoute>
            <CustomRoute path="/signin" >
                <Signin></Signin>
            </CustomRoute>
            <CustomRoute isPrivate path="/register" exact>
                <Register></Register>
            </CustomRoute>
            <CustomRoute isPrivate path="/register/products">
                <ProductRegister></ProductRegister>
            </CustomRoute>
            <CustomRoute isPrivate path="/products">
                <Products></Products>
            </CustomRoute>
        </Switch>

    )
}

export default Routes