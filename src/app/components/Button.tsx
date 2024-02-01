import { type FC } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  onClick: () => void
}

export const Button: FC<Props> = ({ children, className, onClick }) => {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
