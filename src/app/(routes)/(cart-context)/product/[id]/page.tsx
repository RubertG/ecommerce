import CardProductSkeleton from '@/app/components/CardProductSkeleton'
import { MoreProducts } from '@/app/components/MoreProducts'
import { ProductDetails } from '@/app/components/ProductDetails'
import { type TypeProduct } from '@/types'
import { Suspense, type FC } from 'react'

const getData = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_PREFIX_URL_FETCHS}/products/${id}`, { next: { revalidate: 0 } })
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
    <main
      className='animate-enter'
    >
      <ProductDetails {...product} />
      <Suspense
        fallback={
          <section
            className='flex flex-wrap gap-2 md:gap-3 px-3 xl:px-0 my-10 justify-center items-center max-w-5xl m-auto'
          >
            {
              Array.from({ length: 4 }).map((_, index) => (
                <CardProductSkeleton key={index} />
              ))
            }
          </section>
        }
      >
        <MoreProducts category={product.category.name} id={id} />
      </Suspense>
    </main>
  )
}

export default ProductPage
