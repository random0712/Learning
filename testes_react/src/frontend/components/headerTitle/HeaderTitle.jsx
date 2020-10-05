import React from 'react'
import { Link } from 'react-router-dom'

import StyledSpan from './styles'


const HeaderTitle = ({ children }) => {
    return (
        <StyledSpan>
        	<Link to="/">
        		{children}
        	</Link>
        </StyledSpan>
    )
}

export default HeaderTitle