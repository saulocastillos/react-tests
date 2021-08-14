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
      <div data-testid=\\"navbar\\" class=\\"sc-gtsrHT wxswG\\"><a role=\\"link\\" aria-label=\\"home\\" href=\\"/\\">
          <p class=\\"MuiTypography-root text-0-3-1 text-d0-0-3-2  MuiTypography-body1\\">Home</p>
        </a><a role=\\"link\\" aria-label=\\"exerciseone\\" href=\\"/exerciseone\\">
          <p class=\\"MuiTypography-root text-0-3-1 text-d1-0-3-3  MuiTypography-body1\\">Exercise One</p>
        </a><a role=\\"link\\" aria-label=\\"exercisetwo\\" href=\\"/exercisetwo\\">
          <p class=\\"MuiTypography-root text-0-3-1 text-d2-0-3-4  MuiTypography-body1\\">Exercise Two</p>
        </a><a role=\\"link\\" aria-label=\\"exercisethree\\" href=\\"/exercisethree\\">
          <p class=\\"MuiTypography-root text-0-3-1 text-d3-0-3-5  MuiTypography-body1\\">Exercise Three</p>
        </a><a role=\\"link\\" aria-label=\\"exercisefour\\" href=\\"/exercisefour\\">
          <p class=\\"MuiTypography-root text-0-3-1 text-d4-0-3-6  MuiTypography-body1\\">Exercise Four</p>
        </a></div>
    </div>"
  `)
})
