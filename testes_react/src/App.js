import React from 'react'
import { Router } from 'react-router-dom'
import history from './history';


import './App.css'

import Grid from './frontend/components/template/grid/Grid'

import { UserProvider } from './frontend/context/User'


function App(props){
	return (
	  	<Router history={history}>
	  		<UserProvider>
			    <Grid></Grid>
			</UserProvider>
	    </Router>
	);
}

export default App
