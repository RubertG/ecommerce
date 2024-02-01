'use Client'

import { useEffect, useState } from 'react'
import { authState, logout, signInWithGoogle } from '../firebase/auth-actions'
import { type User } from 'firebase/auth'
import { toastOptions } from '../utils/toasts'

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
    await logout()
    toastOptions('Signed out')
  }

  const signIn = async () => {
    await signInWithGoogle()
    toastOptions('Signed in')
  }

  return {
    loading,
    user,
    signOut,
    signIn
  }
}
