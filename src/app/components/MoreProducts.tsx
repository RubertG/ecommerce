import { type TypeCategories, type TypeProduct } from '@/types'
import CardProduct from './CardProduct'
import { type FC } from 'react'

const getData = async (category: null | TypeCategories) => {
  if (category != null) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_PREFIX_URL_FETCHS}/products/category/${category}`)
      const data = await res.json()
      return data as TypeProduct[]
    } catch (error) {
      throw new Error('Error: category not found')
    }
  }
  const res = await fetch(`${process.env.NEXT_PUBLIC_PREFIX_URL_FETCHS}/products`)
  const data = await res.json()
  return data as TypeProduct[]
}

interface Props {
  limit?: number
  category?: null | TypeCategories
}

export const MoreProducts: FC<Props> = async ({ limit = 4, category = null }) => {
  const products = await getData(category)

  return (
    <section>
      <h2>More products</h2>
      <main>
        {
          Array.isArray(products) && products.slice(0, limit).map((product) => {
            return <CardProduct key={product.id} {...product} />
          })
        }
      </main>
    </section>
  )
}
