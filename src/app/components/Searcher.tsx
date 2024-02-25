'use client'

import Link from 'next/link'
import { MagnifyingGlassIcon } from './Icons'
import { type ChangeEvent, useState, type FC } from 'react'

interface Props {
  search?: string | null
}

const Searcher: FC<Props> = ({ search }) => {
  const [text, setText] = useState(search ?? '')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <search>
      <input
        type="text"
        className='text-black'
        placeholder="Search products of interest..."
        defaultValue={search ?? ''}
        onChange={(e) => { handleChange(e) }}
      />
      <Link
        href={`/products?${new URLSearchParams({
          ...((text !== '') && { search: text })
        }).toString()}`}
      >
        <MagnifyingGlassIcon className='fill-blue-600 w-8' />
      </Link>
    </search>
  )
}

export default Searcher
