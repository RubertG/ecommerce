import { type TypeActionReducerCart, type TypeStateReducerCart } from '@/types'
import { isEqual } from 'lodash'

export const reducerCart = (
  state: TypeStateReducerCart,
  action: TypeActionReducerCart
): TypeStateReducerCart => {
  if (action.type === 'SET_ERROR') {
    console.log(isEqual(state.cartPrev, state.cart))
    return {
      ...state,
      cart: state.cartPrev,
      error: action.payload
    }
  }

  if (action.type === 'RESET_ERROR') {
    return {
      ...state,
      error: ''
    }
  }

  if (action.type === 'FETCH_SUCCESS') {
    return {
      ...state,
      error: '',
      cart: action.payload,
      cartPrev: action.payload
    }
  }

  if (action.type === 'ADD_PRODUCT') {
    const index = state.cart.products.findIndex(product => product.id === action.payload.id)
    if (index === -1) {
      const newProducts = [...state.cart.products, { ...action.payload, quantity: 1 }]

      return {
        ...state,
        cart: {
          ...state.cart,
          products: newProducts,
          total: state.cart.total + action.payload.price
        },
        cartPrev: state.cart
      }
    }

    return {
      ...state,
      error: 'Product already added'
    }
  }

  if (action.type === 'DELETE_PRODUCT') {
    const newCart = state.cart.products.filter((product) => {
      if (product.id === action.payload.id) {
        return false
      }
      return true
    })

    if (isEqual(newCart, state.cart.products)) {
      return {
        ...state,
        error: 'Product not found'
      }
    }

    let total = state.cart.total - action.payload.price
    if (total < 0) total = 0

    return {
      ...state,
      cart: {
        ...state.cart,
        products: newCart,
        total
      },
      cartPrev: state.cart
    }
  }

  if (action.type === 'SUM_QUANTITY') {
    const index = state.cart.products.findIndex(product => product.id === action.payload.id)
    if (index === -1) {
      return {
        ...state,
        error: 'Product not found'
      }
    }
    const newCart = structuredClone([...state.cart.products])
    newCart[index].quantity = action.payload.quantity
    return {
      ...state,
      cart: {
        ...state.cart,
        products: newCart,
        total: state.cart.total + action.payload.price
      },
      cartPrev: structuredClone(state.cart)
    }
  }

  if (action.type === 'RES_QUANTITY') {
    const newCart = structuredClone(state.cart).products.filter((product, i) => {
      if (product.id === action.payload.id) {
        if (action.payload.quantity <= 0) {
          return false
        }
        product.quantity = action.payload.quantity
      }
      return true
    })

    let total = state.cart.total - action.payload.price
    if (total < 0) total = 0

    return {
      ...state,
      cart: {
        ...state.cart,
        products: newCart,
        total
      },
      cartPrev: structuredClone(state.cart)
    }
  }

  return state
}
