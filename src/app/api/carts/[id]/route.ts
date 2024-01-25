import { getCart } from '@/app/firebase/cart-actions'
import { type TypeIdCart } from '@/types'
import { NextResponse } from 'next/server'

interface Context {
  params: {
    id?: TypeIdCart
  }
}

export async function GET (req: Request, { params }: Context) {
  try {
    const { id } = params
    if (id == null) throw new Error('The name category is required')
    const category = await getCart(id)
    return NextResponse.json(category)
  } catch (error: any) {
    return NextResponse.json({
      message: 'Error obtaining the category',
      error: error.message
    })
  }
}
