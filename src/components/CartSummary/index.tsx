import Table from '@eduzz/houston-ui/Table'
import Typography from '@eduzz/houston-ui/Typography'
import { useState } from 'react'
import { Container, CartBox } from './styles'

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
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(10)
  return (
    <Container data-testid='cartsummary'>
      <Typography size='medium' fontWeight='bold'>
        Cart Summary
      </Typography>
      <CartBox>
        <Table>
          <Table.Header>
            <Table.Column>Quantity</Table.Column>
            <Table.Column>Product</Table.Column>
            <Table.Column>Price</Table.Column>
            <Table.Column>Total</Table.Column>
            <Table.Column className='actions'>Actions</Table.Column>
          </Table.Header>
          {cart?.itens?.map((item: CartItem) => {
            return (
              <Table.Body key={item.product.id}>
                <Table.Row
                  data={item}
                  index={item.product.id}
                  key={item.product.id}
                  data-testid='product'
                >
                  <Table.Cell data-testid='productQtt'>
                    {item.quantity}
                  </Table.Cell>
                  <Table.Cell>{item.product.name}</Table.Cell>
                  <Table.Cell>{item.product.price}</Table.Cell>
                  <Table.Cell data-testid='productTotal'>
                    {item.total}
                  </Table.Cell>
                  <Table.Cell className='actions'>
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
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            )
          })}
          <Table.Pagination
            page={page}
            perPage={perPage}
            total={cart.itens.length}
            onChangePage={setPage}
            onChangePerPage={setPerPage}
          />
        </Table>
      </CartBox>
      <Typography size='medium' fontWeight='bold'>
        Total: {cart.total}
      </Typography>
    </Container>
  )
}

export default CartSummary
