import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    :root {
        --background: #F7F7F7;
        --shape: #FFFFFF;
        --red: #E63946;
        --green: #25c49d;
        --body: #1C2541;
        --blue: #4A52FF;
        --blue-button: #4A52FF;
        --text-light: #363F5F;
        --text-body: #101010;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {

        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }

    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased; 
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }
    [disable] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`