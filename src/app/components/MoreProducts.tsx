import { type TypeCategories, type TypeProduct } from '@/types'
import CardProduct from './CardProduct'
import { type FC } from 'react'
import { quicksand } from '../fonts/fonts'

const getData = async (category: null | TypeCategories, id: string) => {
  if (category != null) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_PREFIX_URL_FETCHS}/products/category/${category}`)
      const data: TypeProduct[] | object = await res.json()
      return parseData(data, id)
    } catch (error) {
      throw new Error('Error: category not found')
    }
  }
  const res = await fetch(`${process.env.NEXT_PUBLIC_PREFIX_URL_FETCHS}/products`)
  const data: TypeProduct[] | object = await res.json()
  return parseData(data, id)
}

const parseData = (data: TypeProduct[] | object, id: string) => {
  if (!Array.isArray(data)) return data
  return data.filter((p) => p.id !== id)
}

interface Props {
  limit?: number
  category?: null | TypeCategories
  id: string
}

export const MoreProducts: FC<Props> = async ({ limit = 4, category = null, id }) => {
  const products = await getData(category, id)

  return (
    <>
      <h2
        className={`${quicksand.className} max-w-5xl px-3 xl:px-0 text-2xl font-bold m-auto text-Lochmara-950 text-center lg:text-left`}
      >More products</h2>
      <main
        className='flex flex-wrap gap-2 md:gap-3 px-3 xl:px-0 mt-5 mb-10 justify-center items-center max-w-5xl m-auto'
      >
        {
          Array.isArray(products) && products.slice(0, limit).map((product) => {
            return <CardProduct key={product.id} {...product} />
          })
        }
      </main>
    </>
  )
}
