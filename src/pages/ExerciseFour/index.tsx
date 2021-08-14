import { useState } from 'react'
import Typography from '@eduzz/houston-ui/Typography'
import { Container, ProductsBox } from './styles'

import Navbar from '../../components/Navbar'
import ProductCard from '../../components/ProductCard'
import CartSummary from '../../components/CartSummary'

import useCart from '../../hooks/useCart'

import { products } from '../../mocks/server.json'

const defaultCart: Cart = {
  id: 1,
  user: null,
  itens: [],
  total: 0,
}

function ExerciseFour() {
  const [cart, setCart] = useState<Cart>(defaultCart)
  const { addItemOnCart, removeItemFromCart } = useCart({ cart, setCart })

  return (
    <Container data-testid='exercisefour'>
      <Typography size='xx-large' fontWeight='bold'>
        Exercise Four
      </Typography>
      <Navbar />
      <Typography size='medium' fontWeight='bold'>
        Store
      </Typography>
      <ProductsBox data-testid='productbox'>
        {products?.map((product) => {
          return (
            <ProductCard
              data-testid='productcard'
              key={product.id}
              product={product}
              action={() => {
                addItemOnCart(product)
              }}
            />
          )
        })}
      </ProductsBox>
      <CartSummary
        cart={cart}
        addItemOnCart={addItemOnCart}
        removeItemFromCart={removeItemFromCart}
      />
    </Container>
  )
}

export default ExerciseFour
