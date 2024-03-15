import CardProductSkeleton from '@/app/components/CardProductSkeleton'
import { ContainerProducts } from '@/app/components/ContainerProducts'
import { FilterByPrice } from '@/app/components/FilterByPrice'
import { FilterByRate } from '@/app/components/FilterByRate'
import Searcher from '@/app/components/Searcher'
import { type TypeSearchParams } from '@/types'
import { Suspense, type FC } from 'react'

interface Props {
  searchParams: TypeSearchParams
}

const ProductsPage: FC<Props> = ({ searchParams }) => {
  return (
    <>
      <header
        className='flex flex-col gap-2 items-center justify-center mt-[4.5rem]'
      >
        <Searcher searchParams={searchParams} />
        <section
          className='flex items-center justify-center gap-2 flex-wrap animate-enter'
        >
          <FilterByPrice searchParams={searchParams} />
          <FilterByRate searchParams={searchParams} />
        </section>
      </header>
      <main
        className='animate-enter'
      >
        <Suspense fallback={
          <section
            className='flex flex-wrap gap-2 md:gap-3 px-3 my-10 xl:px-0 justify-center items-center max-w-5xl m-auto'
          >
            {
              Array.from({ length: 8 }).map((_, index) => (
                <CardProductSkeleton key={index} />
              ))
            }
          </section>
        }>
          <ContainerProducts searchParams={searchParams} />
        </Suspense>
      </main>
    </>
  )
}

export default ProductsPage
