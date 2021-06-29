import { Link } from 'react-router-dom'
import { Container } from './styles'

function Navbar() {
  return (
    <Container data-testid='navbar'>
      <Link role='link' aria-label='home' to='/'>
        Home
      </Link>
      <Link role='link' aria-label='exerciseone' to='/exerciseone'>
        Exercise One
      </Link>
      <Link role='link' aria-label='exercisetwo' to='/exercisetwo'>
        Exercise Two
      </Link>
      <Link role='link' aria-label='exercisethree' to='/exercisethree'>
        Exercise Three
      </Link>
      <Link role='link' aria-label='exercisefour' to='/exercisefour'>
        Exercise Four
      </Link>
    </Container>
  )
}

export default Navbar
