'use client'

import { type TypeCartOptions, type TypeStateReducerCart, type TypeProduct, type TypeProductsCart } from '@/types'
import { useEffect, useReducer, useState } from 'react'
import { reducerCart } from '../reducer/reducerCart'
import { useAuthContext } from './useAuthContext'
import { isEqual } from 'lodash'
import { AlertToast, ProcessToast, SuccessToast } from '../components/toasts'

const initialState: TypeStateReducerCart = {
  error: '',
  cart: {
    id: '',
    id_user: '',
    products: [],
    total: 0
  },
  cartPrev: {
    id: '',
    id_user: '',
    products: [],
    total: 0
  }
}

export const useCart = (): TypeCartOptions => {
  const { user } = useAuthContext()
  const [state, dispatch] = useReducer(reducerCart, initialState)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (user == null) return
    void getData()
  }, [user])

  useEffect(() => {
    if (state.error === '') return
    AlertToast({ text: state.error })
    dispatch({ type: 'RESET_ERROR' })
  }, [state.error])

  useEffect(() => {
    if (user == null || (Boolean(isEqual(state.cart, state.cartPrev)))) return
    saveData()
  }, [state.cart])

  const saveData = () => {
    ProcessToast({ text: 'Loading...' })
    fetch('/api/carts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state.cart)
    })
      .then(async res => await res.json())
      .then(data => {
        dispatch({ type: 'FETCH_SUCCESS', payload: data.cart })
        SuccessToast({ text: 'Action complete!' })
      })
      .catch(() => {
        dispatch({ type: 'SET_ERROR', payload: 'Error while saving the cart' })
      })
  }

  const getData = async () => {
    try {
      setLoading(true)
      const res = await fetch(`/api/carts/${user.uid}`)
      let data = await res.json()
      if (data.products == null) {
        data = {
          id: `cart-${user.uid}`,
          id_user: user.uid,
          products: [],
          total: 0
        }
      }
      dispatch({ type: 'FETCH_SUCCESS', payload: data })
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Unable to retrieve the cart' })
    } finally {
      setLoading(false)
    }
  }

  const addProduct = (product: TypeProduct) => {
    if (user == null) {
      AlertToast({ text: 'You need to log in' })
      return
    }
    dispatch({ type: 'ADD_PRODUCT', payload: product })
  }

  const deleteProduct = (product: TypeProductsCart) => {
    if (user == null) {
      AlertToast({ text: 'You need to log in' })
      return
    }
    dispatch({ type: 'DELETE_PRODUCT', payload: product })
  }

  const sumProduct = (product: TypeProductsCart) => {
    if (user == null) {
      AlertToast({ text: 'You need to log in' })
      return
    }
    const newProduct = { ...product, quantity: product.quantity + 1 }
    dispatch({ type: 'SUM_QUANTITY', payload: newProduct })
  }

  const resProduct = (product: TypeProductsCart) => {
    if (user == null) {
      AlertToast({ text: 'You need to log in' })
      return
    }
    const newProduct = { ...product, quantity: product.quantity - 1 }
    dispatch({ type: 'RES_QUANTITY', payload: newProduct })
  }

  return {
    deleteProduct,
    addProduct,
    state,
    sumProduct,
    resProduct,
    loading
  }
}
