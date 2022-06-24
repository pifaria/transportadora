import styled from 'styled-components'

export const Container = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    background-color: var(--blue);
`

export const Content = styled.main`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    form{
        width: 100%;
        margin-top: 36px;
        display: flex;
        flex-direction: column;
        align-items: center;

        h1{
            color: var(--orange);
        }

        input{
            width: 100%;
            height: 45px;
            border: none;
            caret-color: var(--orange);
            padding: 0 5px;
            border-radius: 4px;
            margin: 16px 0;
        }
    }
`