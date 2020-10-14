import React, { useContext } from 'react'
import { Formik, Form} from 'formik'
import * as Yup from 'yup'
import { UserContext } from '../../../context/User'
import { StyledDiv } from './styles'
import FormButtons from '../../formButtons/FormButtons'
import FormInput from '../../formInput/FormInput'
import FormError from '../../formError/FormError'
 

const ProductSchema = Yup.object().shape({
   email: Yup.string()
    .required('Digite o Email')
    .email("Insira um Email valido"),
   password: Yup.string()
    .required('Digite a Senha'),
});


const SigninForm = props => {

	const { handleLogin } = useContext(UserContext)
	

	const onSubmit = (values, {resetForm}) => {
		const data = values
		handleLogin(data)
	}


    return (
    	<StyledDiv>
	        <Formik
	        	initialValues={{
	        		email: '',
	        		password: '',
	        	}}
	 			validationSchema={ProductSchema}
	        	onSubmit={onSubmit}>
	        	{({errors, touched, isSubmitting}) => (
		        	<Form className="form">
		        		<FormInput name="email" label="Email:" type="text" signin small />
		        		{touched.email && errors.email && <FormError small >{errors.email}</FormError>}
		        		<FormInput name="password" label="Senha: " type="password" signin small />
		        		{touched.password && errors.password && <FormError small >{errors.password}</FormError>}
		        		<FormButtons center >
		        			<button className="submitButton" type="submit">Login</button>
		        		</FormButtons>
			        </Form>
	        	)} 
	        </Formik>

	    </StyledDiv>
    )
}

export default SigninForm