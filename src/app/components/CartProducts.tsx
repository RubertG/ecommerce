'use client'

import { Oval } from 'react-loader-spinner'
import { inter, quicksand } from '../fonts/fonts'
import { useCartContext } from '../hooks/useCartContext'
import { CardCartProduct } from './CardCartProduct'
import Link from 'next/link'

export const CartProducts = () => {
  const { deleteProduct, resProduct, state, sumProduct, loading } = useCartContext()

  return (
    <main
      className='grid gap-6 lg:gap-2 xl:gap-6 px-3 my-10 lg:max-w-5xl m-auto xl:px-0 lg:grid-cols-[65%,35%] items-start max-w-2xl animate-enter'
    >
      <section
        className='bg-white-custom border-2 border-gray-custom shadow-gray-custom overflow-hidden rounded-lg'
      >
        <h2
          className={`${quicksand.className} text-lg md:text-xl text-dodger-blue-950 font-bold py-4 px-4 flex justify-between items-center`}
        >
          Productos del carrito
          <span
            className={`${inter.className} text-sm text-mercury-800 font-semibold`}
          >{state.cart.products.length} productos</span>
        </h2>
        <ul>
          {
            !loading
              ? state.cart.products.map((product) => {
                return <CardCartProduct
                  key={product.id}
                  product={product}
                  deleteProduct={deleteProduct}
                  resProduct={resProduct}
                  sumProduct={sumProduct}
                  idCart={state.cart.id}
                />
              })
              : (
                <div
                  className='flex items-center justify-center py-5 border-t-2 border-t-gray-custom'
                >
                  <Oval
                    visible={true}
                    height="40"
                    width="40"
                    color="#0c6290"
                    secondaryColor='#0c6290'
                    strokeWidth={3}
                    ariaLabel="oval-loading"
                  />
                </div>
                )
          }
        </ul>
      </section>
      <aside
        className='bg-white-custom border-2 border-gray-custom shadow-gray-custom overflow-hidden rounded-lg'
      >
        <h2
          className={`${quicksand.className} text-lg md:text-xl text-dodger-blue-950 font-bold py-4 px-4 text-center border-b-2 border-gray-custom`}
        >Resumen de la compra</h2>
        <ul
          className='py-4 px-4'
        >
          {
            !loading
              ? state.cart.products.map(product => {
                return <li
                  className='flex items-center justify-between'
                  key={product.id}>
                  <p
                    className={`${quicksand.className} text-ellipsis whitespace-nowrap overflow-hidden font-bold text-mercury-900 text-sm`}
                  >
                    {product.title}
                  </p>
                  <span
                    className={`${inter.className} font-medium text-mercury-900`}
                  >${(product.price * product.quantity).toFixed(2)}</span>
                </li>
              })
              : (
                <div
                  className='flex items-center justify-center py-5'
                >
                  <Oval
                    visible={true}
                    height="40"
                    width="40"
                    color="#0c6290"
                    secondaryColor='#0c6290'
                    strokeWidth={3}
                    ariaLabel="oval-loading"
                  />
                </div>
                )
          }
          <li
            className='flex items-center justify-between my-3'
          >
            <p
              className='font-bold text-mercury-950'
            >
              Total
            </p>
            <span
              className='font-bold text-lg text-mercury-950'
            >${state.cart.total.toFixed(2)}</span>
          </li>
          <Link
            href={`/checkout_cart/${state.cart.id.split('cart-')[1]}`}
            className='block text-center w-full py-2 px-3 bg-gradient-blue rounded-lg border-Lochmara-600 text-Lochmara-50 border-2 hover:shadow-blue-custom transition-shadow'
          >Realizar compra</Link>
        </ul>
      </aside>
    </main>
  )
}
