import { Container, FirstSection, SecondSection, ThirdSection } from "./styles";

export function Content() {
  return (
    <Container>
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
        <h3>Acesse minhas redes:</h3>
        <br />
        <p><a href="https://www.linkedin.com/in/gustvo/" target="_blank">aaa</a></p>
        <a href="">
          <img src="https://www.svgrepo.com/show/157815/twitter.svg" alt="Acesse meu twitter" style={{width: '40px'}}/>
        </a>
        <p>Instagram</p>
        <p>Medium</p>

      </FirstSection>
      <SecondSection>segundo</SecondSection>
      <ThirdSection>terceiro</ThirdSection>
    </Container>
  );
}

export default Content;
