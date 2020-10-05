import React from 'react'
import StyledDiv from './styles'

import { Link } from 'react-router-dom'

const MenuLink = props => {

	return (
		<StyledDiv>
				<Link to={props.to}>
	                <i>{props.icon}</i>
	            </Link>
		</StyledDiv>	
	)
};

export default MenuLink;