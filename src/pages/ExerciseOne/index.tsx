import Typography from '@eduzz/houston-ui/Typography'
import { Container } from './styles'
import Navbar from '../../components/Navbar'

import {
  sumOfAnyMultiplesBy,
  sumOfAllMultiplesBy,
  sumOfOrTargertAndTargetsBy,
} from '../../utils'

function ExerciseOne() {
  return (
    <Container data-testid='exerciseone'>
      <Typography size='xx-large' fontWeight='bold'>
        Exercise One
      </Typography>
      <Navbar />
      <ul>
        <li>
          Qual é o valor da soma de todos os números múltiplos de 3 ou 5 de
          números naturais abaixo de 1000?
        </li>
        a{sumOfAnyMultiplesBy([3, 5], 1000)}
        <li>
          Qual é o valor da soma de todos os números múltiplos de 3 e 5 de
          números naturais abaixo de 1000?
        </li>
        {sumOfAllMultiplesBy([3, 5], 1000)}
        <li>
          Qual é o valor da soma de todos os números múltiplos de (3 ou 5) e 7
          de números naturais abaixo de 1000?
        </li>
        {sumOfOrTargertAndTargetsBy([3, 5], [7], 1000)}
      </ul>
    </Container>
  )
}

export default ExerciseOne
