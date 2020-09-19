import React, { Component } from 'react'
import { FaBars } from 'react-icons/fa'
import StyledDiv from './styles'


class MenuToggle extends Component {
    constructor(props) {
        super(props)

        this.state = {isMenuVisible: true}

        this.menuToggle = this.menuToggle.bind(this)
    }

    menuToggle() {
        this.setState({isMenuVisible: !this.state.isMenuVisible})
    }


    render() {
        return (
            <StyledDiv onClick={this.menuToggle}><FaBars></FaBars></StyledDiv>
        )
    }
}

export default MenuToggle