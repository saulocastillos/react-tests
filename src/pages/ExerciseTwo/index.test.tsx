import { MemoryRouter } from 'react-router-dom'
import {
  render,
  act,
  screen,
  fireEvent,
  unmountComponentAtNode,
} from '../../tests'

import ExerciseTwo from './index'

let container = null
beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

const MemoryRouterWrapper = () => {
  return (
    <MemoryRouter initialEntries={['/']}>
      <ExerciseTwo />
    </MemoryRouter>
  )
}

it('should render without crashing', () => {
  act(() => {
    render(<MemoryRouterWrapper />, container)
  })

  expect(screen.getByTestId('exercisetwo')).toBeInTheDocument()
  expect(screen.getByTestId('navbar')).toBeInTheDocument()
  expect(screen.getByTestId('input')).toBeInTheDocument()
  expect(screen.queryByText('É feliz')).not.toBeInTheDocument()
  expect(screen.queryByText('Não é feliz')).not.toBeInTheDocument()
})

it('should render "É feliz" when the input number is a happy number', () => {
  act(() => {
    render(<MemoryRouterWrapper />, container)
  })

  const input = screen.getByTestId('input')

  fireEvent.change(input, { target: { value: '23' } })
  expect(screen.queryByText('É feliz')).toBeInTheDocument()

  fireEvent.change(input, { target: { value: '10' } })
  expect(screen.queryByText('É feliz')).toBeInTheDocument()
})

it('should render "Não é feliz" when the input number is not a happy number', () => {
  act(() => {
    render(<MemoryRouterWrapper />, container)
  })

  const input = screen.getByTestId('input')

  fireEvent.change(input, { target: { value: '5' } })
  expect(screen.queryByText('Não é feliz')).toBeInTheDocument()

  fireEvent.change(input, { target: { value: '423' } })
  expect(screen.queryByText('Não é feliz')).toBeInTheDocument()
})
