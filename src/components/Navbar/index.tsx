import Typography from '@eduzz/houston-ui/Typography'
import { Link } from 'react-router-dom'
import { Container } from './styles'

const links = [
  { name: 'Home', link: '/', ariaLabel: 'home' },
  { name: 'Exercise One', link: '/exerciseone', ariaLabel: 'exerciseone' },
  { name: 'Exercise Two', link: '/exercisetwo', ariaLabel: 'exercisetwo' },
  {
    name: 'Exercise Three',
    link: '/exercisethree',
    ariaLabel: 'exercisethree',
  },
  { name: 'Exercise Four', link: '/exercisefour', ariaLabel: 'exercisefour' },
]

function Navbar() {
  return (
    <Container data-testid='navbar'>
      {links.map((item) => {
        const { name, link, ariaLabel } = item
        return (
          <Link role='link' aria-label={ariaLabel} to={link}>
            <Typography size='medium' fontWeight='bold'>
              {name}
            </Typography>
          </Link>
        )
      })}
    </Container>
  )
}

export default Navbar
