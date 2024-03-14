'use client'
import { useEffect, useReducer, useState } from 'react'
import { reducerProducts } from '../reducer/reducerProducts'
import { type TypeSearchParams, type TypeProduct, type TypeStateReducerProducts } from '@/types'

const initialState: TypeStateReducerProducts = {
  filterProducts: null,
  products: null
}

interface Params {
  searchParams: TypeSearchParams
}

export const useProductsReducer = ({
  searchParams
}: Params) => {
  const [state, dispatch] = useReducer(reducerProducts, initialState)
  const [loading, setLoading] = useState(true)

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
    const data = await fetch('api/products', { next: { revalidate: 0 } })
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
