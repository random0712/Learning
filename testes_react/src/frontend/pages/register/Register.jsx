import React from 'react'
import { StyledMain, RegistersArea } from './styles'

import { BsClipboard } from 'react-icons/bs'
import { FaBoxOpen } from 'react-icons/fa'

import Dashboard from '../../components/dashboard/Dashboard'
import RegisterCard from '../../components/registerCard/RegisterCard'

const Register = props => {

    const iconSize = "150px"

    return (
        <StyledMain>
            <Dashboard name="Cadastros" icon={<BsClipboard className="icon"/>}></Dashboard>
            <RegistersArea>
                <RegisterCard to="/register/products" icon={<FaBoxOpen size={iconSize}/>} name="Produtos"></RegisterCard>
            </RegistersArea>
        </StyledMain>
    )
}

export default Register