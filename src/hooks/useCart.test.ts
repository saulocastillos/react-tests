import { render, screen, userEvent, renderHook, act, cleanup } from '../tests'
import useCart from './useCart'

/**
 * TODO: Responder as seguintes perguntas com os testes
 *
 * Qual o valor se ele estiver vazio?
 * E se eu adicionar novos produtos?
 * E se eu adicionar produtos que já tinham sido adicionados?
 * E como eu removo o produto do carrinho?
 * E se eu adicionar dois produtos ao mesmo tempo???? Não implementado
 * E se eu adicionar ou remover a quantidade de produtos no carrinho?
 * E se eu zerar a quantidade de produtos do carrinho?
 */

const defaultProduct: Product = {
  id: 1,
  name: 'Smartphone',
  price: 500,
}

const defaultCart: Cart = {
  id: 1,
  user: null,
  itens: [],
  total: 0,
}

describe('base functions', () => {
  it('should add new product', () => {
    const { result, unmount } = renderHook(() => useCart())

    act(() => {
      result.current.addItemOnCart(defaultProduct)
    })

    expect(result.current.cart).toEqual({
      id: 1,
      user: null,
      itens: [
        {
          quantity: 1,
          product: {
            id: 1,
            name: 'Smartphone',
            price: 500,
          },
          total: 500,
        },
      ],
      total: 500,
    })

    unmount()
  })

  it('should add more items of it', () => {
    const { result } = renderHook(() => useCart())

    act(() => {
      result.current.setCart(defaultCart)
    })

    act(() => {
      result.current.addItemOnCart(defaultProduct)
    })

    act(() => {
      result.current.addItemOnCart(defaultProduct)
    })

    expect(result.current.cart).toEqual({
      id: 1,
      user: null,
      itens: [
        {
          quantity: 2,
          product: {
            id: 1,
            name: 'Smartphone',
            price: 500,
          },
          total: 1000,
        },
      ],
      total: 1000,
    })
  })
  it('should remove the product', () => {
    const { result } = renderHook(() => useCart())

    act(() => {
      result.current.setCart(defaultCart)
    })

    act(() => {
      result.current.addItemOnCart(defaultProduct)
    })

    act(() => {
      result.current.removeItemFromCart(defaultProduct)
    })

    expect(result.current.cart).toEqual({
      id: 1,
      user: null,
      itens: [],
      total: 0,
    })
  })
  it('should reset the cart', () => {
    const { result } = renderHook(() => useCart())

    act(() => {
      result.current.setCart(defaultCart)
    })

    act(() => {
      result.current.addItemOnCart(defaultProduct)
    })

    act(() => {
      result.current.cleanCart()
    })

    expect(result.current.cart).toEqual({
      id: 1,
      user: null,
      itens: [],
      total: 0,
    })
  })
})
