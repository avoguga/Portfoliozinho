import styled from "styled-components";

export const Container = styled.div`
  grid-area: CT;
  background-color: whitesmoke;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// TO DO - REFATORAR ISSO NÉ IRMÃO TÁ FEIAO ESSA REPETIÇÃO AI

export const SoundButton = styled.button`
  transition: background-color 0.3s, box-shadow 0.3s;
  margin: 10px;
  padding: 12px 16px 12px 42px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);

  color: #000;
  font-size: 20px;
  font-weight: bold;
 

  background-image: url(https://www.svgrepo.com/show/393821/sound.svg);
  background-color: white;
  background-repeat: no-repeat;
  background-position: 7px 10px;
  background-size: 25px;

  &:hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
  }

  &:active {
    background-color: #eeeeee;
  }

  &:focus {
    outline: none;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25),
      0 0 0 3px #c8dafc;
  }

  &:disabled {
    filter: grayscale(100%);
    background-color: #ebebeb;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
`;

export const PauseButton = styled.button`
  transition: background-color 0.3s, box-shadow 0.3s;
  margin: 10px;
  padding: 12px 16px 12px 42px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);

  color: #000;
  font-size: 20px;
  font-weight: bold;
 

  background-image: url(https://www.svgrepo.com/show/44880/pause.svg);
  background-color: white;
  background-repeat: no-repeat;
  background-position: 7px 10px;
  background-size: 25px;

  &:hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
  }

  &:active {
    background-color: #eeeeee;
  }

  &:focus {
    outline: none;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25),
      0 0 0 3px #c8dafc;
  }

  &:disabled {
    filter: grayscale(100%);
    background-color: #ebebeb;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
`;

export const StopButton = styled.button`
  transition: background-color 0.3s, box-shadow 0.3s;
  margin: 10px;
  padding: 12px 16px 12px 42px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);

  color: #000;
  font-size: 20px;
  font-weight: bold;
 

  background-image: url(https://www.svgrepo.com/show/53664/stop.svg);
  background-color: white;
  background-repeat: no-repeat;
  background-position: 7px 10px;
  background-size: 25px;

  &:hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
  }

  &:active {
    background-color: #eeeeee;
  }

  &:focus {
    outline: none;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25),
      0 0 0 3px #c8dafc;
  }

  &:disabled {
    filter: grayscale(100%);
    background-color: #ebebeb;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
`;