import React from 'react'
import { StyledDiv } from './styles'

import { Link } from 'react-router-dom'


const RegisterCard = props => {

    return (
        <StyledDiv>
            <Link to={props.to} className="link">
                <i>{props.icon}</i>
                <h1>{props.name}</h1>
            </Link>
        </StyledDiv>
        
    )
}

export default RegisterCard