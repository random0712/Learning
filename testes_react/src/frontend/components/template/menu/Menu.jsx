import React from 'react'
import StyledMenu from './styles'
import { FaPlus } from 'react-icons/fa'
import { FaBoxOpen } from 'react-icons/fa'

import MenuLink from '../../menuLink/MenuLink'

class Menu extends React.Component {
    render() {
        return (
            <StyledMenu>
                <MenuLink to="/register" icon={<FaPlus className="icon"/>}></MenuLink>
                <MenuLink to="/products" icon={<FaBoxOpen className="icon" />}></MenuLink>
            </StyledMenu>
        )
    }
}

export default Menu