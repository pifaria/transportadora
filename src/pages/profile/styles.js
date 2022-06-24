import styled, { keyframes } from "styled-components";

const appearFromRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to{
        opacity: 1;
        transform: translateX(0);
    }
`

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
`

export const Content = styled.main`
    width: 90%;
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
        margin-bottom: 36px;
    }

    article{
        p{
            margin-bottom: 5px;
        }
    }

    @media (min-width: 1000px){
        div{
            display: flex;
            align-items: center;
            justify-content: space-evenly;
        }
        
        article{
            width: 40%;

            p{
                font-size: 1.3rem;
            }
        }

        img{
            width: 30%;
            animation: ${appearFromRight} 1s;
        }


    }
`