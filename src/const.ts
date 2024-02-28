import { type TypeCartWithId } from './types'

export const EXPECTED_CART_SHAPE: Record<keyof TypeCartWithId, 'string' | 'number' | 'object'> = {
  id: 'string',
  id_user: 'string',
  products: 'object',
  total: 'number'
} as const

export const MIN_PRICE = 'min-price'
export const MAX_PRICE = 'max-price'
export const MIN_RATE = 'min-rate'
export const MAX_RATE = 'max-rate'

export const CATEGORIES = {
  womensClothing: "women's clothing",
  mensClothing: "men's clothing",
  caps: 'caps',
  electronics: 'electronics'
} as const
