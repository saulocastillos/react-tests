import { MemoryRouter } from 'react-router-dom'
import { unmountComponentAtNode } from 'react-dom'
import { render, act, screen } from '../../tests'

import ExerciseFour from './index'

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
      <ExerciseFour />
    </MemoryRouter>
  )
}

it('should render without crashing', () => {
  act(() => {
    render(<MemoryRouterWrapper />, container)
  })

  expect(screen.getByTestId('exercisefour')).toBeInTheDocument()
  expect(screen.getByTestId('navbar')).toBeInTheDocument()
  expect(screen.getByTestId('productbox')).toBeInTheDocument()
  expect(screen.getByTestId('cartsummary')).toBeInTheDocument()
})
