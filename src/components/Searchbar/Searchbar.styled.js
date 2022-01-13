import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;

  background-color: ${(props) => props.theme.colors.backgroundColor};
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
  padding-left: 5px;
  padding-right: 5px;

  @media (min-width: 768px) {
    width: 500px;
  }
`;

export const Label = styled.label`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 32px;
  padding: 0;
  padding-left: 36px;

  color: inherit;

  border: none;
  border-radius: 4px;

  transition: border-color 250ms ease-in-out;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.textColor};
    outline: none;
  }
`;
