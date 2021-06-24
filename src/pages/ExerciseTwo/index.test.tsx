import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'

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

it('should render a exercise two page', () => {
  act(() => {
    render(<ExerciseTwo />, container)
  })

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"sc-bdnxRM\\">
      <h1>Exercise Two</h1>
      <p>Dado um número natural qualquer, determina se é um número feliz</p><input>
      <p>Resposta:</p>
    </div>"
  `)
})
