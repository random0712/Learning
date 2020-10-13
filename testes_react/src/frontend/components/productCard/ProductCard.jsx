import React from 'react'
import StyledDiv from './styles'
import { FaTags } from 'react-icons/fa'

const ProductCard = props => {

	function toMoney(str) {

		const money = str.toFixed(2).replace('.', ',')
		return `R$${money}`
	}


	return (
		<StyledDiv key={props.keyId}>
			<i>
				<FaTags />
			</i>
			<h1>{props.children}</h1>
			<h3>{props.amount}</h3>
			<h4>{toMoney(props.price * 1)} - Por unidade</h4>
			<h2>{toMoney(props.price * props.amount)}</h2>
		</StyledDiv>
	)
}

export default ProductCard;