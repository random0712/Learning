import styled from 'styled-components';

const StyledDiv = styled.div`
	position: relative;
	background-color: #FFF;
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
	border-radius: 3px;
	width: 22%;
	min-width: 250px;
	height: 300px;
	margin-right: 30px;
	margin-bottom: 30px;
	padding-top: 15px;

	display: flex;
	flex-direction: column;
	align-items: center;

	& i {
		font-size: 6.5rem;
		color: gray;
	}

	& h1 {
		font-size: 1.3rem;
		margin-bottom: 20px;
	}

	& h2 {
		position: absolute;
		font-family: "Montserrat Medium";
		font-size: 1.3rem;
		color: green;
		bottom: 10px;
		right: 10px;
	}

	& h3 {
		font-family: "Montserrat Medium";
		color: #FFF;

		padding: 10px 15px;
		border-radius: 20px;
		background-color: #8F509D;
	}

	& h4 {
		position: absolute;
		font-family: "Montserrat Medium";
		font-size: 1.1rem;
		color: #a3be8c;
		bottom: 38px;
		right: 10px;
	}

`;

export default StyledDiv

