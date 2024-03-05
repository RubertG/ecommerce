'use client'

import { type FC, createContext } from 'react'
import { type TypeCartOptions } from '@/types'
import { useCart } from '../hooks/useCart'

export const cartContext = createContext<TypeCartOptions | null>(null)

interface Props {
  children: React.ReactNode
}

export const CartContextProvider: FC<Props> = ({ children }) => {
  const cartOptions = useCart()

  return (
    <cartContext.Provider
      value={cartOptions}
    >
      {children}
    </cartContext.Provider>
  )
}
