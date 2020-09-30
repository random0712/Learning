import styled from 'styled-components'


const StyledInput = styled.div`
	width: 100%;
	margin-bottom: 10px;

	display: flex;
	flex-direction: column;
	align-items: center;
	flex-wrap: wrap;

	& label {
		color: gray;
		font-family: "Montserrat Medium";
		align-self: flex-start;
		font-size: 1.2rem;
		margin-bottom: 6px;
	};
`;

const Input = styled.input`
	width: 100%;
	font-family: "Montserrat Medium";
	color: #000;
`;


export { StyledInput, Input };

