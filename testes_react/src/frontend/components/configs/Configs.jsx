import React from 'react'
import { FaCogs } from 'react-icons/fa'

import StyledDiv from './styles'

const Configs = props => {
    
    return (
        <StyledDiv onClick={() => {props.change('configs')}}>
            <FaCogs />
        </StyledDiv>
    )
}

export default Configs 