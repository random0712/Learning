import React from 'react'
import { StyledDiv, Column } from './styles'

import Clock from '../clock/Clock'


const Dashboard = props => {

    return (
        <Column>
            <StyledDiv>
                {props.icon}
                <span>{props.name}</span>
            </StyledDiv>
            <Clock></Clock>
        </Column>
    )
}

export default Dashboard