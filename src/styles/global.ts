import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red:  #e52e4d;
    --blue: #5429cc; 

    --blue-light: #6933ff;
    --text-title: #363F5F;
    --text-body: #969cb3; 
    --shpae: #ffffff;

  }


  * {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
  }

  body {
    background: var(---background);
  }

  html { 
    @media (max-width: 1024px) {
      font-size: 93.75%;
    }

    @media(max-width: 720px) {
      font-size: 87.5%;
    }

    body, input, textarea, button {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
    }

    h1, h2, h3,h4, h5, h6 {
      font-weight: 600;
    }
  }

`