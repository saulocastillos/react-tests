import { Link } from "react-router-dom";
import { Container } from "./styles";

function Home() {
  return (
    <Container>
      <h1>Home</h1>
      <ul>
        <Link role="exercise-link" aria-label="exerciseone" to="/exerciseone">
          <li>Exercise One</li>
        </Link>
        <Link role="exercise-link" aria-label="exercisetwo" to="/exercisetwo">
          <li>Exercise Two</li>
        </Link>
        <Link
          role="exercise-link"
          aria-label="exercisethree"
          to="/exercisethree"
        >
          <li>Exercise Three</li>
        </Link>
        <Link role="exercise-link" aria-label="exercisefour" to="/exercisefour">
          <li>Exercise Four</li>
        </Link>
      </ul>
    </Container>
  );
}

export default Home;
