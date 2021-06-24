interface CartItem {
  product: Product
  quantity: number
  total: number
}

interface Cart {
  id: number
  user?: User
  itens: CartItem[]
  total: number
}

interface Product {
  id: number
  name: string
  price: number
}

interface User {
  id: number
  name: string
  cep: string
}
