import { type TypeCartWithId } from '@/types'
import { type FC } from 'react'

interface Props {
  params: {
    id: string
  }
}

const CartPage: FC<Props> = async ({ params: { id } }) => {
  const data = await fetch(`http://localhost:3000/api/carts/${id}`)
  const cart = await data.json() as TypeCartWithId

  if (cart.id != null) {
    return (
      <>
        Cart: { id }
      </>
    )
  }

  return (
    <>
      Cart not exist
    </>
  )
}

export default CartPage
