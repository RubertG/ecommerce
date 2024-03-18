'use client'

import React, { type FC } from 'react'
import { ShoppingCartIcon, StartIcon } from './Icons'
import { quicksand } from '../fonts/fonts'
import { type TypeProduct } from '@/types'
import { useCartContext } from '../hooks/useCartContext'
import { useRouter } from 'next/navigation'

export const ProductDetails: FC<TypeProduct> = ({ image, price, rate, title, description, id, category }) => {
  const { addProduct, state } = useCartContext()
  const router = useRouter()

  return (
    <section
      className='grid md:grid-cols-[45%,55%] md:grid-rows-1 gap-2 md:gap-3 px-3 xl:px-0 my-10 max-w-5xl m-auto'
    >
      <picture
        className='p-2 rounded-lg bg-white-custom border-2 border-gray-custom shadow-gray-custom w-full aspect-square'
      >
        <img
          src={image}
          alt={description}
          className='w-full h-full object-cover rounded-lg'
        />
      </picture>
      <article>
        <main
          className='rounded-lg bg-white-custom border-2 border-gray-custom shadow-gray-custom'
        >
          <h2
            className={`${quicksand.className} font-bold text-lg lg:text-2xl text-center text-Lochmara-950 border-b-2 border-b-gray-custom px-2 py-3`}
          >{title}</h2>
          <p
            className='px-2 py-3 text-gray-900'
          >{description}</p>
        </main>
        <footer
          className='flex mt-2 gap-1 md:gap-2'
        >
          <p
            className={`${quicksand.className} border border-malachite-300 bg-gradient-green rounded-lg py-1 px-2 font-medium text-malachite-950 md:text-lg`}
          >${price}</p>
          <p
            className={`${quicksand.className} border border-ripe-lemon-200 bg-gradient-yellow rounded-lg py-1 px-2 font-medium text-ripe-lemon-950 flex gap-1 justify-center items-center md:text-lg`}
          ><StartIcon className='fill-yellow-500 w-5' />{rate}</p>
          <div
            className='grid grid-cols-2 w-full gap-1 md:gap-2'
          >
            <button
              className='py-[0.125rem] px-4 bg-gradient-blue-light text-sm sm:text-base font-medium rounded-lg border-Lochmara-200 border-2 text-Lochmara-600 hover:shadow-gray-custom transition-shadow flex items-center justify-center gap-1 md:gap-2'
              onClick={() => { addProduct({ id, category, description, image, price, rate, title }) }}
            >
              <ShoppingCartIcon className='block fill-Lochmara-600 w-4 md:w-5' />
              Añadir
            </button>
            <button
              className='py-[0.125rem] px-4 bg-gradient-blue text-sm sm:text-base font-medium rounded-lg border-Lochmara-600 text-Lochmara-50 border-2 hover:shadow-blue-custom transition-shadow '
              onClick={() => {
                const index = state.cart.products.findIndex(p => p.id === id)
                if (index === -1) {
                  addProduct({ id, category, description, image, price, rate, title })
                }
                router.push(`/checkout_cart/${state.cart.id.split('cart-')[1]}/${id}`)
              }}
            >
              Comprar
            </button>
          </div>
        </footer>
      </article>
    </section>
  )
}
