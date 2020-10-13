import styled from 'styled-components'

const StyledDiv = styled.div`
    position: absolute;
    top: 80px;
    right: 10px;
    width: 300px;
    z-index: 2;
    border-radius: 5px;
    background-color: #FFF;
    box-shadow: 0px 0px 10px 0.1px rgba(0,0,0,0.50);

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
`

const StyledTitle = styled.div`
    font-family: "Montserrat Medium";
    height: 30px;
    width: 100%;
    border-radius: 5px 5px 0px 0px;
    color: white;
    font-size: 1rem;
    background-color: #3b4252;

    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledUl = styled.ul`
    margin: 0;
    padding: 0;
    background-color: #EAF2EF;
    border-radius: 0px 0px 5px 5px;
    width: 100%;

    display: flex;
    flex-direction: column;

    & li {
        width: 100%;
        height: 55px;
        list-style: none;
    }
`

export { StyledDiv, StyledTitle, StyledUl }