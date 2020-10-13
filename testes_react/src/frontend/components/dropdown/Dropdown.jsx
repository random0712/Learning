import React from 'react'
import { StyledDiv, StyledTitle, StyledUl } from './styles'

const Dropdown = props => {

    return (
        <StyledDiv>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledUl>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </StyledUl>
        </StyledDiv>
    )
}

export default Dropdown
