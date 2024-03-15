import { type TypeSearchParams, type TypeProduct } from '@/types'
import CardProduct from './CardProduct'
import { type FC } from 'react'
import { filterProducts } from '../utils/filter-products'

interface Props {
  searchParams: TypeSearchParams
}

const getData = async ({ searchParams }: Props) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PREFIX_URL_FETCHS}/products`, { cache: 'no-store' })
    const data = await res.json() as TypeProduct[]
    const products = filterProducts(data, searchParams)
    return products
  } catch (error) {
    return []
  }
}

export const ContainerProducts: FC<Props> = async ({ searchParams }) => {
  const products = await getData({ searchParams })

  return (
    <section
      className='flex flex-wrap gap-2 md:gap-3 px-3 my-10 justify-center items-center max-w-5xl m-auto xl:px-0'
    >
      {
        (products == null || products.length === 0)
          ? <p
            className='h-[50vh]'
          >No hay productos :(</p>
          : (
              products?.map((product: TypeProduct) =>
              <CardProduct key={product.id} {...product} />
              )
            )
      }
    </section>
  )
}
