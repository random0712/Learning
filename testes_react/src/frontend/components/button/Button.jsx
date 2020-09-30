import React from 'react'
import StyledButton from './styles'

const Button = props => {
	return (
		<StyledButton>{props.children}</StyledButton>
	)
}

export default Button;