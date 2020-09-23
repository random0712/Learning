import React, { Component } from 'react'
import StyledDiv from './styles'

import Notifications from '../notifications/Notifications'
import Configs from '../configs/Configs'
import User from '../user/User'
import HeaderDropdowns from '../headerDropdowns/HeaderDropdowns'

class UserConfig extends Component {
    constructor(props) {
        super(props)

        this.state = {dropdown: null}
        this.changeDropdown = this.changeDropdown.bind(this)
    }

    changeDropdown(dropdown) {
        this.setState({dropdown: dropdown}) 
    }

    render() {
        

        return (
            <StyledDiv>
                <Notifications  change={this.changeDropdown}/>
                <Configs change={this.changeDropdown}></Configs>
                <User name="Patrick Amaro" email="teste@teste.com" 
                    change={this.changeDropdown}
                    dropdown={this.state.dropdown} />
                <HeaderDropdowns change={this.changeDropdown}
                    dropdown={this.state.dropdown} />
            </StyledDiv>
        )
    }
}

export default UserConfig