import CardProductSkeleton from '@/app/components/CardProductSkeleton'
import { CartProducts } from '@/app/components/CartProducts'
import { MoreProducts } from '@/app/components/MoreProducts'
import { Suspense } from 'react'

const CartPage = () => {
  return (
    <main
      className='animate-enter'
    >
      <CartProducts />
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
        <MoreProducts />
      </Suspense>
    </main>
  )
}

export default CartPage
