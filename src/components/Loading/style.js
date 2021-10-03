import styled from "styled-components";

export const Div = styled.div`
  background-color: #5555ff99;
  width: 60%;
  max-width: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 1rem;
  z-index: 1000;
`;

export const Iframe = styled.iframe`
  display: block;
  margin: 0px auto;
  border: none;
  width: 100%;
  height: 50vh;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #9c4538;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: 200ms ease;
  &:hover {
    background-color: #5c2921;
  }
`;
