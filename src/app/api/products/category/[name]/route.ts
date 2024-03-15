import { getProductsByCategory } from '@/app/firebase/products-actions'
import { NextResponse } from 'next/server'

interface Context {
  params: {
    name?: string
  }
}

export const dynamic = 'force-dynamic'

export async function GET (req: Request, context: Context) {
  try {
    let { name } = context.params
    if (name == null) throw new Error('Category name is required')
    name = name.split('-').join(' ')
    const products = await getProductsByCategory(name)
    return NextResponse.json(products)
  } catch (error: any) {
    return NextResponse.json({
      message: 'Error obtaining the categories',
      error: error.message
    })
  }
}
