import React from 'react'
import { Formik, Form} from 'formik'
import axios from 'axios'
import * as Yup from 'yup'

import { StyledDiv } from './styles'
import FormInput from '../../formInput/FormInput'
import FormButtons from '../../formButtons/FormButtons'
import Button from '../../button/Button'
import FormError from '../../formError/FormError'

const { baseURL, user } = require("../../../global") 

const ProductSchema = Yup.object().shape({
   name: Yup.string()
    .min(2, 'Nome muito curto')
    .max(50, 'Máximo de 50 caracteres')
    .required('Digite o nome do produto'),
   amount: Yup.number()
    .max(10000, 'Quantidade maior que a suportada')
    .required('Digite uma quantidade válida'),
   price: Yup.number()
   	.required('Insira o preço'),
   image_url: Yup.string()
});


const ProductForm = props => {

	const onSubmit = (values, {resetForm}) => {
		const data = values
		axios.post(`${baseURL}/users/${user.id}/products`, data)
			.then(_ => resetForm({}))
			.catch(err => console.log(err))
	}


    return (
    	<StyledDiv>
	        <Formik
	        	initialValues={{
	        		name: '',
	        		amount: '',
	        		price: '',
	        		image_url: '',
	        	}}
	 			validationSchema={ProductSchema}
	        	onSubmit={onSubmit}>
	        	{({errors, touched, isSubmitting}) => (
		        	<Form className="form">
		        		<FormInput name="name" label="Nome do Produto:" type="text" />
		        		{touched.name && errors.name && <FormError>{errors.name}</FormError>}
		        		<FormInput name="amount" label="Quantidade: " type="number"/>
		        		{touched.amount && errors.amount && <FormError>{errors.amount}</FormError>}
		        		<FormInput name="price" label="Preço: " type="number" />
		        		{touched.price && errors.price && <FormError>{errors.price}</FormError>}
		        		<FormInput name="image_url" label="URL da Imagem (Opcional):" type="text" />
		        		{touched.image_url && errors.image_url && <FormError>{errors.image_url}</FormError>}
		        		<FormButtons>
		        			<Button primary type="submit" disabled={isSubmitting}>Salvar</Button>
		        		</FormButtons>
			        </Form>
	        	)} 
	        </Formik>
	    </StyledDiv>
    )
}

export default ProductForm