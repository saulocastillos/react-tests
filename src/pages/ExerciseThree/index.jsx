import { Container } from "./styles";

import { isThisWordPrimeHappyMultiple } from "../../utils";

function ExerciseThree() {
  return (
    <Container>
      <h1>Exercise Three</h1>
      <p>
        Um sistema que, quando executado, transforme uma palavra em um número,
        seguindo a lógica acima, e responda às três questões: se é prima, feliz
        e múltipla de 3 ou 5.
      </p>
      <p>Palavra: 'teste'</p>
      <ul>
        {Object.entries(isThisWordPrimeHappyMultiple("teste")).map((item) => {
          return <li>{`${item[0]}: ${item[1]}:`}</li>;
        })}
      </ul>
      <p>Palavra: 'abc'</p>
      <ul>
        {Object.entries(isThisWordPrimeHappyMultiple("abcd")).map((item) => {
          return <li>{`${item[0]}: ${item[1]}:`}</li>;
        })}
      </ul>
    </Container>
  );
}

export default ExerciseThree;
