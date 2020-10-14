import styled from 'styled-components'


const StyledDiv = styled.div`
	font-family: "Montserrat Medium";
	font-size: ${props => props.small ? "0.8rem" : "1rem"};
	color: red;
	margin-bottom: 5px;
`;

export default StyledDiv