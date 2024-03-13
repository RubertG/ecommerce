'use client'

import { type FC } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { useRouter } from 'next/navigation'

interface Props {
  children: React.ReactNode
}

const ProtectedRoute: FC<Props> = ({ children }) => {
  const { user, loading } = useAuthContext()
  const router = useRouter()

  if (loading) return <p>Cargando...</p>
  if (user == null) {
    router.push('/products')
    return
  }
  return <>{children}</>
}

export default ProtectedRoute
