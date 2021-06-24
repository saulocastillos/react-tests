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

it('should render a card component', () => {
  act(() => {
    render(<Component />, container)
  })

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"sc-bdnxRM hPkvCZ\\">
      <p></p>
      <p></p><button type=\\"button\\">Adicionar</button>
    </div>"
  `)
})
