import React from 'react'
import { StyledMain} from './styles'

import ProductForm from '../../components/forms/ProductForm/ProductForm'
import Dashboard from '../../components/dashboard/Dashboard'
import { FaBoxOpen } from 'react-icons/fa'



const ProductRegister = props => {

    return (
    	<StyledMain>
    		<Dashboard icon={<FaBoxOpen className="icon"/>} name="Cadastro de produtos" ></Dashboard>
        	<ProductForm></ProductForm>
        </StyledMain>
    )
}

export default ProductRegister