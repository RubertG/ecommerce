import { getCategory } from '@/app/firebase/category-actions'
import { type TypeIdCategory } from '@/types'
import { NextResponse } from 'next/server'

interface Context {
  params: {
    name?: TypeIdCategory
  }
}

export async function GET (req: Request, { params }: Context) {
  try {
    let { name } = params
    if (name == null) throw new Error('The name category is required')
    name = name.split('-').join(' ')
    const category = await getCategory(name)
    return NextResponse.json(category)
  } catch (error: any) {
    return NextResponse.json({
      message: 'Error obtaining the category',
      error: error.message
    })
  }
}
