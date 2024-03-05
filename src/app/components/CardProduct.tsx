import { type TypeProduct } from '@/types'
import { type FC } from 'react'
import { StartIcon } from './Icons'
import Link from 'next/link'
import { quicksand } from '../fonts/fonts'

const CardProduct: FC<TypeProduct> = ({ image, price, title, rate, description, id }) => {
  return (
    <Link
      className='block border md:border-2 shadow-gray-custom border-gray-custom p-2 rounded-lg w-44 md:w-56 lg:w-60 xl:w-[15.4rem] bg-white-custom hover:scale-105 transition-transform focus:scale-95'
      href={`/product/${id}`}
    >
      <img
        src={image}
        alt={description}
        loading='lazy'
        className='w-full aspect-square rounded-lg'
      />
      <h2
        className={`${quicksand.className} mt-2 text-gray-950 text-sm md:text-base text-center font-medium text-ellipsis whitespace-nowrap overflow-hidden`}
        title={title}
      >{title}</h2>
      <footer
        className='flex items-center mt-2 gap-2 text-sm sm:text-base'
      >
        <p
          className={`${quicksand.className} border border-malachite-300 bg-gradient-green rounded-lg py-1 px-2 font-medium text-malachite-950`}
        >${price}</p>
        <p
          className={`${quicksand.className} border border-ripe-lemon-200 bg-gradient-yellow rounded-lg py-1 px-2 font-medium text-ripe-lemon-950 flex gap-1 justify-center items-center`}
        ><StartIcon className='fill-yellow-500 w-5' />{rate}</p>
      </footer>
    </Link>
  )
}

export default CardProduct
