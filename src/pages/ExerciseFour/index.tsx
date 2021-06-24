import { useState, useEffect } from 'react'
import { Container, ProductsBox, CartBox } from './styles'

import ProductCard from '../../components/ProductCard'

import useCart from '../../hooks/useCart'

import { products } from '../../mocks/server.json'

function ExerciseFour() {
  const { cart, addItemOnCart, removeItemFromCart } = useCart()

  return (
    <Container>
      <h1>Exercise Four</h1>
      <h2>Store</h2>
      <ProductsBox>
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              action={() => {
                addItemOnCart(product)
              }}
            />
          )
        })}
      </ProductsBox>
      <h2>Cart Summary</h2>
      <CartBox>
        <table>
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Product</th>
              <th>Price</th>
              <th>Total</th>
              <th className='actions'>Actions</th>
            </tr>
          </thead>
          {cart.itens.map((item) => {
            return (
              <tbody key={item.product.id}>
                <tr>
                  <td>{item.quantity}</td>
                  <td>{item.product.name}</td>
                  <td>{item.product.price}</td>
                  <td>{item.total}</td>
                  <td className='actions'>
                    <button
                      type='button'
                      onClick={() => {
                        removeItemFromCart(item.product)
                      }}
                    >
                      -
                    </button>
                    <button
                      type='button'
                      onClick={() => {
                        addItemOnCart(item.product)
                      }}
                    >
                      +
                    </button>
                  </td>
                </tr>
              </tbody>
            )
          })}
        </table>
      </CartBox>
      Total: {cart.total}
    </Container>
  )
}

export default ExerciseFour
