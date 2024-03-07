import ProtectedRoute from '@/app/components/ProtectedRoute'
import Searcher from '@/app/components/Searcher'
import React, { type FC } from 'react'

interface Props {
  children: React.ReactNode
}

const LayoutCartPage: FC<Props> = ({ children }) => {
  return (
    <ProtectedRoute>
      <header
        className='flex flex-col gap-2 items-center justify-center mt-[4.5rem]'
      >
        <Searcher />
      </header>
      {children}
    </ProtectedRoute>
  )
}

export default LayoutCartPage
