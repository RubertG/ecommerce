import ProtectedRoute from '@/app/components/ProtectedRoute'
import Searcher from '@/app/components/Searcher'
import React, { type FC } from 'react'

interface Props {
  children: React.ReactNode
}

const LayoutCartPage: FC<Props> = ({ children }) => {
  return (
    <ProtectedRoute>
      <Searcher />
      {children}
    </ProtectedRoute>
  )
}

export default LayoutCartPage
