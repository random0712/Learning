import styled from 'styled-components'

const StyledDiv = styled.div`
    width: 100%;
    height: 100px;
    padding: 20px;


    display: flex;
    align-items: center;

    & span {
        font-family: "Montserrat Medium";
        display: flex;
        align-items: center;
        font-size: 2rem;
    }

    & .icon {
        font-size: 2.5rem;
        margin-right: 25px;
    }
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
`

export { StyledDiv, Column }