import { MemoryRouter } from 'react-router-dom'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'

import Component from './index'

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
    render(
      <MemoryRouter initialEntries={['/']}>
        <Component />
      </MemoryRouter>,
      container
    )
  })

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"sc-bdnxRM\\">
      <h1>Home</h1>
      <ul><a role=\\"link\\" aria-label=\\"exerciseone\\" href=\\"/exerciseone\\">
          <li>Exercise One</li>
        </a><a role=\\"link\\" aria-label=\\"exercisetwo\\" href=\\"/exercisetwo\\">
          <li>Exercise Two</li>
        </a><a role=\\"link\\" aria-label=\\"exercisethree\\" href=\\"/exercisethree\\">
          <li>Exercise Three</li>
        </a><a role=\\"link\\" aria-label=\\"exercisefour\\" href=\\"/exercisefour\\">
          <li>Exercise Four</li>
        </a></ul>
    </div>"
  `)
})
