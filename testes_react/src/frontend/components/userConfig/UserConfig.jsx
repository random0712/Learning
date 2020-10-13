import React, { useState, useContext } from 'react'
import StyledDiv from './styles'
import { UserContext } from '../../context/User'

import Notifications from '../notifications/Notifications'
import Configs from '../configs/Configs'
import User from '../user/User'
import HeaderDropdowns from '../headerDropdowns/HeaderDropdowns'


function UserConfig() {
    const { user } = useContext(UserContext)
    const [dropdown, setDropdown] = useState(null);

    const changeDropdown = drop => {
        const newDropdown = drop === dropdown 
            ? null
            : drop
        
        setDropdown(newDropdown)
    }

    return (

        <StyledDiv>
            <Notifications  change={changeDropdown}/> 
            <Configs change={changeDropdown}></Configs>
            <User name={user.name} email={user.email} 
                change={changeDropdown}
                dropdown={dropdown} />
            <HeaderDropdowns dropdown={dropdown} />
        </StyledDiv>
    )
}

export default UserConfig