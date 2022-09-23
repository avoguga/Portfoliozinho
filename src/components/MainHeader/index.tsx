import {
  HeaderContainer,
  FirstSectionDiv,
  SecondSectionDiv,
  ThirdSectionDiv,
  GoogleButton,
  Icon,
  Text
} from "./styles";
import UserCard from "../UserCard";
import { useContext } from "react";
import { Context } from "../../contexts/AppContext";
import React from "../../assets/react.svg";
import Vite from "../../assets/vite.svg";

export function MainHeader() {
  const { userName, userProfile, signInWithGoogle, isUserLogIn }: any =
    useContext(Context);

  return (
    <HeaderContainer>
      <FirstSectionDiv>
        {
        isUserLogIn ? (
          <GoogleButton onClick={signInWithGoogle}>
            Sign in with Google
          </GoogleButton>
        ) : (
          <UserCard userName={userName} userProfile={userProfile} />
        )}
      </FirstSectionDiv>
      <SecondSectionDiv />
      <ThirdSectionDiv>
        <Text>Made with</Text>
        <Icon src={ Vite } alt="Foto do Gugas"/>
        <Text>and</Text>
        <Icon src={ React } alt="Foto do Gugas"/>
      </ThirdSectionDiv>
    </HeaderContainer>
  );
}

export default MainHeader;
