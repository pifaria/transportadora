import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        display: none;
    }
`

export const Content = styled.main`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 36px;

    h1{
        text-align: center;
        font-weight: 400;
        color: var(--blue);
        border-bottom: 1px solid var(--blue);
        padding-bottom: 12px;
    }

    section{
        margin-top: 36px;
        text-align: center;

        div{
            margin-bottom: 16px;

            label{
                font-size: 1.5rem;
                color: var(--blue);
            }

            h3{
                font-size: 1.3rem;
                color: var(--orange);
            }
        }
    }

    @media (min-width: 1000px){

    }
`

