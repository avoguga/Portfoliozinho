import { useContext } from "react";
import {
  FooterContainer,
  SoundButton,
  PauseButton,
  StopButton,
  Text,
  SocialMedia,
  SoundSection
} from "./styles";
import { Context } from "../../contexts/AppContext";

export function Footer() {
  const { userName, isDale, playSound, pauseSound, stopSound }: any =
    useContext(Context);

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
