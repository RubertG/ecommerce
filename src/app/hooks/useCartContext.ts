'use client'
import { useContext } from 'react'
import { cartContext } from '../context/cartContext'

export const useCartContext = () => {
  const cartContextAux = useContext(cartContext)
  if (cartContextAux == null) {
    throw new Error('useCartContext must be used within an CartContextProvider')
  }
  return cartContextAux
}
