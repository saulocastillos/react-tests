import { MemoryRouter } from 'react-router-dom'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'

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

it('should render a exercise four page', () => {
  act(() => {
    render(<MemoryRouterWrapper />, container)
  })

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"sc-bdnxRM ekCgGU\\">
      <h1>Exercise Four</h1>
      <div class=\\"sc-hKFxyN cugLtq\\"><a role=\\"link\\" aria-label=\\"home\\" href=\\"/\\">Home</a><a role=\\"link\\" aria-label=\\"exerciseone\\" href=\\"/exerciseone\\">Exercise One</a><a role=\\"link\\" aria-label=\\"exercisetwo\\" href=\\"/exercisetwo\\">Exercise Two</a><a role=\\"link\\" aria-label=\\"exercisethree\\" href=\\"/exercisethree\\">Exercise Three</a><a role=\\"link\\" aria-label=\\"exercisefour\\" href=\\"/exercisefour\\">Exercise Four</a></div>
      <h2>Store</h2>
      <div class=\\"sc-gtsrHT bZFitm\\">
        <div class=\\"sc-eCApnc ftQZBA\\">
          <p>Smartphone X1</p>
          <p>1000</p><button type=\\"button\\">Adicionar</button>
        </div>
        <div class=\\"sc-eCApnc ftQZBA\\">
          <p>Smartphone X2</p>
          <p>2000</p><button type=\\"button\\">Adicionar</button>
        </div>
        <div class=\\"sc-eCApnc ftQZBA\\">
          <p>Smartphone X3</p>
          <p>3000</p><button type=\\"button\\">Adicionar</button>
        </div>
      </div>
      <h2>Cart Summary</h2>
      <div class=\\"sc-dlnjwi iCaKEf\\">
        <table>
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Product</th>
              <th>Price</th>
              <th>Total</th>
              <th class=\\"actions\\">Actions</th>
            </tr>
          </thead>
        </table>
      </div>Total: 0
    </div>"
  `)
})
