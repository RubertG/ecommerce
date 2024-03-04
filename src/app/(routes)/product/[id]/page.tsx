import CardProductSkeleton from '@/app/components/CardProductSkeleton'
import { MoreProducts } from '@/app/components/MoreProducts'
import Searcher from '@/app/components/Searcher'
import { type TypeProduct } from '@/types'
import { Suspense, type FC } from 'react'

const getData = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_PREFIX_URL_FETCHS}/products/${id}`)
  const data = await res.json()
  return data as TypeProduct
}

interface Props {
  params: {
    id: string
  }
}

const ProductPage: FC<Props> = async ({ params: { id } }) => {
  const product = await getData(id)

  return (
    <>
      <header
        className='flex flex-col gap-2 items-center justify-center mt-[4.5rem]'
      >
        <Searcher />
      </header>
      <Suspense fallback={
        <section
          className='flex flex-wrap gap-2 md:gap-3 px-3 my-10 justify-center items-center max-w-5xl m-auto'
        >
          {
            Array.from({ length: 4 }).map((_, index) => (
              <CardProductSkeleton key={index} />
            ))
          }
        </section>
      }>
        <MoreProducts category={product.category.name} id={id} />
      </Suspense>
    </>
  )
}

export default ProductPage
