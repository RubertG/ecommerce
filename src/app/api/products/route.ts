import { getProducts } from '@/app/firebase/products-actions'
import { NextResponse } from 'next/server'

export async function GET () {
  try {
    const products = await getProducts()
    return NextResponse.json(products)
  } catch (error: any) {
    return NextResponse.json({
      message: 'Error obtaining the products',
      error: error.message
    })
  }
}
