import { type TypeStateReducer, type TypeActionReducer } from '@/types'
import { filterProducts } from '../utils/filter-products'

export const reducer = (
  state: TypeStateReducer,
  action: TypeActionReducer): TypeStateReducer => {
  if (action.type === 'SET') {
    const products = filterProducts(action.payload.products, action.payload.searchParams)
    return {
      ...state,
      products: action.payload.products,
      filterProducts: products
    }
  }

  if (action.type === 'RESET') {
    return {
      ...state,
      filterProducts: state.products
    }
  }

  if (action.type === 'FILTER-BY-SEARCHPARAMS') {
    if (state.products == null) return state
    const products = filterProducts(state.products, action.payload)
    if (products.length === 0) return { ...state, filterProducts: null }
    return {
      ...state,
      filterProducts: products
    }
  }

  return state
}
