import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    height: 100vh;
    position: fixed;
    background-color: var(--blue);
    width: 100%;
`

export const Content = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;


    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 15%;

        img{
            width: 50%;
        }

        label{
            cursor: pointer;
            color: var(--white);
        }
    }

    div{
        margin-top: 36px;
        display: flex;
        flex-direction: column;

        h4{
            text-align: center;
            width: 100%;
            padding: 10px 0;
            font-size: 1.3rem;
            color: var(--white);
            border-bottom: 1px solid var(--orange);
            cursor: pointer;

            :hover{
                background-color: var(--orange);
                transition: 1s;
            }
        }
    }
`