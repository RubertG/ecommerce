'use client'

import { type TypeIdProduct, type TypeCartOptions, type TypeCartWithId, type TypeProduct } from '@/types'
import { useAuthContext } from './useAuthContext'
import { AlertToast, ProcessToast, SuccessToast } from '../components/toasts'
import { useEffect, useReducer } from 'react'
import { reducerCart } from '../reducer/reducerCart'

export const useCart = (): TypeCartOptions => {
  const { user } = useAuthContext()
  const [cart, dispatch] = useReducer(reducerCart, null)

  useEffect(() => {
    const setCart = async () => {
      const data = await getCart()
      dispatch({ type: 'SET', payload: data })
    }
    void setCart()
  }, [])

  const getCart = async (): Promise<TypeCartWithId> => {
    const res = await fetch(`/api/carts/${user.uid}`)
    const data = await res.json()
    if (data.products != null) {
      return data as TypeCartWithId
    }
    return {
      id: `cart-${user.uid}`,
      products: [],
      id_user: user.uid,
      total: 0
    }
  }

  const addCart = async (product: TypeProduct): Promise<void> => {
    if (user == null) {
      AlertToast({ text: 'Please log in' })
      return
    }
    const cartAux = Object.assign({}, cart)
    try {
      ProcessToast({ text: 'Adding at cart...' })
      dispatch({ type: 'ADD_PRODUCT', payload: product })
      await fetch('/api/carts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cart)
      })
      SuccessToast({ text: 'Added to cart' })
    } catch (error) {
      dispatch({ type: 'SET', payload: cartAux })
      AlertToast({ text: 'Error adding at cart' })
    }
  }

  const deleteCart = async (idProduct: TypeIdProduct): Promise<void> => {
    if (user == null) {
      AlertToast({ text: 'Please log in' })
      return
    }
    const cartAux = Object.assign({}, cart)
    try {
      ProcessToast({ text: 'Remove at cart...' })
      dispatch({ type: 'DELETE_PRODUCT', payload: idProduct })
      await fetch('/api/carts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cart)
      })
      SuccessToast({ text: 'Remove to cart' })
    } catch (error) {
      dispatch({ type: 'SET', payload: cartAux })
      AlertToast({ text: 'Error Remove at cart' })
    }
  }

  const sumProduct = async (product: TypeProduct) => {
    if (user == null) {
      AlertToast({ text: 'Please log in' })
      return
    }
    const cartAux = Object.assign({}, cart)
    dispatch({ type: 'SUM_QUANTITY', payload: product })
    try {
      await fetch('/api/carts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cart)
      })
    } catch (error) {
      dispatch({ type: 'SET', payload: cartAux })
    }
  }

  const resProduct = async (product: TypeProduct) => {
    if (user == null) {
      AlertToast({ text: 'Please log in' })
      return
    }
    const cartAux = Object.assign({}, cart)
    try {
      dispatch({ type: 'RES_QUANTITY', payload: product })
      await fetch('/api/carts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cart)
      })
    } catch (error) {
      dispatch({ type: 'SET', payload: cartAux })
    }
  }

  return {
    addCart,
    deleteCart,
    sumProduct,
    resProduct,
    cart
  }
}
