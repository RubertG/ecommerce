'use Client'

import { useEffect, useState } from 'react'
import { authState, logout, signInWithGoogle } from '../firebase/auth-actions'
import { type User } from 'firebase/auth'
import { customToast } from '../utils/toasts'

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
    customToast({ text: 'Signed out' })
  }

  const signIn = async () => {
    await signInWithGoogle()
    customToast({ text: 'Signed in' })
  }

  return {
    loading,
    user,
    signOut,
    signIn
  }
}
