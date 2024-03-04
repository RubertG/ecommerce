'use client'

import { type TypeSearchParams, type TypeProduct } from '@/types'
import CardProduct from './CardProduct'
import { useProductsReducer } from '../hooks/useProductsReducer'
import { type FC } from 'react'
import CardProductSkeleton from './CardProductSkeleton'
import { SkeletonTheme } from 'react-loading-skeleton'

interface Props {
  searchParams: TypeSearchParams
}

export const ContainerProducts: FC<Props> = ({ searchParams }) => {
  const { state: { filterProducts: products }, loading } = useProductsReducer({ searchParams })

  if (loading) {
    return (
      <section
        className='flex flex-wrap gap-2 md:gap-3 px-3 my-10 justify-center items-center max-w-5xl m-auto'
      >
        <SkeletonTheme baseColor="#c2c2c2" highlightColor="#9b9b9b">
          {
            Array.from({ length: 12 }).map((_, index) => (
              <CardProductSkeleton key={index} />
            ))
          }
        </SkeletonTheme>
      </section>
    )
  }

  return (
    <section
      className='flex flex-wrap gap-2 md:gap-3 px-3 my-10 justify-center items-center max-w-5xl m-auto'
    >
      {
        products?.map((product: TypeProduct) => (
          <CardProduct key={product.id} {...product} />
        ))
      }
      {
        products == null
          ? <p>Error obtaining the products</p>
          : (products.length === 0) && <p>No products :(</p>
      }
    </section>
  )
}
