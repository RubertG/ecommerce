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
      SuccessToast({ text: 'Closed session!' })
    } catch (error) {
      AlertToast({ text: 'Error closing session!' })
    }
  }

  const signIn = async () => {
    try {
      await signInWithGoogle()
      SuccessToast({
        text: 'Session started!'
      })
    } catch (error) {
      AlertToast({
        text: 'Failed to login!'
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
