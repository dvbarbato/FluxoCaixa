import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    :root {
        --background: #f0f2f5;
        --red: #e52e4d;
        --green: #33CC95;
        --blue: #5429cc;
        --blue-light: #6933ff;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --background: #f0f2f5;
        --shape: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // font-size: 16px (ideal para desktop)
    // REM = 1REM = 16px
    html {
        @media (max-width: 1080px) {
            font-size: 87.75%; // isso equivale a 15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; // equivale a 14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400; // geralmente o padrao da fonte poppins é 400
    }

    h1, h2, h3, h4, h5, h6, strong { //sāo as tags de negrito
        font-weight: 600;

    }

    button {
        cursor: pointer; // é botão clicável
    }

    [disabled] {
        opacity: 0.6; // tudo que estiver disabilitado ficará mais claro
        cursor: not-allowed; //mostra icone de não permitido
    }

    .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.8);
        }
    }
`