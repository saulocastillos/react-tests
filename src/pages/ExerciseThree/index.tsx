import Typography from '@eduzz/houston-ui/Typography'
import { Container } from './styles'
import Navbar from '../../components/Navbar'

import { isThisWordPrimeHappyMultiple } from '../../utils'

function ExerciseThree() {
  return (
    <Container data-testid='exercisethree'>
      <Typography size='xx-large' fontWeight='bold'>
        Exercise Three
      </Typography>
      <Navbar />
      <p>
        Um sistema que, quando executado, transforme uma palavra em um número,
        seguindo a lógica acima, e responda às três questões: se é prima, feliz
        e múltipla de 3 ou 5.
      </p>
      <p>Palavra: teste</p>
      <ul>
        {Object.entries(isThisWordPrimeHappyMultiple('teste')).map(
          (item, idx) => {
            return <li key={item[0]}>{`${item[0]}: ${item[1]}:`}</li>
          }
        )}
      </ul>
      <p>Palavra: abc</p>
      <ul>
        {Object.entries(isThisWordPrimeHappyMultiple('abcd')).map(
          (item, idx) => {
            return <li key={item[0]}>{`${item[0]}: ${item[1]}:`}</li>
          }
        )}
      </ul>
    </Container>
  )
}

export default ExerciseThree
