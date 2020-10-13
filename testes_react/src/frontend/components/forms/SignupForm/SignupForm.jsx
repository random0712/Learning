import React from 'react'
import { Formik, Form} from 'formik'
import * as Yup from 'yup'
import { StyledDiv } from './styles'
import FormButtons from '../../formButtons/FormButtons'
import FormInput from '../../formInput/FormInput'
import FormError from '../../formError/FormError'


import api from '../../../api'
 

const ProductSchema = Yup.object().shape({
   name: Yup.string()
   	.required('Digite um nome'),
   email: Yup.string()
    .required('Digite o Email')
    .email("Insira um Email valido"),
   password: Yup.string()
    .required('Digite a Senha'),
   confirmPassword: Yup.mixed().test('match', 'Senhas não conferem', function (password) {
  	return password === this.parent.password
})
});


const SignupForm = props => {
	

	const onSubmit = async (values, {resetForm}) => {
		const data = values
		const user = await api.post("/users", data).then(res => res.data)
		console.log(user)
		if(user.error){
			console.debug("ERROR", user.error)
		}
	}


    return (
    	<StyledDiv>
	        <Formik
	        	initialValues={{
	        		name: '',
	        		email: '',
	        		password: '',
	        		confirmPassword: '',
	        	}}
	 			validationSchema={ProductSchema}
	        	onSubmit={onSubmit}>
	        	{({errors, touched, isSubmitting}) => (
		        	<Form className="form">
		        		<FormInput name="name" label="Nome:" type="text" signin />
		        		{touched.name && errors.name && <FormError>{errors.name}</FormError>}
		        		<FormInput name="email" label="Email:" type="text" signin />
		        		{touched.email && errors.email && <FormError>{errors.email}</FormError>}
		        		<FormInput name="password" label="Senha: " type="password" signin />
		        		{touched.password && errors.password && <FormError>{errors.password}</FormError>}
		        		<FormInput name="confirmPassword" label="Confirme a Senha: " type="password" signin />
		        		{touched.confirmPassword && errors.confirmPassword && <FormError>{errors.confirmPassword}</FormError>}
		        		<FormButtons center >
		        			<button className="submitButton" type="submit" disabled={isSubmitting}>Registre-se</button>
		        		</FormButtons>
			        </Form>
	        	)} 
	        </Formik>

	    </StyledDiv>
    )
}

export default SignupForm