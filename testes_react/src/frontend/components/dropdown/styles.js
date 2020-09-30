import styled from 'styled-components'

const StyledDiv = styled.div`
    position: absolute;
    top: 80px;
    right: 10px;
    height: 230px;
    width: 250px;
    z-index: 2;
    border-radius: 5px;
    background-color: #FFF;
    box-shadow: 0px 0px 10px 0.1px rgba(0,0,0,0.25);

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
`

const StyledTitle = styled.div`
    height: 30px;
    width: 250px;
    border-radius: 5px 5px 0px 0px;
    color: white;
    font-size: 1.1rem;
    background-color: #3F7AD9;

    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledUl = styled.ul`
    margin: 0;
    padding: 0;
    background-color: red;
    border-radius: 0px 0px 5px 5px;
    height: 200px;

    display: flex;
    flex-direction: column;

    & li {
        width: 250px;
        height: 50px;
        list-style: none;
    }
`

export { StyledDiv, StyledTitle, StyledUl }