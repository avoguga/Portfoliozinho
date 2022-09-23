import { useContext, useEffect, useState } from "react";
import {
  FooterContainer,
  SoundButton,
  PauseButton,
  StopButton,
  Text,
  SocialMedia,
  SoundSection
} from "./styles";
import Sound from "../../assets/dale.mp3";
import { AuthContext, CabareContext } from "../../contexts/AuthContexts";

export function Footer() {
  const { userName, userProfile, signInWithGoogle, isUserLogIn }: any =
    useContext(AuthContext);

  const audioTune = new Audio(Sound);

  const [audio, setAudio] = useState(audioTune);
  const [playInLoop, setPlayInLoop] = useState(false);
  const [isDale, setIsDale] = useState(false);

  useEffect(() => {
    audioTune.load();
  }, []);

  useEffect(() => {
    audioTune.loop = playInLoop;
  }, [playInLoop]);

  /** Toca a musica */
  const playSound = () => {
    audio.play();
    setIsDale(true);
  };

  /** Pausa a musica */
  const pauseSound = () => {
    setIsDale(false);
    audio.pause();
  };

  /** Para a musica */
  const stopSound = () => {
    setIsDale(false);
    audio.pause();
    audio.currentTime = 0;
  };

  return (
    <FooterContainer isDale={isDale}>
      {userName == undefined ? (
        <SoundSection>
          <SoundButton isDale={isDale} onClick={playSound}>
            DALE
          </SoundButton>
          <PauseButton isDale={isDale} onClick={pauseSound}>
            PAUSA O DALE
          </PauseButton>
          <StopButton isDale={isDale} onClick={stopSound}>
            PARA O DALE
          </StopButton>
        </SoundSection>
      ) : (
        <Text>Faz o Sign in no Google ali pra testar um negócio</Text>
      )}

      <SocialMedia>
        <Text>Acesse minhas redes:</Text>
        <br />
        <a href="https://www.linkedin.com/in/gustvo/" target="_blank">
          <img
            src="https://www.svgrepo.com/show/138936/linkedin.svg"
            alt="Acesse meu LinkedIn"
            style={{ width: "40px" }}
          />
        </a>
        <a href="https://twitter.com/o_gstavo" target="_blank">
          <img
            src="https://www.svgrepo.com/show/157815/twitter.svg"
            alt="Acesse meu Twitter"
            style={{ width: "40px" }}
          />
        </a>
        <a href="https://medium.com/@Gugass" target="_blank">
          <img
            src="https://www.svgrepo.com/show/354055/medium.svg"
            alt="Acesse meu Medium"
            style={{ width: "80px" }}
          />
        </a>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
