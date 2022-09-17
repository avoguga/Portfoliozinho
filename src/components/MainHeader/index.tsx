import {
  Container,
  FirstSectionDiv,
  SecondSectionDiv,
  ThirdSectionDiv,
  GoogleButton,
} from "./styles";

import { signInWithGoogle } from "../../Firebase";
import { GoogleThings } from "../Content/styles";
import { useState, useContext } from "react";

export function MainHeader() {
  const profile: any = localStorage.getItem("profilePic");
  const name: any = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  const [isUserAuth, setIsUserAuth] = useState(false);
  const [userProfile, setUserProfile] = useState(localStorage.getItem("profilePic"));
  const [userName, setUserName] = useState(localStorage.getItem("name"));


  const auth = () => {
    signInWithGoogle();
    setUserProfile(profile)
    setUserName(name);
    setIsUserAuth(true);
  };

  console.log(userName)

  return (
    <Container>
      <FirstSectionDiv>
        <GoogleThings>
          <h2>User info: </h2>
          <img src={userProfile} alt="" />
          <h3>Username: {userName}</h3>
        </GoogleThings>
      </FirstSectionDiv>
      <SecondSectionDiv />
      <ThirdSectionDiv>
        <GoogleButton onClick={auth}>Sign in with Google</GoogleButton>
      </ThirdSectionDiv>
    </Container>
  );
}

export default MainHeader;
