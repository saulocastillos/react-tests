import { Container, CartBox } from './styles'

import { cart as mockCart } from '../../mocks/server.json'

type CartSummaryType = {
  cart: Cart
  addItemOnCart: Function
  removeItemFromCart: Function
}

const CartSummary = ({
  cart,
  addItemOnCart,
  removeItemFromCart,
}: CartSummaryType) => {
  return (
    <Container data-testid='cartsummary'>
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
          {cart?.itens?.map((item: CartItem) => {
            return (
              <tbody key={item.product.id}>
                <tr data-testid='product'>
                  <td data-testid='productQtt'>{item.quantity}</td>
                  <td>{item.product.name}</td>
                  <td>{item.product.price}</td>
                  <td data-testid='productTotal'>{item.total}</td>
                  <td className='actions'>
                    <button
                      data-testid='decreaseButton'
                      type='button'
                      onClick={() => {
                        removeItemFromCart(item.product)
                      }}
                    >
                      -
                    </button>
                    <button
                      data-testid='increaseButton'
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

export default CartSummary
