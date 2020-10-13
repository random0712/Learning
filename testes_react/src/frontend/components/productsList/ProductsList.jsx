import React, { useState, useContext, useEffect } from 'react'
import api from '../../api'
import { UserContext } from '../../context/User'

import { StyledDiv } from './styles'
import ProductCard from '../productCard/ProductCard'


function ProductsList() {
	const { user } = useContext(UserContext)
	const [products, setProducts] = useState()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		(async function () { 

			const productsData = await api.get(`/users/${user.id}/products`).then(res => res.data).catch(_ => null)
			const productCards = productsData.length !== 0
				?  	productsData.map(product => {
						return <ProductCard key={product.id}
						price={product.price} 
						amount={product.amount}>
							{product.name}
						</ProductCard>
				})
				: "Nenhum Produto cadastrado"
			
			setProducts(productCards)
			setLoading(false)
		})()
	}, [user.id])

	if (loading) {
		return <div>Loading</div>
	}

	return (
		<StyledDiv>
			{products}
		</StyledDiv>
	)

}

export default ProductsList