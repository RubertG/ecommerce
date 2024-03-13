'use client'

import { type TypeProductsCart } from '@/types'
import { type FC } from 'react'
import { MinusIcon, PlusIcon, TrashIcon } from './Icons'
import { SuccessToast } from './toasts'
import { quicksand } from '../fonts/fonts'

interface Props {
  sumProduct: (product: TypeProductsCart) => void
  resProduct: (product: TypeProductsCart) => void
  deleteProduct: (product: TypeProductsCart) => void
  product: TypeProductsCart
}

export const CardCartProduct: FC<Props> = ({ deleteProduct, product, resProduct, sumProduct }) => {
  return (
    <li
      className='bg-white-custom p-3 border-t-2 border-t-gray-custom grid grid-cols-[15%,65%,20%]'
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
          <button
            className='py-[0.12rem] px-3 bg-gradient-blue text-sm sm:text-base rounded-lg border-Lochmara-600 text-Lochmara-50 border hover:shadow-blue-custom transition-shadow'
            onClick={() => { SuccessToast({ text: 'Proximamente!' }) }}
          >Comprar</button>
          <span
            className={`${quicksand.className} border text-sm sm:text-base border-malachite-300 bg-gradient-green rounded-lg py-[0.12rem] px-2 font-medium text-malachite-950`}
          >
            ${product.price}
          </span>
        </div>
      </div>
      <footer
        className='relative flex items-center justify-center pr-2 sm:pr-0'
      >
        <div>
          <p
            className={`${quicksand.className} text-center text-2xl sm:text-4xl font-medium`}
          >{product.quantity}</p>
          <div
            className='flex items-center justify-center'
          >
            <button
              className='w-8 h-6 sm:w-10 sm:h-8 px-2 bg-mercury-50 border-2 border-mercury-200 flex items-center justify-center rounded-l-lg hover:bg-mercury-100 transition-colors'
              onClick={() => { resProduct(product) }}
            >
              <MinusIcon className='stroke-mercury-950' />
            </button>
            <button
              className='w-8 h-6 sm:w-10 sm:h-8 px-2 bg-mercury-50 border-2 border-mercury-200 border-l-0 flex items-center justify-center rounded-r-lg hover:bg-mercury-100 transition-colors'
              onClick={() => { sumProduct(product) }}
            >
              <PlusIcon className='stroke-mercury-950' />
            </button>
          </div>
        </div>
        <button
          className='absolute top-0 right-0 md:hover:scale-125 transition-transform'
          onClick={() => { deleteProduct(product) }}
        >
          <TrashIcon className='stroke-mercury-900' height='20px' width='20px' />
        </button>
      </footer>
    </li>
  )
}
