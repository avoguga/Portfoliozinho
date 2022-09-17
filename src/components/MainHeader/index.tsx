import {
  Container,
  FirstSectionDiv,
  SecondSectionDiv,
  ThirdSectionDiv,
  GoogleButton,
} from "./styles";
import UserCard from "../UserCard";
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
          <UserCard userName={userName} userProfile={userProfile} />
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
