import styled from 'styled-components'

const StyledButton = styled.button`
	font-family: "Montserrat Medium";	
	color: ${props => props.primary ? "#5e81ac" : "#434c5e"};
	font-size: 1.05rem;

	height: 40px;
	width: 100px;

	
	border: solid 2px ${props => props.primary ? "#5e81ac" : "#434c5e"};
	border-radius: 8px;

	margin-left: ${props => props.primary ? "0px" : "10px"};
	transition: background-color 0.4s, color 0.4s;

	&:hover {
		color: #FFF;
		background-color: ${props => props.primary ? "#5e81ac" : "#434c5e"};
	};
`;

export default StyledButton;