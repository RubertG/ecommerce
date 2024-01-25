import { addCart, getCarts } from '@/app/firebase/cart-actions'
import { validateObject } from '@/app/utils/validate-type'
import { EXPECTED_CART_SHAPE } from '@/const'
import { type TypeCartWithId } from '@/types'
import { NextResponse } from 'next/server'

export async function GET () {
  try {
    const carts: TypeCartWithId[] = await getCarts()
    return NextResponse.json(carts)
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
      message: 'Error searching for data'
    })
  }
}

export async function POST (request: Request) {
  try {
    const res = await request.json()
    const verify = validateObject<TypeCartWithId>(res, EXPECTED_CART_SHAPE)

    if (!verify) throw new Error('Invalid data')

    const { id, ...cart } = res
    await addCart(res.id, cart)
    return Response.json({ cart: res, status: 200 })
  } catch (error: any) {
    return Response.json({
      message: 'Error saving for data',
      error: error.message
    })
  }
}
