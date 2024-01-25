import { type TypeCartWithId } from './types'

export const EXPECTED_CART_SHAPE: Record<keyof TypeCartWithId, 'string' | 'number' | 'object'> = {
  id: 'string',
  id_user: 'string',
  products: 'object',
  total: 'number'
} as const
