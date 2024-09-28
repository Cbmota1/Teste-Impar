import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: #F6F4F6;
    }
    button{
        cursor: pointer;
        background: transparent;
        border: none;
    }
    ul, ol {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    li{
        list-style: 0;
    }
    img{
        max-width: 100%;
    } 
`;
