import { type TypeProduct } from '@/types'
import { type FC } from 'react'
import { StartIcon } from './Icons'
import Link from 'next/link'

const CardProduct: FC<TypeProduct> = ({ image, price, title, rate, description, id }) => {
  return (
    <article>
      <Link
        href={`/product/${id}`}
      >
        <img
          src={image}
          alt={description}
          loading='lazy'
          className='w-10'
        />
        <h2>{title}</h2>
        <footer>
          <p>${price}</p>
          <p><StartIcon className='fill-yellow-500 w-5' />{rate}</p>
        </footer>
      </Link>
    </article>
  )
}

export default CardProduct
