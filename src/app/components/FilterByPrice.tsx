'use client'
import { MAX_PRICE, MAX_RATE, MIN_PRICE, MIN_RATE } from '@/const'
import { type TypeSearchParams } from '@/types'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

interface Props {
  searchParams: TypeSearchParams
}

export const FilterByPrice = ({
  searchParams: {
    search,
    [MAX_PRICE]: maxPrice,
    [MIN_PRICE]: minPrice,
    [MAX_RATE]: maxRate,
    [MIN_RATE]: minRate,
    category
  }
}: Props) => {
  const [priceRange, setPriceRange] = useState<[string | null, string | null]>([
    minPrice ?? null,
    maxPrice ?? null
  ])
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (formRef.current != null && category == null) {
      formRef.current.reset()
    }
    setPriceRange([null, null])
  }, [search, category])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === MIN_PRICE) {
      if (parseFloat(e.target.value) < 0) {
        e.target.value = '0'
      }
      setPriceRange([e.target.value, priceRange[1]])
    }

    if (e.target.name === MAX_PRICE) {
      if (parseFloat(e.target.value) < 0) {
        e.target.value = '0'
      }
      setPriceRange([priceRange[0], e.target.value])
    }
  }

  return (
    <form ref={formRef}
      className='flex gap-2'
    >
      <label
        className='flex items-center justify-center gap-3 px-2 py-1 bg-white-custom rounded-lg shadow-card-custom border-2 border-gray-custom'
      >
        <p
          className='text-text-gray'
        >Min</p>
        <input
          type="number"
          name={MIN_PRICE}
          placeholder="10"
          min={0}
          defaultValue={minPrice ?? ''}
          className='text-mercury-950 border border-mercury-200 bg-mercury-100 rounded-md px-1 w-[3.2rem] text-center appearance-none focus:outline focus:outline-mercury-300 text-sm'
          onChange={(e) => { handleChange(e) }} />
      </label>
      <label
        className='flex items-center justify-center gap-3 px-2 py-1 bg-white-custom rounded-lg shadow-card-custom border-2 border-gray-custom'
      >
        <p
          className='text-text-gray'
        >Max</p>
        <input
          type="number"
          name={MAX_PRICE}
          placeholder="1000"
          min={0}
          defaultValue={maxPrice ?? ''}
          className='text-mercury-950 border border-mercury-200 bg-mercury-100 rounded-md px-1 w-[3.2rem] text-center appearance-none focus:outline focus:outline-mercury-300 text-sm'
          onChange={(e) => { handleChange(e) }} />
      </label>
      <Link
        className='px-2 bg-gradient-blue-light rounded-lg border-Lochmara-200 border-2 grid place-content-center text-Lochmara-600 hover:shadow-gray-custom transition-shadow'
        href={`?${new URLSearchParams({
          ...((search != null) && { search }),
          ...((priceRange[0] != null) && { [MIN_PRICE]: priceRange[0] }),
          ...((priceRange[1] != null) && { [MAX_PRICE]: priceRange[1] }),
          ...((minRate != null) && { [MIN_RATE]: minRate }),
          ...((maxRate != null) && { [MAX_RATE]: maxRate }),
          ...((category != null) && { category })
        }).toString()}`}
      >
        Filtrar precio
      </Link>
    </form>
  )
}
