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
export const CATEGORY = 'category'

export const CATEGORIES = {
  caps: 'gorras',
  electronics: 'electrónica',
  mensClothing: 'ropa para hombre',
  womensClothing: 'ropa para mujer'
} as const
