'use client'
import { useEffect, useReducer, useState } from 'react'
import { reducer } from '../reducer/reducer'
import { type TypeSearchParams, type TypeProduct, type TypeStateReducer } from '@/types'

const initialState: TypeStateReducer = {
  filterProducts: null,
  products: null
}

interface Params {
  searchParams: TypeSearchParams
}

export const useProductsReducer = ({
  searchParams
}: Params) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    void getProducts()
  }, [])

  useEffect(() => {
    dispatch({
      type: 'FILTER-BY-SEARCHPARAMS',
      payload: searchParams
    })
  }, [searchParams])

  const getProducts = async () => {
    setLoading(true)
    const data = await fetch('api/products')
    const products = await data.json() as TypeProduct[]
    dispatch({ type: 'SET', payload: { products, searchParams } })
    setLoading(false)
  }

  return {
    state,
    loading,
    dispatch
  }
}
