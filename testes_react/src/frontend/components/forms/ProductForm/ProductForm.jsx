import React from 'react'
import { Formik, Form} from 'formik'

import { StyledDiv } from './styles'
import FormInput from '../../formInput/FormInput'
import FormButtons from '../../formButtons/FormButtons'
 

const ProductForm = props => {

    return (
    	<StyledDiv>
	        <Formik
	        	initialValues={{
	        		name: '',
	        		amount: '',
	        	}}>
	        	{() => (
		        	<Form className="form">
		        		<FormInput name="name" label="Nome do Produto:" type="text" />
		        		<FormInput name="amount" label="Quantidade: " type="number"/>
		        		<FormInput name="price" label="Preço: " type="number" />
		        		<FormInput name="image_url" label="URL da Imagem (Opcional):" type="text" />
		        		<FormButtons></FormButtons>
			        </Form>
	        	)} 
	        </Formik>
	    </StyledDiv>
    )
}

export default ProductForm