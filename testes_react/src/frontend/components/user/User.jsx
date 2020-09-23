import React, { Component } from 'react'
import Gravatar from 'react-gravatar'
import { FaAngleRight, FaAngleDown } from 'react-icons/fa'

import { StyledDiv, StyledSpan } from './styles'

function ArrowToggle(props) {
    if(props.dropdown === 'users' ) {
        return <FaAngleDown size="7px" />
    } 
    return <FaAngleRight size="7px" />
}

class User extends Component {

    render() {
        return (
            <StyledDiv onClick={() => {this.props.change('users')}}>
                <StyledSpan>{this.props.name}</StyledSpan>
                <Gravatar email={this.props.email} size={30} className="gravatar"/>
                <ArrowToggle dropdown={this.props.dropdown}/>
            </StyledDiv>
        )
    }
}

export default User