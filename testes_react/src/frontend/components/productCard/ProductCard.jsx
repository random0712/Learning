import React from 'react'
import StyledDiv from './styles'
import { FaTags } from 'react-icons/fa'

const ProductCard = props => {


	return (
		<StyledDiv key={props.keyId}>
			<i>
				<FaTags />
			</i>
			<h1>{props.children}</h1>
			<h3>{props.amount}</h3>
			<h4>R${props.price} - Por unidade</h4>
			<h2>R${(props.price * props.amount).toFixed(2)}</h2>
		</StyledDiv>
	)
}

export default ProductCard;