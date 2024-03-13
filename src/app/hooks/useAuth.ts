'use Client'

import { useEffect, useState } from 'react'
import { authState, logout, signInWithGoogle } from '../firebase/auth-actions'
import { type User } from 'firebase/auth'
import { AlertToast, SuccessToast } from '../components/toasts'

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    authState((userCurrent: User | null) => {
      setUser(userCurrent)
      setLoading(false)
    })
  }, [])

  const signOut = async () => {
    try {
      await logout()
      SuccessToast({ text: 'Sesión cerrada!' })
    } catch (error) {
      AlertToast({ text: 'Error al cerrar sesión!' })
    }
  }

  const signIn = async () => {
    try {
      await signInWithGoogle()
      SuccessToast({
        text: 'Sesión iniciada!'
      })
    } catch (error) {
      AlertToast({
        text: 'Error al ingresar!'
      })
    }
  }

  return {
    loading,
    user,
    signOut,
    signIn
  }
}
