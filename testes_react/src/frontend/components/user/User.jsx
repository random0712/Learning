import React, { Component } from 'react'
import Gravatar from 'react-gravatar'
import { FaAngleRight, FaAngleDown } from 'react-icons/fa'

import { StyledDiv, StyledSpan } from './styles'

function ArrowToggle(props) {
    if(props.toggle) {
        return <FaAngleDown size="7px" />
    } 
    return <FaAngleRight size="7px" />
}

class User extends Component {
    constructor(props) {
        super(props)

        this.state = {dropdownIsVisible: false}

        this.toggleDropdown = this.toggleDropdown.bind(this)
    }

    toggleDropdown() {
        this.setState({dropdownIsVisible: !this.state.dropdownIsVisible})
    }


    render() {
        return (
            <StyledDiv onClick={this.toggleDropdown}>
                <StyledSpan>{this.props.name}</StyledSpan>
                <Gravatar email={this.props.email} size={30} className="gravatar"/>
                <ArrowToggle toggle={this.state.dropdownIsVisible}/>
            </StyledDiv>
        )
    }
}

export default User