'use client'

import { MAX_PRICE, MAX_RATE, MIN_PRICE, MIN_RATE } from '@/const'
import { type TypeSearchParams } from '@/types'
import Link from 'next/link'
import { useEffect, useState } from 'react'

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

  useEffect(() => {
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
