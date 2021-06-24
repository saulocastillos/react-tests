import React from 'react'
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

it('should render a exercise four page', () => {
  act(() => {
    render(<Component />, container)
  })

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"sc-bdnxRM ekCgGU\\">
      <h1>Exercise Four</h1>
      <h2>Store</h2>
      <div class=\\"sc-gtsrHT bZFitm\\">
        <div class=\\"sc-hKFxyN bJwpig\\">
          <p>Smartphone X1</p>
          <p>1000</p><button type=\\"button\\">Adicionar</button>
        </div>
        <div class=\\"sc-hKFxyN bJwpig\\">
          <p>Smartphone X2</p>
          <p>2000</p><button type=\\"button\\">Adicionar</button>
        </div>
        <div class=\\"sc-hKFxyN bJwpig\\">
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
