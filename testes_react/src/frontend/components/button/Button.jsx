import React from 'react'
import StyledButton from './styles'

const Button = props => {
	return (
		<StyledButton type={props.type} primary={props.primary}>{props.children}</StyledButton>
	)
}

export default Button;