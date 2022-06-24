import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: "Inter", sans-serif;
    }

    :root{
        --blue: #6379B3;
        --orange: #E6B733;
        --black: #000000;
        --white: #f6f6f6;
        --grey: #a9a9a9;
    }

    h1, h2, h3, h4, h5, h6{
       font-family: "Roboto", sans-serif
    }

    button{
        cursor: pointer;
    }

    li{
        list-style: none;
    }

    a{
        text-decoration: none;
    }
`