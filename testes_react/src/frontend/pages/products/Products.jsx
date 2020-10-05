import React from 'react'
import { FaBoxOpen } from 'react-icons/fa'

import StyledDiv from './styles'

import Dashboard from '../../components/dashboard/Dashboard'
import ProductsList from '../../components/productsList/ProductsList'

const Products = props => {
	
	return (
		<StyledDiv>
			<Dashboard name="Produtos" icon={<FaBoxOpen className="icon" />}></Dashboard>
			<ProductsList></ProductsList>
		</StyledDiv>
	)
}

export default Products