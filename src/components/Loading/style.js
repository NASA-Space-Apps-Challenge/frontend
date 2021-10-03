import styled from "styled-components";

export const Div = styled.div`
  background-color: #5555ff99;
  width: 80%;
  max-width: 1000px;
  height: 80vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 2rem;
  z-index: 1000;
`;

export const Iframe = styled.iframe`
  width: 100%;
  aspect-ratio: 16/9;
`;

export const Button = styled.button`
  background-color: #55a5ff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: 200ms ease;
  &:hover {
    background-color: #55a599;
  }
`;
