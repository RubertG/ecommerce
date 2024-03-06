import { type TypeActionReducerCart, type TypeStateReducerCart } from '@/types'

export const reducerCart = (
  state: TypeStateReducerCart,
  action: TypeActionReducerCart
): TypeStateReducerCart => {
  if (action.type === 'RESET_ERROR') {
    return {
      ...state,
      error: ''
    }
  }

  if (action.type === 'FETCH_SUCCESS') {
    return {
      error: '',
      cart: action.payload,
      cartPrev: action.payload
    }
  }

  if (action.type === 'FETCH_ERROR') {
    console.log(state)

    return {
      ...state,
      error: 'Unable to retrieve the cart'
    }
  }

  if (action.type === 'ADD_PRODUCT') {
    const index = state.cart.products.findIndex(product => product.id === action.payload.id)
    if (index === -1) {
      return {
        ...state,
        cart: {
          ...state.cart,
          products: [...state.cart.products, { ...action.payload, quantity: 1 }],
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
    let total = state.cart.total
    const newCart = state.cart.products.filter((product) => {
      if (product.id === action.payload) {
        total -= product.price * product.quantity
        return false
      }
      return true
    })

    if (newCart === state.cart.products) {
      return {
        ...state,
        error: 'Product not found'
      }
    }

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
    const newCart = [...state.cart.products]
    newCart[index].quantity += 1
    return {
      ...state,
      cart: {
        ...state.cart,
        products: newCart,
        total: state.cart.total + action.payload.price
      },
      cartPrev: state.cart
    }
  }

  if (action.type === 'RES_QUANTITY') {
    const newCart = state.cart.products.filter(product => {
      if (product.id === action.payload.id) {
        product.quantity -= 1
      }
      if (product.quantity >= 0) {
        return true
      }
      return false
    })
    if (newCart === state.cart.products) {
      return {
        ...state,
        error: 'Product not found'
      }
    }
    return {
      ...state,
      cart: {
        ...state.cart,
        products: newCart,
        total: state.cart.total - action.payload.price
      },
      cartPrev: state.cart
    }
  }

  return state
}
