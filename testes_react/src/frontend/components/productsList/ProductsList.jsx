import React, { Component } from 'react'
import axios from 'axios'

import { StyledDiv } from './styles'
import ProductCard from '../productCard/ProductCard'

const { baseURL, user } = require("../../global")

class ProductsList extends Component {
	constructor(props) {
		super(props)

		this.getProducts = this.getProducts.bind(this)

		this.state = {products: ''}
	}

	async getProducts() {
		const products = await axios.get(`${baseURL}/users/${user.id}/products`).then(res => res.data)

		const productCards = products.map(product => {
			return <ProductCard key={product.id}
				price={product.price} 
				amount={product.amount}>
					{product.name}
				</ProductCard>
		})

		this.setState({ products: productCards })
	} 

	render() {



		return (
			<StyledDiv>
				{this.state.products}
			</StyledDiv>
		)
	}

	componentDidMount() {
		this.getProducts()
	}
}


export default ProductsList