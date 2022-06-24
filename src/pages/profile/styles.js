import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
`

export const Content = styled.main`
    width: 90%;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;

        h1{
            color: var(--blue);
            font-size: 2rem;
            border-bottom: 1px solid var(--orange);
            padding-bottom: 10px;
            margin: 36px 0;
        }

        img{
            width: 100%;
        }

        margin-bottom: 36px;
    }

    article{
        p{
            margin-bottom: 5px;
        }
    }
`