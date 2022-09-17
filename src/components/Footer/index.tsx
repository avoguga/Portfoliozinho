import { useEffect, useState } from "react";
import { Container, SoundButton, PauseButton, StopButton } from "./styles";
import Sound from "../../assets/dale.mp3";

export function Footer() {
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
    <Container isDale={isDale}>
      <SoundButton isDale={isDale} onClick={playSound}>DALE</SoundButton>
      <PauseButton isDale={isDale} onClick={pauseSound}>PAUSA O DALE</PauseButton>
      <StopButton isDale={isDale} onClick={stopSound}>PARA O DALE</StopButton>
    </Container>
  );
}

export default Footer;
