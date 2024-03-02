import { ContainerProducts } from '@/app/components/ContainerProducts'
import { FilterByPrice } from '@/app/components/FilterByPrice'
import { FilterByRate } from '@/app/components/FilterByRate'
import Searcher from '@/app/components/Searcher'
import { type TypeSearchParams } from '@/types'
import { type FC } from 'react'

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
          className='flex items-center justify-center gap-2 flex-wrap'
        >
        <FilterByPrice searchParams={searchParams} />
        <FilterByRate searchParams={searchParams} />
        </section>
      </header>
      <main>
        <ContainerProducts searchParams={searchParams} />
      </main>
    </>
  )
}

export default ProductsPage
