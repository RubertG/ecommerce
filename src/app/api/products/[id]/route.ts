import { getProduct } from '@/app/firebase/products-actions'
import { NextResponse } from 'next/server'

interface Context {
  params: {
    id?: string
  }
}

export async function GET (req: Request, context: Context) {
  try {
    const { id } = context.params
    if (id == null) throw new Error('Product id is required')
    const product = await getProduct(id)
    return NextResponse.json(product)
  } catch (error: any) {
    return NextResponse.json({
      message: 'Error obtaining the product',
      error: error.message
    })
  }
}
