'use client'

import Link from 'next/link'
import { MagnifyingGlassIcon } from './Icons'
import { type ChangeEvent, useState } from 'react'

const Searcher = () => {
  const [text, setText] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <search>
      <input
        type="text"
        placeholder="Search products of interest..."
        onChange={(e) => { handleChange(e) }}
      />
      <Link
        href={`?${new URLSearchParams({
          search: text
        }).toString()}`}
      >
        <MagnifyingGlassIcon className='fill-blue-600 w-8' />
      </Link>
    </search>
  )
}

export default Searcher
