import styled from 'styled-components'

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    header{
        box-shadow: 0 0 1em var(--grey);
    }    
`

export const Content = styled.main`
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100%;

    .orderContent{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 100vw;
        background-color: var(--blue);
        
        .ordersList{
            margin-top: 36px;
        }

        ul, span{
            width: 90%;
        }

        span{
            color: var(--white);
            margin-top: 36px;
        }

        li{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 10px 0;
            background-color: var(--white);
            border-radius: 40px;
            margin-bottom: 36px;
            cursor: pointer;

            :hover{
                background-color: var(--orange);
                color: var(--white);
            }
        }

        h3{
            font-size: 1.5rem;
        }
    }
`