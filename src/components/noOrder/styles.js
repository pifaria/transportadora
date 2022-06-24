import styled from "styled-components";

export const Container = styled.section`
    height: 100%;
    width: 90%;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 36px;
    
    h1{
        color: var(--blue);
        font-weight: 400;
    }
        
        
    span{
        color: var(--orange);
    }
    
    h2{
        color: var(--blue);
    }
    
    p, li{
        text-align: start;
    }
`