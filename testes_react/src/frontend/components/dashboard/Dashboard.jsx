import React from 'react'
import { StyledDiv, Column } from './styles'


const Dashboard = props => {

    return (
        <Column>
            <StyledDiv>
                {props.icon}
                <span>{props.name}</span>
            </StyledDiv>
        <span>{new Date().toLocaleString('pt-br')}</span>
        </Column>
    )
}

export default Dashboard