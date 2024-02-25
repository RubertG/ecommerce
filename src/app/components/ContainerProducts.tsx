'use client'
import { type TypeSearchParams, type TypeProduct } from '@/types'
import CardProduct from './CardProduct'
import { useProductsReducer } from '../hooks/useProductsReducer'
import { type FC } from 'react'

interface Props {
  searchParams: TypeSearchParams
}

export const ContainerProducts: FC<Props> = ({ searchParams }) => {
  const { state: { filterProducts: products }, loading } = useProductsReducer({ searchParams })

  if (loading) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <section>
      {
        products?.map((product: TypeProduct) => (
          <CardProduct key={product.id} {...product} />
        ))
      }
      {
        (products?.length === 0 || products == null) && <p>No products :(</p>
      }
    </section>
  )
}
