import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: var(--blue);

`

export const Content = styled.main`
    width: 90%;
    margin-top: 36px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px var(--black);
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--orange);
        border-radius: 10px;
    }

    h1{
        color: var(--orange);
        margin-bottom: 24px;
    }

    p{
        color: var(--white);
        font-size: 1.2rem;
    }

    span{
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--orange);
    }

    section{
        background-color: var(--white);
        margin-top: 36px ;
        padding-bottom: 20px;
        display: flex;
        justify-content: center;
    }

    @media (min-width: 1000px){
        overflow-y: hidden;
    }
`