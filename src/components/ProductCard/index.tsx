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
    <Container>
      <p>{product?.name}</p>
      <p>{product?.price}</p>
      <button
        type='button'
        onClick={() => {
          action()
        }}
      >
        Adicionar
      </button>
    </Container>
  )
}

export default ProductCard
