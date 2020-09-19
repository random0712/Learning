import React from 'react'
import './App.css'

import Content from './frontend/components/template/content/Content'
import Menu from './frontend/components/template/menu/Menu'
import Header from './frontend/components/template/header/Header'
import Footer from './frontend/components/template/footer/Footer'

function App() {
  return (
    <div className="App">
        <Content></Content>
        <Menu></Menu>
        <Header></Header>
        <Footer></Footer>
    </div>
  );
}

export default App
