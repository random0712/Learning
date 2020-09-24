import React from 'react'
import { StyledMain } from './styles'

import { FaClipboardList } from 'react-icons/fa'

import Dashboard from '../../components/dashboard/Dashboard'

const Register = props => {

    return (
        <StyledMain>
            <Dashboard name="Cadastros" icon={<FaClipboardList className="icon"/>}></Dashboard>
        </StyledMain>
    )
}

export default Register