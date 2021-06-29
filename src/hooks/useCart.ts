import { useState, useEffect } from 'react'

const defaultCart: Cart = {
  id: 1,
  user: null,
  itens: [],
  total: 0,
}

const useCart = () => {
  const [cart, setCart] = useState<Cart>(defaultCart)

  const getTotalCart = (cart: Cart) => {
    const _itensTotals = cart.itens.map((cartItem) => cartItem.total)
    return _itensTotals.reduce((curr, acc) => curr + acc, 0)
  }

  const getItemTotal = (item: CartItem) => {
    return item.quantity * item.product.price
  }

  const findProductInCartItens = (itens: CartItem[], product: Product) => {
    return {
      item: itens.find((item) => item.product.id === product.id),
      index: itens.findIndex((item) => item.product.id === product.id),
    }
  }

  const addItemOnCart = (product: Product) => {
    const _cart = { ...cart }
    const founded = findProductInCartItens(_cart.itens, product)
    if (founded.item) {
      founded.item.quantity += 1
      founded.item.total = getItemTotal(founded.item)
    } else {
      _cart.itens.push({
        quantity: 1,
        product,
        total: product.price,
      })
    }
    _cart.total = getTotalCart(_cart)
    setCart(_cart)
  }

  const removeItemFromCart = (product: Product) => {
    const _cart = { ...cart }
    const founded = findProductInCartItens(_cart.itens, product)
    if (founded.item) {
      if (founded.item.quantity === 1) {
        _cart.itens.splice(founded.index, 1)
      } else {
        founded.item.quantity -= 1
        founded.item.total = getItemTotal(founded.item)
      }
    }
    _cart.total = getTotalCart(_cart)
    setCart(_cart)
  }

  const cleanCart = () => {
    setCart({ id: 1, user: null, itens: [], total: 0 })
  }

  const handleChangeItens = () => {
    getTotalCart(cart)
  }

  useEffect(() => {
    handleChangeItens()
  }, [cart.itens])

  return { cart, setCart, addItemOnCart, removeItemFromCart, cleanCart }
}

export default useCart
