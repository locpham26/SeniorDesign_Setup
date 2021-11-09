import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        width: 100%;
    }
    * {
        box-sizing: inherit;
    }
    body {
        min-height: 100%;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        scroll-behavior: smooth;
        font-family: 'Roboto', sans-serif;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
`;

export default GlobalStyle;
