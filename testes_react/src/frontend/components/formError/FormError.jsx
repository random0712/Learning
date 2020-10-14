import React from 'react'
import StyledDiv from './styles'

const FormError = props => {

	return (
		<StyledDiv small={props.small}>{props.children}</StyledDiv>
	)
}

export default FormError;