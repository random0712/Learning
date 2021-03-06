import styled from 'styled-components'

const StyledFooter = styled.footer`
    grid-area: footer;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 1.1rem;
    padding-right: 8px;
    background-color: #eaf2ef;

    & .icon {
        padding: 0px 5px;
    }
`

export default StyledFooter