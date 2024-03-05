import CardProductSkeleton from '@/app/components/CardProductSkeleton'
import { ProductDetailsSkeleton } from '@/app/components/ProductDetailsSkeleton'
import Searcher from '@/app/components/Searcher'
import { Suspense } from 'react'

interface Props {
  children: React.ReactNode
}

const ProductLayout = ({ children }: Props) => {
  return (
    <>
      <header
        className='flex flex-col gap-2 items-center justify-center mt-[4.5rem]'
      >
        <Searcher />
      </header>
      <Suspense
        fallback={
          <>
            <ProductDetailsSkeleton />
            <section
              className='flex flex-wrap gap-2 md:gap-3 px-3 xl:px-0 my-10 justify-center items-center max-w-5xl m-auto'
            >
              {
                Array.from({ length: 4 }).map((_, index) => (
                  <CardProductSkeleton key={index} />
                ))
              }
            </section>
          </>
        }
      >
        {children}
      </Suspense>
    </>
  )
}

export default ProductLayout
