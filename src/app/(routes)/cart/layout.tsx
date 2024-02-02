import ProtectedRoute from '@/app/components/ProtectedRoute'
import React, { type FC } from 'react'

interface Props {
  children: React.ReactNode
}

const LayoutCartPage: FC<Props> = ({ children }) => {
  return (
    <ProtectedRoute>{children}</ProtectedRoute>
  )
}

export default LayoutCartPage
