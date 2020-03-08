import React from "react";
import styled from "@emotion/styled";

const ContenedorFrase = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: white;
  max-width: 800px;
  margin-top: 17rem;

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    color: #666;
    text-align: right;
    margin-top: 2rem;
    font-weight: bold;
  }
`;

const Frase = props => {
  if (Object.keys(props.frase).length === 0) return null;

  return (
    <ContenedorFrase>
      <h1>{props.frase.quote}</h1>
      <p>- {props.frase.author}</p>
    </ContenedorFrase>
  );
};

export default Frase;
