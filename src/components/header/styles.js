import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: var(--blue);

    @media (min-width: 1000px){ 
        padding: 30px 0;
    }
`

export const Content = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: 100px;

    img{
        width: 50%;
        cursor: pointer;
    }

    svg{
        color: var(--white);
    }

    nav{
        display: none;
    }

    @media (min-width: 1000px){

        nav{
            display: flex;
            
            a{
                color: var(--white);
                margin-left: 20px;

                :hover{
                    color: var(--orange);
                    border-bottom: 1px solid var(--orange);
                }
            }
        }

        svg{
            display:  none;
        }

        img{
            display: block;
            width: 20%;
        }
    }
`