import { Container, ProductsBox } from './styles'

import Navbar from '../../components/Navbar'
import ProductCard from '../../components/ProductCard'
import CartSummary from '../../components/CartSummary'

import useCart from '../../hooks/useCart'

import { products } from '../../mocks/server.json'

function ExerciseFour() {
  const { cart, addItemOnCart, removeItemFromCart } = useCart()

  return (
    <Container data-testid='exercisefour'>
      <h1>Exercise Four</h1>
      <Navbar />
      <h2>Store</h2>
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
