'use client'
import { MAX_PRICE, MAX_RATE, MIN_PRICE, MIN_RATE } from '@/const'
import { type TypeSearchParams } from '@/types'
import Link from 'next/link'
import { useState } from 'react'

interface Props {
  searchParams: TypeSearchParams
}

export const FilterByPrice = ({
  searchParams: {
    search,
    [MAX_PRICE]: maxPrice,
    [MIN_PRICE]: minPrice,
    [MAX_RATE]: maxRate,
    [MIN_RATE]: minRate
  }
}: Props) => {
  const [priceRange, setPriceRange] = useState<[string | null, string | null]>([null, null])

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
    <form>
      <label>
        <p>Min</p>
        <input
          type="number"
          name={MIN_PRICE}
          placeholder="10"
          min={0}
          defaultValue={minPrice ?? ''}
          className='text-black'
          onChange={(e) => { handleChange(e) }} />
      </label>
      <label>
        <p>Max</p>
        <input
          type="number"
          name={MAX_PRICE}
          placeholder="1000"
          min={0}
          defaultValue={maxPrice ?? ''}
          className='text-black'
          onChange={(e) => { handleChange(e) }} />
      </label>
      <Link
        href={`?${new URLSearchParams({
          ...((search != null) && { search }),
          ...((priceRange[0] != null) && { [MIN_PRICE]: priceRange[0] }),
          ...((priceRange[1] != null) && { [MAX_PRICE]: priceRange[1] }),
          ...((minRate != null) && { minRate }),
          ...((maxRate != null) && { maxRate })
        }).toString()}`}
      >
        Filter by price
      </Link>
    </form>
  )
}

export const FilterByRate = ({
  searchParams: {
    search,
    [MAX_PRICE]: maxPrice,
    [MIN_PRICE]: minPrice,
    [MAX_RATE]: maxRate,
    [MIN_RATE]: minRate
  }
}: Props) => {
  const [rateRange, setRateRange] = useState<[string | null, string | null]>([null, null])

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
    <form>
      <label>
        <p>Min</p>
        <input
          type="number"
          name={MIN_RATE}
          placeholder="0"
          min={0}
          max={5}
          defaultValue={minRate ?? ''}
          className='text-black'
          onChange={(e) => { handleChange(e) }} />
      </label>
      <label>
        <p>Max</p>
        <input
          type="number"
          name={MAX_RATE}
          placeholder="5"
          min={0}
          max={5}
          defaultValue={maxRate ?? ''}
          className='text-black'
          onChange={(e) => { handleChange(e) }} />
      </label>
      <Link
        href={`?${new URLSearchParams({
          ...((search != null) && { search }),
          ...((rateRange[0] != null) && { [MIN_RATE]: rateRange[0] }),
          ...((rateRange[1] != null) && { [MAX_RATE]: rateRange[1] }),
          ...((minPrice != null) && { minPrice }),
          ...((maxPrice != null) && { maxPrice })
        }).toString()}`}
      >
        Filter by rate
      </Link>
    </form>
  )
}
