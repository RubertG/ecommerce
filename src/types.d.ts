export type TypeIdProduct = string
export type TypeIdCart = string

export interface TypeProduct {
  id: TypeIdProduct
  title: string
  image: string
  description: string
  price: number
  category: Category
  rate: number
}

export interface TypeCategory {
  name: string
  img: string
}

export interface TypeProductsCart extends TypeProduct {
  quantity: number
}

export interface TypeCart {
  id: TypeIdCart
  id_user: string
  products: TypeProductsCart[]
  total: number
}
