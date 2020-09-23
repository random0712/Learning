import React from 'react'
import { FaRegBell } from 'react-icons/fa'

import StyledDiv from './styles'

const Notifications = props => {

    return (
        <StyledDiv onClick={() => {props.change('notifications')}}>
            <FaRegBell />
        </StyledDiv>
    )
}

export default Notifications