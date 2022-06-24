import styled from 'styled-components'
import { keyframes } from 'styled-components'

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--blue);
    align-items: center;
    height: 100vh;
    overflow-y: scroll;
`

export const Content = styled.main`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    section{
        display: flex;
        flex-direction: column;
        align-items: center ;
        width: 80%;
    }

    h1{
        color: var(--white);
        font-weight: 700;
        font-size: 2rem;
    }

    @media (min-width: 1000px){
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;

        section{
            width: 40%;
        }
    }
`

const appearFromRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to{
        opacity: 1;
        transform: translateX(0);
    }
`

export const AnimationContainer = styled.div`
    animation: ${appearFromRight} 1s;
    
    img{
        max-width: 100%;
        margin-top: 36px;
    }

    @media (min-width: 1000px){
        width: 40%;
    }
`