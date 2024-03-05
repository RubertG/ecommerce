import { CartContextProvider } from '@/app/context/cartContext'

interface Props {
  children: React.ReactNode
}
function CartContextLayout ({ children }: Props) {
  return (
    <CartContextProvider>{children}</CartContextProvider>
  )
}

export default CartContextLayout
