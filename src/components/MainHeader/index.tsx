import {
  Container,
  FirstSectionDiv,
  SecondSectionDiv,
  ThirdSectionDiv,
  GoogleButton,
} from "./styles";

import { GoogleThings } from "../Content/styles";
import { useState, useContext } from "react";

export function MainHeader() {
  const profile: any = localStorage.getItem("profilePic");
  const name: any = localStorage.getItem("name");
  const email = localStorage.getItem("email");




  return (
    <Container>
      <FirstSectionDiv>
        <GoogleThings>
          <h2>User info: </h2>
          <img src={profile} alt="" />
          <h3>Username: {name}</h3>
        </GoogleThings>
      </FirstSectionDiv>
      <SecondSectionDiv />
      <ThirdSectionDiv>
        <GoogleButton onClick={() => console.log('oi')}>Sign in with Google</GoogleButton>
      </ThirdSectionDiv>
    </Container>
  );
}

export default MainHeader;
