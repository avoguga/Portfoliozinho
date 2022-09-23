import styled from "styled-components";

export const MainContainer = styled.main`
  grid-area: CT;
  background-color: whitesmoke;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const FirstSection = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px;
  border-right: 2px solid black;
`;

export const SecondSection = styled.div`
  height: 100%;
  width: 100%;
`;

export const ThirdSection = styled.div`
  height: 100%;
  width: 100%;
  border-left: 2px solid black;
`;