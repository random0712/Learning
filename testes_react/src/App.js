import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import './App.css'

import Content from './frontend/components/template/content/Content'
import Menu from './frontend/components/template/menu/Menu'
import Header from './frontend/components/template/header/Header'
import Footer from './frontend/components/template/footer/Footer'

function App() {
  return (
  	<BrowserRouter>
	    <div className="App">
	        <Content></Content>
	        <Menu></Menu>
	        <Header></Header>
	        <Footer></Footer>
	    </div>
    </BrowserRouter>
  );
}

export default App
