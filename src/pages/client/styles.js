import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Content = styled.main`
    width: 90%;

    div{
        margin-top: 36px;
        display: flex;
        flex-direction: column;
        align-items: center;

        h1{
            color: var(--blue);
        }

        span{
            color: var(--orange);
        }
    }

    form{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-top: 36px;
        height: 30vh;

        input{
            height: 45px;
            border: 1px solid var(--blue);
            padding: 0 5px;
            border-radius: 4px;
        }
    }

    @media (min-width: 1000px){
        width: 40%;
    }
`