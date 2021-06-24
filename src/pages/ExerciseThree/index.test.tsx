import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'

import ExerciseThree from './index'

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
      <ExerciseThree />
    </MemoryRouter>
  )
}

it('should render a exercise three page', () => {
  act(() => {
    render(<MemoryRouterWrapper />, container)
  })

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"sc-bdnxRM\\">
      <h1>Exercise Three</h1>
      <div class=\\"sc-gtsrHT wxswG\\"><a role=\\"link\\" aria-label=\\"home\\" href=\\"/\\">Home</a><a role=\\"link\\" aria-label=\\"exerciseone\\" href=\\"/exerciseone\\">Exercise One</a><a role=\\"link\\" aria-label=\\"exercisetwo\\" href=\\"/exercisetwo\\">Exercise Two</a><a role=\\"link\\" aria-label=\\"exercisethree\\" href=\\"/exercisethree\\">Exercise Three</a><a role=\\"link\\" aria-label=\\"exercisefour\\" href=\\"/exercisefour\\">Exercise Four</a></div>
      <p>Um sistema que, quando executado, transforme uma palavra em um número, seguindo a lógica acima, e responda às três questões: se é prima, feliz e múltipla de 3 ou 5.</p>
      <p>Palavra: teste</p>
      <ul>
        <li>prime: false:</li>
        <li>happy: false:</li>
        <li>multipleOf3or5: true:</li>
      </ul>
      <p>Palavra: abc</p>
      <ul>
        <li>prime: false:</li>
        <li>happy: true:</li>
        <li>multipleOf3or5: true:</li>
      </ul>
    </div>"
  `)
})
