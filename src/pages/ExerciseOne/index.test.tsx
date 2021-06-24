import { MemoryRouter } from 'react-router-dom'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'

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

it('should render a exercise one page', () => {
  act(() => {
    render(<MemoryRouterWrapper />, container)
  })

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"sc-bdnxRM\\">
      <h1>Exercise One</h1>
      <div class=\\"sc-gtsrHT wxswG\\"><a role=\\"link\\" aria-label=\\"home\\" href=\\"/\\">Home</a><a role=\\"link\\" aria-label=\\"exerciseone\\" href=\\"/exerciseone\\">Exercise One</a><a role=\\"link\\" aria-label=\\"exercisetwo\\" href=\\"/exercisetwo\\">Exercise Two</a><a role=\\"link\\" aria-label=\\"exercisethree\\" href=\\"/exercisethree\\">Exercise Three</a><a role=\\"link\\" aria-label=\\"exercisefour\\" href=\\"/exercisefour\\">Exercise Four</a></div>
      <ul>
        <li>Qual é o valor da soma de todos os números múltiplos de 3 ou 5 de números naturais abaixo de 1000?</li>233168<li>Qual é o valor da soma de todos os números múltiplos de 3 e 5 de números naturais abaixo de 1000?</li>33165<li>Qual é o valor da soma de todos os números múltiplos de (3 ou 5) e 7 de números naturais abaixo de 1000?</li>33173
      </ul>
    </div>"
  `)
})