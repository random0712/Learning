import styled from 'styled-components'

const StyledDiv = styled.div`
	
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;

	& a {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #FFF;
		transition: background-color 0.4s;
	};	

	& a:hover {
		background-color: #8E4585;
	};

	& .icon{
		font-size: 2.8rem;
	}
`;

export default StyledDiv
