import { CartProducts } from '@/app/components/CartProducts'
import { MoreProducts } from '@/app/components/MoreProducts'

const CartPage = async () => {
  return (
    <>
      <CartProducts />
      <MoreProducts />
    </>
  )
}

export default CartPage
