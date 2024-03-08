import { CartProducts } from '@/app/components/CartProducts'
import { MoreProducts } from '@/app/components/MoreProducts'

const CartPage = () => {
  return (
    <main
      className='animate-enter'
    >
      <CartProducts />
      <MoreProducts />
    </main>
  )
}

export default CartPage
