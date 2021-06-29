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
      <div data-testid=\\"navbar\\" class=\\"sc-gtsrHT wxswG\\"><a role=\\"link\\" aria-label=\\"home\\" href=\\"/\\">Home</a><a role=\\"link\\" aria-label=\\"exerciseone\\" href=\\"/exerciseone\\">Exercise One</a><a role=\\"link\\" aria-label=\\"exercisetwo\\" href=\\"/exercisetwo\\">Exercise Two</a><a role=\\"link\\" aria-label=\\"exercisethree\\" href=\\"/exercisethree\\">Exercise Three</a><a role=\\"link\\" aria-label=\\"exercisefour\\" href=\\"/exercisefour\\">Exercise Four</a></div>
    </div>"
  `)
})
