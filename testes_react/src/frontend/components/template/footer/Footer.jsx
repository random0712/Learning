import React from 'react'
import { FaHeart } from 'react-icons/fa'
import StyledFooter from './styles'

const Footer = props => {
    return (
        <StyledFooter>
            Desenvolvido com  <FaHeart color="#FC035A" className="icon"/> por Patrick Amaro
        </StyledFooter>
    )
}

export default Footer