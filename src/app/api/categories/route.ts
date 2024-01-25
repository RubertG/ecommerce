import { getCategories } from '@/app/firebase/category-actions'
import { NextResponse } from 'next/server'

export async function GET () {
  try {
    const categories = await getCategories()
    return NextResponse.json(categories)
  } catch (error: any) {
    return NextResponse.json({
      message: 'Error obtaining the categories',
      error: error.message
    })
  }
}
