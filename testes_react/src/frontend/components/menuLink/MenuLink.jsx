import React from 'react'
import StyledDiv from './styles'

import { NavLink } from 'react-router-dom'

const MenuLink = props => {

	return (
		<StyledDiv>
				<NavLink to={props.to} activeStyle={{backgroundColor: "#8E4585"}}>
	                <i>{props.icon}</i>
	            </NavLink>
		</StyledDiv>	
	)
};

export default MenuLink;