import React from 'react'
import { StyledDiv, StyledTitle, StyledUl } from './styles'

const Dropdown = props => {

    return (
        <StyledDiv>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledUl>
                {props.children}
            </StyledUl>
        </StyledDiv>
    )
}

export default Dropdown
