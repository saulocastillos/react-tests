import { unmountComponentAtNode } from 'react-dom'
import { render, act, screen, renderHook } from '../../tests'
import useCart from '../../hooks/useCart'

import CartSummary from './index'

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

it('should render empty summary without crashing', () => {
  const { result, unmount } = renderHook(() => useCart())

  act(() => {
    render(
      <CartSummary
        cart={result.current.cart}
        addItemOnCart={result.current.addItemOnCart}
        removeItemFromCart={result.current.removeItemFromCart}
      />,
      container
    )
  })

  expect(screen.getByTestId('cartsummary'))

  unmount()
})

it('should render a products inserted on cart', () => {
  const { result, unmount } = renderHook(() => useCart())

  act(() => {
    result.current.cleanCart()
  })

  act(() => {
    result.current.addItemOnCart(products[0])
    result.current.addItemOnCart(products[1])
  })

  act(() => {
    render(
      <CartSummary
        cart={result.current.cart}
        addItemOnCart={result.current.addItemOnCart}
        removeItemFromCart={result.current.removeItemFromCart}
      />,
      container
    )
  })

  expect(screen.queryByText('Smartphone X1')).toBeInTheDocument()
  expect(screen.queryByText('Smartphone X2')).toBeInTheDocument()

  unmount()
})

it('should increase qtt of a product on cart', () => {
  const { result, unmount } = renderHook(() => useCart())

  act(() => {
    result.current.cleanCart()
  })

  act(() => {
    result.current.addItemOnCart(products[0])
  })

  act(() => {
    render(
      <CartSummary
        cart={result.current.cart}
        addItemOnCart={result.current.addItemOnCart}
        removeItemFromCart={result.current.removeItemFromCart}
      />,
      container
    )
  })

  const increaseButton = screen.getAllByTestId('increaseButton')[0]

  act(() => {
    increaseButton.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })

  expect(result.current.cart.itens[0].quantity).toBe(2)

  unmount()
})

it('should decrease qtt of a product on cart', () => {
  const { result, unmount } = renderHook(() => useCart())

  act(() => {
    result.current.cleanCart()
  })

  act(() => {
    result.current.addItemOnCart(products[0])
    result.current.addItemOnCart(products[0])
  })

  act(() => {
    render(
      <CartSummary
        cart={result.current.cart}
        addItemOnCart={result.current.addItemOnCart}
        removeItemFromCart={result.current.removeItemFromCart}
      />,
      container
    )
  })

  const decreaseButton = screen.getAllByTestId('decreaseButton')[0]

  act(() => {
    decreaseButton.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })

  expect(result.current.cart.itens[0].quantity).toBe(1)

  unmount()
})

it('should remove a product from cart summary when qtt === 1', () => {
  const { result, unmount } = renderHook(() => useCart())

  act(() => {
    result.current.cleanCart()
  })

  act(() => {
    result.current.addItemOnCart(products[0])
  })

  act(() => {
    render(
      <CartSummary
        cart={result.current.cart}
        addItemOnCart={result.current.addItemOnCart}
        removeItemFromCart={result.current.removeItemFromCart}
      />,
      container
    )
  })

  const decreaseButton = screen.getAllByTestId('decreaseButton')[0]

  act(() => {
    decreaseButton.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })

  expect(result.current.cart.itens).toEqual([])

  unmount()
})
