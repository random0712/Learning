import styled from 'styled-components'

const StyledDiv = styled.div`
    
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    & span {
        font-family: "Montserrat Medium";
        display: flex;
        align-items: center;
        font-size: 2rem;
    }

    & .icon {
        font-size: 2.3rem;
        margin-right: 15px;
    }
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: 100px;
`

export { StyledDiv, Column }