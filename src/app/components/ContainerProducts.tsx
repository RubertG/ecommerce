'use client'

import { type TypeSearchParams, type TypeProduct } from '@/types'
import CardProduct from './CardProduct'
import { useProductsReducer } from '../hooks/useProductsReducer'
import { type FC } from 'react'
import CardProductSkeleton from './CardProductSkeleton'

interface Props {
  searchParams: TypeSearchParams
}

export const ContainerProducts: FC<Props> = ({ searchParams }) => {
  const { state: { filterProducts: products }, loading } = useProductsReducer({ searchParams })

  if (loading) {
    return (
      <section
        className='flex flex-wrap gap-2 md:gap-3 px-3 my-10 xl:px-0 justify-center items-center max-w-5xl m-auto'
      >
        {
          Array.from({ length: 8 }).map((_, index) => (
            <CardProductSkeleton key={index} />
          ))
        }
      </section>
    )
  }

  return (
    <section
      className='flex flex-wrap gap-2 md:gap-3 px-3 my-10 justify-center items-center max-w-5xl m-auto xl:px-0'
    >
      {
        products?.map((product: TypeProduct) => (
          <CardProduct key={product.id} {...product} />
        ))
      }
      {
        (products == null || products.length === 0) && <p
          className='h-[50vh]'
        >No hay productos :(</p>
      }
    </section>
  )
}
