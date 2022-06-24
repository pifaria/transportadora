import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
`

export const Content = styled.form`
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        width: 100%;
        height: 45px;
        padding: 0 5px;
        outline: none;
        border: none;
        border-radius: 4px;
        caret-color: var(--orange);
        margin-bottom: 12px;
    }

`