import React, { Component } from 'react'
import { FaCogs } from 'react-icons/fa'

import StyledDiv from './styles'

class Configs extends Component {
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
                <FaCogs />
            </StyledDiv>
        )
    }
}

export default Configs