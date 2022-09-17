import {
  Container,
  FirstSectionDiv,
  SecondSectionDiv,
  ThirdSectionDiv,
  GoogleButton,
} from "./styles";
import { GoogleThings } from "../Content/styles";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContexts";

export function MainHeader() {
  const { userName, userProfile, signInWithGoogle, isUserLogIn }: any =
    useContext(AuthContext);

  return (
    <Container>
      <FirstSectionDiv></FirstSectionDiv>
      <SecondSectionDiv />
      <ThirdSectionDiv>
        {isUserLogIn ? (
          <GoogleThings>
            <h2>User info: </h2>
            <img src={userProfile} alt="" />
            <h3>Username: {userName}</h3>
          </GoogleThings>
        ) : (
          <GoogleButton onClick={signInWithGoogle}>
            Sign in with Google
          </GoogleButton>
        )}
      </ThirdSectionDiv>
    </Container>
  );
}

export default MainHeader;
