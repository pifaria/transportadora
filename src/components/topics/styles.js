import styled from "styled-components";

export const Container = styled.div`
    margin-top: 45px;

    @media (min-width: 1000px){
        width: 100%;
    }
`

export const Content = styled.ul`
    li{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 45px;

        svg{
            color: var(--white);
            font-size: 8rem;
        }

        h2{
            color: var(--orange);
            padding-bottom: 10px;
            border-bottom: 1px solid var(--white);
        }

        p{
            color: var(--white);
            font-size: 1.2rem;
            text-align: center;
            margin-top: 10px;
        }
    }

    @media (min-width: 1000px){
        display: flex;
        justify-content: space-between;
        width: 100%;

        li{
            width: 15vw;
        }
    }
`