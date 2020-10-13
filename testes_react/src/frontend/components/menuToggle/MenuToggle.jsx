import React from 'react'
import { FaBars } from 'react-icons/fa'
import StyledDiv from './styles'


const MenuToggle = props => {

    return (
        <StyledDiv onClick={() => {props.toggleMenu()}}><FaBars></FaBars></StyledDiv>
    )
}

export default MenuToggle