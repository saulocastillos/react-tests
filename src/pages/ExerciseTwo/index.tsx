import { useState } from 'react'
import Typography from '@eduzz/houston-ui/Typography'
import { Container } from './styles'
import Navbar from '../../components/Navbar'

import { isAHappyNumber } from '../../utils'

function ExerciseTwo() {
  const [numberInput, setNumberInput] = useState(null)

  return (
    <Container data-testid='exercisetwo'>
      <Typography size='xx-large' fontWeight='bold'>
        Exercise Two
      </Typography>
      <Navbar />
      <p>Dado um número natural qualquer, determina se é um número feliz</p>
      <input
        data-testid='input'
        onChange={(e) => {
          setNumberInput(e.target.value)
        }}
      />
      <p>Resposta:</p>
      {numberInput && isAHappyNumber(numberInput) && 'É feliz'}
      {numberInput && !isAHappyNumber(numberInput) && 'Não é feliz'}
    </Container>
  )
}

export default ExerciseTwo
