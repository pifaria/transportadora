import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;


    div{
        display: flex;
        align-items: center ;
        width: 100px;
        height: 100px;
        margin-top: 20px;
        border: 1px solid var(--blue);


        img{
            width: 100%;
        }
    }
`