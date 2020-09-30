import styled from 'styled-components'

const StyledButton = styled.button`
	font-family: "Montserrat Medium";	

	height: 40px;
	width: 100px;

	background-color: ${props => props.primary ? "blue" : "gray" }
`;

export default StyledButton;