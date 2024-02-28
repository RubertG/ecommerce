'use client'

import Link from 'next/link'
import { MagnifyingGlassIcon } from './Icons'
import { type ChangeEvent, useState, type FC } from 'react'
import { type TypeSearchParams } from '@/types'
import { CATEGORIES, MAX_PRICE, MAX_RATE, MIN_PRICE, MIN_RATE } from '@/const'

interface Props {
  searchParams?: TypeSearchParams
}

const Searcher: FC<Props> = ({ searchParams }) => {
  const [text, setText] = useState(searchParams?.search ?? '')
  const urlAux = {
    ...((searchParams?.search != null) && {
      search: searchParams?.search
    }),
    ...((searchParams?.['min-rate'] != null) && {
      [MIN_RATE]: searchParams?.['min-rate']
    }),
    ...((searchParams?.['max-rate'] != null) && {
      [MAX_RATE]: searchParams?.['max-rate']
    }),
    ...((searchParams?.['min-price'] != null) && {
      [MIN_PRICE]: searchParams?.['min-price']
    }),
    ...((searchParams?.['max-price'] != null) && {
      [MAX_PRICE]: searchParams?.['max-price']
    })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <search>
      <input
        type="text"
        className='text-black'
        placeholder="Search products of interest..."
        defaultValue={searchParams?.search ?? ''}
        onChange={(e) => { handleChange(e) }}
      />
      <Link
        href={`/products?${new URLSearchParams({
          ...((text !== '') && { search: text }),
          ...((searchParams?.category != null) && { category: searchParams?.category })
        }).toString()}`}
      >
        <MagnifyingGlassIcon className='fill-blue-600 w-8' />
      </Link>
      <footer>
        <Link
          href={'/products'}
        >
          All
        </Link>
        {
          Object.entries(CATEGORIES).map(([key, value]) => {
            return (
              <Link
                key={key}
                href={`/products?${new URLSearchParams({
                  ...urlAux,
                  category: value
                }).toString()}`}
              >
                {value[0].toLocaleUpperCase() + value.slice(1)}
              </Link>
            )
          })
        }
      </footer>
    </search>
  )
}

export default Searcher
