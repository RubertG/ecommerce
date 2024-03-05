import { getCart } from '@/app/firebase/cart-actions'
import { type TypeIdUser } from '@/types'
import { NextResponse } from 'next/server'

interface Context {
  params: {
    id?: TypeIdUser
  }
}

export async function GET (req: Request, { params }: Context) {
  try {
    const { id } = params
    if (id == null) throw new Error('The id cart is required')
    const cart = await getCart(id)
    if (cart == null) throw new Error('The cart not exist')
    return NextResponse.json(cart)
  } catch (error: any) {
    return NextResponse.json({
      message: 'Error obtaining the cart',
      error: error.message
    })
  }
}
