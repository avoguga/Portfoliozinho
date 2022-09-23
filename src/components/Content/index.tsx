import { MainContainer, FirstSection, SecondSection, ThirdSection } from "./styles";

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
        <h3>Acesse minhas redes:</h3>
        <br />
        <a href="https://www.linkedin.com/in/gustvo/" target="_blank">
          <img src="https://www.svgrepo.com/show/138936/linkedin.svg" alt="Acesse meu LinkedIn" style={{width: '40px'}}/>
        </a>
        <a href="https://twitter.com/o_gstavo" target="_blank">
          <img src="https://www.svgrepo.com/show/157815/twitter.svg" alt="Acesse meu Twitter" style={{width: '40px'}}/>
        </a>
        <a href="https://medium.com/@Gugass" target="_blank">
          <img src="https://www.svgrepo.com/show/354055/medium.svg" alt="Acesse meu Medium" style={{width: '40px'}}/>
        </a>

      </FirstSection>
    </MainContainer>
  );
}

export default Content;
