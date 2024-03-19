import { PaymentMethods } from '@/app/components/PaymentMethods'
import { quicksand } from '@/app/fonts/fonts'
import { type TypeCart } from '@/types'
import { type FC } from 'react'

const getData = async (id: string[]) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_PREFIX_URL_FETCHS}/carts/${id[0]}`, {
    next: {
      revalidate: 0
    }
  })
  return await res.json() as TypeCart
}

interface Props {
  params: {
    ids: string[]
  }
}

const CheckoutPage: FC<Props> = async ({ params: { ids } }) => {
  const cart = await getData(ids)

  if (cart.products == null || cart.products?.length === 0) {
    return <h1>Error al obtener el carrito</h1>
  }

  if (ids[1] != null) {
    cart.products = cart.products.filter(product => {
      if (product.id === ids[1]) {
        cart.total = product.price * product.quantity
        return true
      }
      return false
    })
  }

  return (
    <main
      className='lg:min-h-[70vh] grid gap-2 xl:gap-4 px-3 my-10 lg:max-w-5xl m-auto xl:px-0 lg:grid-cols-[60%,40%] items-start max-w-2xl animate-enter mt-20 mb-24 lg:mb-10'
    >
      <section
        className='bg-white-custom border-2 border-gray-custom shadow-gray-custom overflow-hidden rounded-lg'
      >
        <h2
          className={`${quicksand.className} text-xl text-dodger-blue-950 font-bold py-4 px-4 text-center`}
        >Resumen de la compra</h2>
        <ul>
          {
            cart.products.map(product => {
              return (
                <li
                  key={product.id}
                  className='bg-white-custom p-3 border-t-2 border-t-gray-custom grid grid-cols-[13%,67%,20%]'
                >
                  <img
                    className='rounded-lg object-cover aspect-square'
                    src={product.image}
                    alt={product.description}
                    loading='lazy'
                  />
                  <div
                    className='flex flex-col justify-center gap-1 pl-2 sm:pl-6 pr-2'
                  >
                    <h3
                      className={`${quicksand.className} md:text-lg font-medium text-dodger-blue-950 text-ellipsis whitespace-nowrap overflow-hidden`}
                    >{product.title}</h3>
                    <div
                      className='flex items-center gap-2'
                    >
                      <span
                        className={`${quicksand.className} border text-sm sm:text-base border-malachite-300 bg-gradient-green rounded-lg py-[0.12rem] px-2 font-medium text-malachite-950`}
                      >
                        ${product.price}
                      </span>
                    </div>
                  </div>
                  <footer
                    className='flex items-center justify-center'
                  >
                    <p
                      className={`${quicksand.className} text-center text-2xl sm:text-4xl font-medium`}
                    >{product.quantity}</p>
                  </footer>
                </li>
              )
            })
          }
        </ul>
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
          >${cart.total.toFixed(2)}</span>
        </footer>
      </section>
      <section
        className='bg-white-custom border-2 border-gray-custom shadow-gray-custom overflow-hidden rounded-lg'
      >
        <h1
          className={`${quicksand.className} text-xl text-dodger-blue-950 font-bold py-4 px-4 text-center border-b-2 border-gray-custom`}>
          Metodos de pago</h1>
        <div
          className='px-3 min-h-20'
        >
          <PaymentMethods cart={cart} />
        </div>
      </section>
    </main>
  )
}

export default CheckoutPage
