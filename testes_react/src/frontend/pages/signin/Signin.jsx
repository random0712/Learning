import React, { useState }from 'react'
import { StyledDiv, ToggleMode } from './styles'

import SigninForm from '../../components/forms/SigninForm/SigninForm'
import SignupForm from '../../components/forms/SignupForm/SignupForm'

const Signin = props => {

	const [mode, setMode] = useState("signin")

	function toggleMode() {
		const newMode = mode === "signin"
			? "register"
			: "signin"

		setMode(newMode)
	}

	const form = mode === "signin"
		? <SigninForm></SigninForm>
		: <SignupForm toggleMode={toggleMode}></SignupForm>

    return (
        <StyledDiv>
        	<div className="forms">
   				{form}
	        	<ToggleMode onClick={toggleMode}>{mode === "signin" ? "Não tem uma conta ainda? Cadastre-se aqui" : "Já tem uma conta? Faça login aqui"}</ToggleMode>
	        </div>
        </StyledDiv>
    )
}

export default Signin