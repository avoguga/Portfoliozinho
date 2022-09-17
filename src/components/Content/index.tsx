import { useEffect, useState } from "react";
import { Container, SoundButton, PauseButton, StopButton } from "./styles";
import Sound from "../../assets/dale.mp3";

export function Content() {
  const audioTune = new Audio(Sound);

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
    audioTune.play();
    setIsDale(true)
  };

  /** Pausa a musica */
  const pauseSound = () => {
    setIsDale(false)
    audioTune.pause();
  };

  /** Para a musica */
  const stopSound = () => {
    setIsDale(false)
    audioTune.pause();
    audioTune.currentTime = 0;
  }
  console.log(isDale)
  return (
    <Container>
      <SoundButton isDale={isDale} onClick={playSound}>DALE</SoundButton>
      <PauseButton onClick={pauseSound}>PAUSA O DALE</PauseButton>
      <StopButton onClick={stopSound}>PARA O DALE</StopButton>
    </Container>
  );
}

export default Content;
