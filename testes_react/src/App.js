import React from 'react'
import { Router } from 'react-router-dom'
import history from './history';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


import './App.css'

import Grid from './frontend/components/template/grid/Grid'

import { UserProvider } from './frontend/context/User'


function App(props){
	return (
	  	<Router history={history}>
	  		<UserProvider>
			    <Grid></Grid>
			    <ToastContainer bodyClassName="notifications" limit={3}/>
			</UserProvider>
	    </Router>
	);
}

export default App
