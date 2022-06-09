import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  gap: 20px;

  border-radius: 8px;
  border: 2px solid white;

  background-color: whitesmoke;

  width: 336px;
  height: 450px;

  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.63);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.63);

  input {
    padding: 10px;
    border: none;
    border-bottom: 2px solid gray;
  }

  button {
    width: 100px;
    height: 25px;

    color: white;
    background-color: blue;

    padding: 0px;
    margin: 0px;

    border: blue;
    border-radius: 4px;
  }

  button:hover {
    cursor: pointer;
    filter: brightness(150%);
    transition: 0.5s;
  }

  input:hover {
    filter: brightness(150%);
    transition: 0.5s;
  }

  input:focus {
    filter: brightness(150%);
    transition: 0.5s;
    outline: none;
  }
`;
