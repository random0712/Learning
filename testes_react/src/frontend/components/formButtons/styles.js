import styled from 'styled-components'

const StyledDiv = styled.div`
	margin-top: 30px;

	display: flex;
	justify-content: ${props => props.center ? "center" : "flex-start"};
`

export default StyledDiv;
