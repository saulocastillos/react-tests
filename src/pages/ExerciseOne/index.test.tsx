import { MemoryRouter } from 'react-router-dom'
import { unmountComponentAtNode } from 'react-dom'
import { render, act, screen } from '../../tests'

import ExerciseOne from './index'

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
      <ExerciseOne />
    </MemoryRouter>
  )
}

it('should render without crashing', () => {
  act(() => {
    render(<MemoryRouterWrapper />, container)
  })

  expect(screen.getByTestId('exerciseone')).toBeInTheDocument()
  expect(screen.getByTestId('navbar')).toBeInTheDocument()
})
