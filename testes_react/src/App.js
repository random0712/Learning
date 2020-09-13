import React from 'react'
import './App.css'

import Content from './frontend/components/template/content/Content'
import Menu from './frontend/components/template/menu/Menu'
import UserStats from './frontend/components/template/userStats/UserStats'
import Footer from './frontend/components/template/footer/Footer'

function App() {
  return (
    <div className="App">
        <Content></Content>
        <Menu></Menu>
        <UserStats></UserStats>
        <Footer></Footer>
    </div>
  );
}

export default App
