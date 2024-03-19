import ProtectedRoute from '@/app/components/ProtectedRoute'
import { quicksand } from '@/app/fonts/fonts'
import { Suspense, type FC } from 'react'
import Skeleton from 'react-loading-skeleton'

interface Props {
  children: React.ReactNode
}

const LayoutCheckout: FC<Props> = ({ children }) => {
  return (
    <ProtectedRoute>
      <Suspense
        fallback={
          <main
            className='lg:min-h-[70vh] grid gap-2 xl:gap-4 px-3 my-10 lg:max-w-5xl m-auto xl:px-0 lg:grid-cols-[60%,40%] items-start max-w-2xl animate-enter mt-20 mb-24 lg:mb-10'
          >
            <section
              className='bg-white-custom border-2 border-gray-custom shadow-gray-custom overflow-hidden rounded-lg'
            >
              <h2
                className={`${quicksand.className} text-xl text-dodger-blue-950 font-bold py-4 px-4 text-center`}
              >Resumen de la compra</h2>
              <div
                className='flex items-center justify-center py-5 border-t-2 border-t-gray-custom'
              >
                <div
                  className='my-3'
                >
                  <Skeleton className='rounded-lg py-1 md:py-2 px-2 font-medium w-full h-12' />
                  <div
                    className='overflow-hidden w-20 m-auto'>
                    <Skeleton className='rounded-lg px-2 font-medium' />
                  </div>
                </div>
              </div>
              <footer
                className='flex items-center justify-between py-3 px-3 border-t-2 border-t-gray-custom'
              >
                <p
                  className='font-bold text-mercury-950 text-lg'
                >
                  Total
                </p>
                <span
                  className='font-bold text-xl text-mercury-950'
                ><Skeleton className='rounded-lg px-10 py-2 font-medium' /></span>
              </footer>
            </section>
            <section
              className='bg-white-custom border-2 border-gray-custom shadow-gray-custom overflow-hidden rounded-lg'
            >
              <h1
                className={`${quicksand.className} text-xl text-dodger-blue-950 font-bold py-4 px-4 text-center border-b-2 border-gray-custom`}>
                Metodos de pago</h1>
              <div
                className='px-3 min-h-24'
              >
              </div>
            </section>
          </main>
        }>
        {children}
      </Suspense>
    </ProtectedRoute>
  )
}

export default LayoutCheckout
