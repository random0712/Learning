import React from 'react'
import { StyledInput, Input } from './styles'
import { Field } from 'formik'

const FormInput = props => {

	return (
		<StyledInput signin={props.signin}>
			<label htmlFor={props.name}>{props.label}</label>
			<Field  as={Input} name={props.name} type={props.type}  />
		</StyledInput>
	)
}

export default FormInput