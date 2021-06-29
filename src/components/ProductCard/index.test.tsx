import {
  render,
  act,
  screen,
  renderHook,
  unmountComponentAtNode,
} from '../../tests'
import useCart from '../../hooks/useCart'

import ProductCart from './index'

import { products } from '../../mocks/server.json'

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

it('should render a example product cart', () => {
  const { result, unmount } = renderHook(() => useCart())

  act(() => {
    render(
      <ProductCart
        product={products[0]}
        action={result.current.addItemOnCart}
      />,
      container
    )
  })

  expect(screen.getByText(products[0].name))

  unmount()
})

it('should increase qtt of a product on cart', () => {
  const { result, unmount } = renderHook(() => useCart())

  act(() => {
    result.current.cleanCart()
  })

  act(() => {
    render(
      <ProductCart
        product={products[0]}
        action={() => result.current.addItemOnCart(products[0])}
      />,
      container
    )
  })

  const addToCartButton = screen.getAllByTestId('addToCartButton')[0]

  act(() => {
    addToCartButton.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })

  expect(result.current.cart.itens[0].quantity).toBe(1)
  expect(result.current.cart.itens[0].product.name).toBe(products[0].name)
  expect(result.current.cart.itens[0].product.price).toBe(products[0].price)

  unmount()
})
