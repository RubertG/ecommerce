export type TypeIdProduct = string
export type TypeIdCart = string
export type TypeIdUser = string
export type TypeIdCategory = string

export interface TypeProduct {
  id: TypeIdProduct
  title: string
  image: string
  description: string
  price: number
  category: Category
  rate: number
}

export interface TypeProductsCart extends TypeProduct {
  quantity: number
}

export interface TypeCart {
  id_user: TypeIdUser
  products: TypeProductsCart[]
  total: number
}

export interface TypeCartWithId extends TypeCart {
  id: TypeIdCart
}

export interface TypeCategory {
  name: string
  img: string
}

export interface TypeCategoryWithId extends TypeCategory {
  id: TypeIdCategory
}

export interface TypeAuthOptions {
  loading: boolean
  user: User | null
  signOut: () => Promise<void>
  signIn: () => Promise<void>
}
