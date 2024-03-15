import { type TypeProductsCart, type TypeCategories, type TypeProduct } from '@/types'
import CardProduct from './CardProduct'
import { type FC } from 'react'
import { quicksand } from '../fonts/fonts'

const getData = async (
  category: null | TypeCategories,
  id: string | null,
  p: TypeProductsCart[] | null) => {
  if (category != null) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_PREFIX_URL_FETCHS}/products/category/${category}`, {
        next: { revalidate: 0 }
      })
      const data: TypeProduct[] | object = await res.json()
      return parseData(data, id)
    } catch (error) {
      throw new Error('Error: no se encontró la categoría')
    }
  }
  const res = await fetch(`${process.env.NEXT_PUBLIC_PREFIX_URL_FETCHS}/products`, {
    next: { revalidate: 0 }
  })
  const data: TypeProduct[] | object = await res.json()
  const ids = p?.map(product => product.id)
  return parseData(data, id, ids)
}

const parseData = (
  data: TypeProduct[] | object,
  id: string | null,
  ids?: string[] | null) => {
  if (!Array.isArray(data) || id == null) return data
  if (ids != null) return data.filter((p: TypeProduct) => !ids.includes(p.id))
  return data.filter((p) => p.id !== id)
}

interface Props {
  limit?: number
  category?: null | TypeCategories
  id?: string | null
  p?: TypeProductsCart[]
}

export const MoreProducts: FC<Props> = async ({ limit = 4, category = null, id = null, p = null }) => {
  const products = await getData(category, id, p)

  return (
    <section
      className='animate-enter'
    >
      <h2
        className={`${quicksand.className} max-w-5xl px-3 xl:px-0 text-2xl font-bold m-auto text-Lochmara-950 text-center lg:text-left `}
      >Más productos</h2>
      <article
        className='flex flex-wrap gap-2 md:gap-3 px-3 xl:px-0 mt-5 mb-10 justify-center items-center max-w-5xl m-auto'
      >
        {
          Array.isArray(products) && products.slice(0, limit).map((product) => {
            return <CardProduct key={product.id} {...product} />
          })
        }
      </article>
    </section>
  )
}
