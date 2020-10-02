import React from 'react'
import StyledDiv from './styles'


const FormButtons = props => {

	return (
		<StyledDiv>
			{props.children}
		</StyledDiv>
	)
}

export default FormButtons;