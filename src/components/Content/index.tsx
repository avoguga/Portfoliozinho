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
        <br />
        <h2>ToDO ao VIVASSO:</h2>
        <br />
        <p>Deixar responsivo</p>
        <p>Deixar acessivel</p>
        <p>Adicionar algo legal</p>
        <p>Colocar a musica num banco de dados e dar um fetch</p>
        <p>Subir dominio</p>

      </FirstSection>
    </MainContainer>
  );
}

export default Content;
