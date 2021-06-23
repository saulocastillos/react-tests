import { useState } from "react";
import { Container } from "./styles";

import { isAHappyNumber } from "../../utils";

function ExerciseTwo() {
  const [numberInput, setNumberInput] = useState(null);
  const [isHappy, setIsHappy] = useState(null);

  return (
    <Container>
      <h1>Exercise Two</h1>
      <p>Dado um número natural qualquer, determina se é um número feliz</p>
      <input onChange={(e) => setNumberInput(e.target.value)} />
      <button
        type="button"
        onClick={() => {
          setIsHappy(isAHappyNumber(numberInput));
        }}
      >
        É um número feliz?
      </button>
      <p>Resposta:</p>
      {numberInput && (isHappy ? "É feliz" : "Não é feliz")}
    </Container>
  );
}

export default ExerciseTwo;
