import styled from 'styled-components'

export const Container = styled.button`
    background-color: var(--orange);
    border: none;
    border-radius: 4px;
    width: 100%;
    height: 45px;
    font-weight: 700;
    color: var(--white);

    :hover{
        background-color: var(--white);
        box-shadow: inset 0 0 2em var(--orange);
        color: var(--orange);
    }
`