import { type TypeCartWithId, type TypeActionReducerCart } from '@/types'
import { AlertToast } from '../components/toasts'

export const reducerCart = (
  state: TypeCartWithId | null,
  action: TypeActionReducerCart): TypeCartWithId | null => {
  if (action.type === 'SET') {
    return action.payload
  }

  if (action.type === 'ADD_PRODUCT') {
    if (state == null) return state
    const index = state.products.findIndex((p) => p.id === action.payload.id)
    if (index !== -1) {
      AlertToast({ text: 'Product already added' })
      return state
    }
    return {
      ...state,
      products: [...state.products, { ...action.payload, quantity: 1 }],
      total: state.total + action.payload.price
    }
  }

  if (action.type === 'SUM_QUANTITY') {
    if (state == null) return state
    let total = 0
    return {
      ...state,
      products: state.products.map(
        (product) => {
          if (product.id === action.payload.id) {
            return { ...product, quantity: product.quantity + 1 }
          }
          total += product.quantity * product.price
          return product
        }
      ),
      total
    }
  }

  if (action.type === 'RES_QUANTITY') {
    if (state == null) return state
    let total = 0
    return {
      ...state,
      products: state.products.map(
        (product) => {
          if (product.id === action.payload.id && product.quantity - 1 !== 0) {
            return { ...product, quantity: product.quantity - 1 }
          }
          total += product.quantity * product.price
          return product
        }
      ),
      total
    }
  }

  if (action.type === 'DELETE_PRODUCT') {
    if (state == null) return state
    return {
      ...state,
      products: state.products.filter(product => product.id !== action.payload)
    }
  }

  return state
}
