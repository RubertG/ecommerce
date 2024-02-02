'use client'

import { type FC, createContext } from 'react'
import { useAuth } from '../hooks/useAuth'
import { type TypeAuthOptions } from '@/types'

export const authContext = createContext<TypeAuthOptions | null>(null)

interface Props {
  children: React.ReactNode
}

export const AuthContextProvider: FC<Props> = ({ children }) => {
  const authOptions = useAuth()

  return (
    <authContext.Provider
      value={authOptions}
    >
      {children}
    </authContext.Provider>
  )
}
