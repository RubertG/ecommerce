'use client'

import { MAX_PRICE, MAX_RATE, MIN_PRICE, MIN_RATE } from '@/const'
import { type TypeSearchParams } from '@/types'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

interface Props {
  searchParams: TypeSearchParams
}

export const FilterByRate = ({
  searchParams: {
    search,
    [MAX_PRICE]: maxPrice,
    [MIN_PRICE]: minPrice,
    [MAX_RATE]: maxRate,
    [MIN_RATE]: minRate,
    category
  }
}: Props) => {
  const [rateRange, setRateRange] = useState<[string | null, string | null]>([null, null])
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (formRef.current != null) {
      formRef.current.reset()
    }
    setRateRange([null, null])
  }, [search])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === MIN_RATE) {
      if (parseFloat(e.target.value) < 0) {
        e.target.value = '0'
      }
      if (parseFloat(e.target.value) > 5) {
        e.target.value = '5'
      }
      setRateRange([e.target.value, rateRange[1]])
    }

    if (e.target.name === MAX_RATE) {
      if (parseFloat(e.target.value) < 0) {
        e.target.value = '0'
      }
      if (parseFloat(e.target.value) > 5) {
        e.target.value = '5'
      }
      setRateRange([rateRange[0], e.target.value])
    }
  }

  return (
    <form ref={formRef}
      className='flex gap-2'
    >
      <label
        className='flex items-center justify-center gap-3 px-3 py-1 bg-white-custom rounded-lg shadow-card-custom border-2 border-gray-custom'
      >
        <p
          className='text-text-gray'
        >Min</p>
        <input
          type="number"
          name={MIN_RATE}
          placeholder="0"
          min={0}
          max={5}
          defaultValue={minRate ?? ''}
          className='text-mercury-950 border border-mercury-200 bg-mercury-100 rounded-md px-1 w-8 text-center appearance-none focus:outline focus:outline-mercury-300 text-sm'
          onChange={(e) => { handleChange(e) }} />
      </label>
      <label
        className='flex items-center justify-center gap-3 px-3 py-1 bg-white-custom rounded-lg shadow-card-custom border-2 border-gray-custom'
      >
        <p
          className='text-text-gray'
        >Max</p>
        <input
          type="number"
          name={MAX_RATE}
          placeholder="5"
          min={0}
          max={5}
          defaultValue={maxRate ?? ''}
          className='text-mercury-950 border border-mercury-200 bg-mercury-100 rounded-md px-1 w-8 text-center appearance-none focus:outline focus:outline-mercury-300 text-sm'
          onChange={(e) => { handleChange(e) }} />
      </label>
      <Link
        className='px-2 bg-gradient-blue-light rounded-lg border-Lochmara-200 border-2 grid place-content-center text-Lochmara-600 hover:shadow-gray-custom transition-shadow'
        href={`?${new URLSearchParams({
          ...((search != null) && { search }),
          ...((rateRange[0] != null) && { [MIN_RATE]: rateRange[0] }),
          ...((rateRange[1] != null) && { [MAX_RATE]: rateRange[1] }),
          ...((minPrice != null) && { [MIN_PRICE]: minPrice }),
          ...((maxPrice != null) && { [MAX_PRICE]: maxPrice }),
          ...((category != null) && { category })
        }).toString()}`}
      >
        Filter by rate
      </Link>
    </form>
  )
}
