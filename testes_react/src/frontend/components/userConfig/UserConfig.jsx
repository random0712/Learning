import React from 'react'
import StyledDiv from './styles'

import Notifications from '../notifications/Notifications'
import Configs from '../configs/Configs'
import User from '../user/User'

const UserConfig = props => {

    return (
        <StyledDiv>
            <Notifications></Notifications>
            <Configs></Configs>
            <User name="Patrick Amaro" email="teste@teste.com"/>
        </StyledDiv>
    )
}

export default UserConfig