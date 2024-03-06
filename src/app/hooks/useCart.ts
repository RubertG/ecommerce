'use client'

import { type TypeCartOptions, type TypeStateReducerCart, type TypeProduct } from '@/types'
import { useEffect, useReducer } from 'react'
import { reducerCart } from '../reducer/reducerCart'
import { useAuthContext } from './useAuthContext'
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

  useEffect(() => {
    if (user == null) return
    void getData()
    return () => { }
  }, [user])

  useEffect(() => {
    if (state.error === '') return
    AlertToast({ text: state.error })
    dispatch({ type: 'RESET_ERROR' })
    return () => { }
  }, [state.error])

  useEffect(() => {
    if (user == null || state.cart === state.cartPrev) return
    void saveData()
    return () => { }
  }, [state.cart])

  const saveData = async () => {
    ProcessToast({ text: 'Adding product...' })
    await fetch('/api/carts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state.cart)
    })
    SuccessToast({ text: 'Product added!' })
  }

  const getData = async () => {
    try {
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
      dispatch({ type: 'FETCH_ERROR' })
    }
  }

  const addProduct = (product: TypeProduct) => {
    if (user == null) {
      AlertToast({ text: 'You need to log in' })
      return
    }
    dispatch({ type: 'ADD_PRODUCT', payload: product })
  }

  const deleteProduct = (idProduct: string) => {
    if (user == null) {
      AlertToast({ text: 'You need to log in' })
      return
    }
    dispatch({ type: 'DELETE_PRODUCT', payload: idProduct })
  }

  const sumProduct = (product: TypeProduct) => {
    if (user == null) {
      AlertToast({ text: 'You need to log in' })
      return
    }
    dispatch({ type: 'SUM_QUANTITY', payload: product })
  }

  const resProduct = (product: TypeProduct) => {
    if (user == null) {
      AlertToast({ text: 'You need to log in' })
      return
    }
    dispatch({ type: 'RES_QUANTITY', payload: product })
  }

  return {
    deleteProduct,
    addProduct,
    state,
    sumProduct,
    resProduct
  }
}
