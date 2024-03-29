import { type CATEGORY, type CATEGORIES, type MAX_PRICE, type MAX_RATE, type MIN_PRICE, type MIN_RATE } from './const'

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
  category: TypeCategory
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
  name: TypeCategories
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

export interface TypeCartOptions {
  addProduct: (product: TypeProduct) => void
  handleBuy: (product: TypeProduct) => void
  deleteProduct: (product: TypeProductsCart) => void
  state: TypeStateReducerCart
  sumProduct: (product: TypeProductsCart) => void
  resProduct: (product: TypeProductsCart) => void
  loading: boolean
}

export interface TypeSearchParams {
  search: string | null
  [MIN_PRICE]: string | null
  [MAX_PRICE]: string | null
  [MIN_RATE]: string | null
  [MAX_RATE]: string | null
  [CATEGORY]: TypeCategories | null
}

export type TypeActionReducerProducts =
  { type: 'RESET' }
  | { type: 'SET', payload: { products: TypeProduct[], searchParams: TypeSearchParams } }
  | { type: 'FILTER-BY-SEARCHPARAMS', payload: TypeSearchParams }

export interface TypeStateReducerProducts {
  products: TypeProduct[] | null
  filterProducts: TypeProduct[] | null
}

export interface TypeStateReducerCart {
  error: string
  cart: TypeCartWithId
  cartPrev: TypeCartWithId
}

export type TypeActionReducerCart =
  { type: 'ADD_PRODUCT', payload: TypeProduct }
  | { type: 'DELETE_PRODUCT', payload: TypeProductsCart }
  | { type: 'FETCH_SUCCESS', payload: TypeCartWithId }
  | { type: 'SET_ERROR', payload: string }
  | { type: 'RESET_ERROR' }
  | { type: 'SUM_QUANTITY', payload: TypeProductsCart }
  | { type: 'RES_QUANTITY', payload: TypeProductsCart }

export type TypeCategories = typeof CATEGORIES[keyof typeof CATEGORIES]

export interface TypePreferenceItem {
  title: string
  quantity: number
  unit_price: number
}
