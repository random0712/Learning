import React from 'react'
import Gravatar from 'react-gravatar'
import { FaAngleRight, FaAngleDown } from 'react-icons/fa'

import { StyledDiv, StyledSpan } from './styles'

function ArrowToggle(props) {
    if(props.dropdown === 'users' ) {
        return <FaAngleDown size="7px" />
    } 
    return <FaAngleRight size="7px" />
}

const User = props => {

    return (
        <StyledDiv onClick={() => {props.change('users')}}>
            <StyledSpan>{props.name}</StyledSpan>
            <Gravatar email={props.email} size={30} className="gravatar"/>
            <ArrowToggle dropdown={props.dropdown}/>
        </StyledDiv> 
    )
}

export default User