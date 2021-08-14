import Box from '@eduzz/houston-ui/Box'
import { Container } from './styles'

type ProductCardType = {
  product: Product
  action: Function
}

const defaultProduct: Product = {
  id: 1,
  name: 'Produto 1',
  price: 0,
}

const defaultProductCard: ProductCardType = {
  product: defaultProduct,
  action: () => {},
}

function ProductCard({
  product,
  action,
}: ProductCardType = defaultProductCard) {
  return (
    <Box xs={{ padding: 16, margin: 10 }} paper>
      <p>{product?.name}</p>
      <p>{product?.price}</p>
      <button
        data-testid='addToCartButton'
        type='button'
        onClick={() => {
          action()
        }}
      >
        Adicionar
      </button>
    </Box>
  )
}

export default ProductCard
