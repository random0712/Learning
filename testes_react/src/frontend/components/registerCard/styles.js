import styled from 'styled-components'

const StyledDiv = styled.div`
    background-color: #FFF;
    margin-right: 40px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);


    & i {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 40px;
    }

    & h1 {
        font-family: "Montserrat Medium";
        font-size: 2.2rem;
    }

    & .link {
        width: 300px;
        height: 300px;
        text-decoration: none;
        color: inherit;
        padding: 8px;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

`;


export { StyledDiv }
