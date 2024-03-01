'use client'

import Link from 'next/link'
import { MagnifyingGlassIcon } from './Icons'
import { type ChangeEvent, useState, type FC, useEffect, useRef } from 'react'
import { type TypeSearchParams } from '@/types'
import { CATEGORIES, MAX_PRICE, MAX_RATE, MIN_PRICE, MIN_RATE } from '@/const'

interface Props {
  searchParams?: TypeSearchParams
  classNameContainer?: string
}

const Searcher: FC<Props> = ({ searchParams, classNameContainer }) => {
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
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (searchParams?.search == null && inputRef.current != null) {
      setText('')
      inputRef.current.value = ''
    }
  }, [searchParams?.search])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <search
      className={`z-10 w-full max-w-xl ${classNameContainer ?? ''}`}
    >
      <form
        className='flex flex-row justify-between items-center gap-2 px-3 py-2 rounded-2xl border-2 border-gray-custom bg-white-custom shadow-card-custom'
      >
        <input
          type="text"
          ref={inputRef}
          className='w-full focus:outline-none'
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
          <MagnifyingGlassIcon className='fill-Lochmara-500 w-8 hover:fill-Lochmara-700 transition' />
        </Link>
      </form>
      <footer
        className='flex items-center justify-between gap-2 mt-2 flex-wrap'
      >
        <Link
          href={'/products'}
          className='bg-white-custom border-2 border-gray-custom shadow-card-custom px-3 py-1 rounded-lg text-sm text-mercury-950 hover:bg-Lochmara-600 hover:text-white-custom hover:border-Lochmara-700 transition'
        >
          All products
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
                className='bg-white-custom border-2 border-gray-custom shadow-card-custom px-3 py-1 rounded-lg text-sm text-mercury-950 hover:bg-Lochmara-600 hover:text-white-custom hover:border-Lochmara-700 transition'
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
