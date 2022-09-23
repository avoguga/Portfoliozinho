import { useContext, useEffect, useState } from "react";
import { FooterContainer, SoundButton, PauseButton, StopButton, Text } from "./styles";
import Sound from "../../assets/dale.mp3";
import { AuthContext } from "../../contexts/AuthContexts";

export function Footer() {
  const { userName, userProfile, signInWithGoogle, isUserLogIn }: any =
    useContext(AuthContext);

  const audioTune = new Audio(Sound);

  const [audio, setAudio] = useState(audioTune)
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
    setIsDale(true)
  };

  /** Pausa a musica */
  const pauseSound = () => {
    setIsDale(false)
    audio.pause();
  };

  /** Para a musica */
  const stopSound = () => {
    setIsDale(false)
    audio.pause();
    audio.currentTime = 0;
  }

  return (
    <FooterContainer isDale={isDale}>
      {userName != undefined ? 
      (
      <div>
        <SoundButton isDale={isDale} onClick={playSound}>DALE</SoundButton>
        <PauseButton isDale={isDale} onClick={pauseSound}>PAUSA O DALE</PauseButton>
        <StopButton isDale={isDale} onClick={stopSound}>PARA O DALE</StopButton>
      </div>
      ) : (
        <Text>Faz o Sign in no Google ali pra testar um negócio</Text>
      )
      }
    </FooterContainer>
  );
}

export default Footer;
