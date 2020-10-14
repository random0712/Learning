import React from 'react'
import { Formik, Form} from 'formik'
import * as Yup from 'yup'
import { StyledDiv } from './styles'
import FormButtons from '../../formButtons/FormButtons'
import FormInput from '../../formInput/FormInput'
import FormError from '../../formError/FormError'

import api from '../../../api'
import { toast } from 'react-toastify';
 

const ProductSchema = Yup.object().shape({
   name: Yup.string()
   	.min(2, "Nome muito curto")
   	.max(50, "Nome muito grande")
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
		const { error, success } = await api.post("/users", data).then(res => res.data)

		if(error){
			return toast.error(error)
		}

		if(success) {
			props.toggleMode()
			return toast.success(success)
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
		        		<FormInput name="name" label="Nome:" type="text" signin small />
		        		{touched.name && errors.name && <FormError small >{errors.name}</FormError>}
		        		<FormInput name="email" label="Email:" type="text" signin small />
		        		{touched.email && errors.email && <FormError small >{errors.email}</FormError>}
		        		<FormInput name="password" label="Senha: " type="password" signin small />
		        		{touched.password && errors.password && <FormError small >{errors.password}</FormError>}
		        		<FormInput name="confirmPassword" label="Confirme a Senha: " type="password" signin small />
		        		{touched.confirmPassword && errors.confirmPassword && <FormError small >{errors.confirmPassword}</FormError>}
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