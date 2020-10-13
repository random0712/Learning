import React, { useContext } from 'react'
import { FaBoxOpen } from 'react-icons/fa'

import StyledDiv from './styles'

import Dashboard from '../../components/dashboard/Dashboard'
import ProductsList from '../../components/productsList/ProductsList'

import { UserContext } from '../../context/User'

const Products = props => {
	const { user } = useContext(UserContext)
	
	return (
		<StyledDiv>
			<Dashboard name="Produtos" icon={<FaBoxOpen className="icon" />}></Dashboard>
			<ProductsList user={user}></ProductsList>
		</StyledDiv>
	)
}

export default Products