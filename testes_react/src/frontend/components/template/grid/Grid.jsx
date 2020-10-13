import React, { useState, useContext } from 'react'
 
import { StyledGrid } from './styles.js'

import Content from '../content/Content'
import Menu from '../menu/Menu'
import Header from '../header/Header'
import Footer from '../footer/Footer'

import { UserContext } from '../../../context/User'


function Grid(props){
	const [menuVisible, setMenuVisible] = useState("")
	const { signin } = useContext(UserContext)
	console.debug("logged", signin)

	function toggleMenu () {

		const visible = menuVisible === ""
			? "menuHidden"
			: ""
      	setMenuVisible(visible)
    };

	return (
		    <StyledGrid className={`App ${menuVisible} ${signin}`} >
		        <Header toggleMenu={toggleMenu}></Header>
		        <Menu></Menu>
		        <Content></Content>
		        <Footer></Footer>
		    </StyledGrid>
	);
}

export default Grid
