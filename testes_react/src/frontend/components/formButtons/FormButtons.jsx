import React from 'react'
import StyledDiv from './styles'


const FormButtons = props => {

	return (
		<StyledDiv center={props.center}>
			{props.children}
		</StyledDiv>
	)
}

export default FormButtons;