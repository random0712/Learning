import styled from 'styled-components'

const StyledDiv = styled.div`
    background-color: #eaf2ef;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    & > .forms {
    	margin-top: 20px;
		padding: 10px 40px;
		background-color: #FFF;
		width: 250px;
		min-height: 300px;

		display: flex;
		flex-direction: column;
	    align-items: center;
	    justify-content: center;

		& .submitButton {
			color: #FFF;
			font-size: 0.9rem;
			font-family: "Montserrat Medium";

			width: 100%;
			height: 35px;
			border: 1px solid #adb5bd;
			border-radius: 3px;
			background-color: #2f9e44;
		}

		& .submitButton:hover {
			background-color: #2b8a3e;
		} 
    }

     
`

const ToggleMode = styled.div`
	color: blue;
	width: 100%;
	margin-top: 20px;

	text-align: center;
`


export { StyledDiv, ToggleMode }