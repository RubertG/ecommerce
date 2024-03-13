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
          <ProductDetailsSkeleton />
        }
      >
        {children}
      </Suspense>
    </>
  )
}

export default ProductLayout
