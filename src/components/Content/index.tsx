import {
  MainContainer,
  FirstSection,
  SecondSection,
  ThirdSection,
} from "./styles";

export function Content() {
  return (
    <MainContainer>
      <FirstSection>
        <h2>Teste o plugin de acessibilidade!</h2>
        <br />
        <p>
          Caso não entenda como usa-lo de primeira, acesse o{" "}
          <span>
            {" "}
            <a
              href="https://github.com/avoguga/accessibility-toolkit"
              target="_blank"
            >
              GitHub do projeto!
            </a>{" "}
          </span>
          Leia o Readme e veja o video de uso!
        </p>
        <br />
        <h2>Teste o sign in do Google!</h2>
        <br />
        <h2>Clique no DALE!</h2>
        <br />
      </FirstSection>
    </MainContainer>
  );
}

export default Content;
