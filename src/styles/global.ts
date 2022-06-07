import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red:  #e52e4d;
    --blue: #5429cc; 
    --green: #33cc95;

    --blue-light: #6933ff;
    --text-title: #363F5F;
    --text-body: #969cb3; 
    --shape: #ffffff;

  }


  * {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
  }

  body {
    background: var(--background);
  }

  button {
    cursor: pointer;
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

  .react-modal-overlay {
    background: rgba(0,0,0,0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;

    background: var(--background);
    padding: 3rem; 
    position: relative; 
    border-radius: .25rem;
  }

  .react-modal-close {
    right: 1.5rem;
    top: 1.5rem;
    position: absolute;
    border: 0;
    background: transparent;

    transition: filter .2s;

    &:hover {
      filter: brightness(.8)
    }

  }
`