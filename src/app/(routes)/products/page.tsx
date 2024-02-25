import { ContainerProducts } from '@/app/components/ContainerProducts'
import { FilterByPrice } from '@/app/components/Filters'
import Searcher from '@/app/components/Searcher'
import { type TypeSearchParams } from '@/types'
import { type FC } from 'react'

interface Props {
  searchParams: TypeSearchParams
}

const ProductsPage: FC<Props> = ({ searchParams }) => {
  return (
    <>
      <header>
        <h1>Products</h1>
        <Searcher />
        <FilterByPrice searchParams={searchParams} />
      </header>
      <main>
        <ContainerProducts searchParams={searchParams}/>
      </main>
    </>
  )
}

export default ProductsPage
