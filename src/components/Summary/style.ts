import styled from "styled-components";

export const Container = styled.section`
  margin-top: -10rem;

  display: grid; 
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem; 
    color: var(--text-title);
    
    &.card-total { 
      background: var(--green);
      color: var(--shape);
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    strong {
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
      display: block;
    }

  }
`