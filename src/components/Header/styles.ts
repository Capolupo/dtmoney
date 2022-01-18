import styled from "styled-components";

export const Container = styled.header`
background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  /* display flex e alin para alinhar o botão com a logo */
  display: flex;
  align-items: center; 
  /*para ter o espaço entre o botão e a logo */
  justify-content: space-between;

  button{
    font-size: 1rem;
    color: #FFF;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    /*metodo para toda vez que o filter do button for acionado ele suavisar a transição */
    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.9) ;
    }

  }
`;