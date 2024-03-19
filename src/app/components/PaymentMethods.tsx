'use client'

import { type TypeCart } from '@/types'
import { Wallet, initMercadoPago } from '@mercadopago/sdk-react'
import { useState, type FC, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'

interface Props {
  cart: TypeCart
}

export const PaymentMethods: FC<Props> = ({ cart }) => {
  const [preferenceId, setPreferenceId] = useState<string>()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  initMercadoPago(String(process.env.NEXT_PUBLIC_PUBLIC_KEY), {
    locale: 'es-CO'
  })

  useEffect(() => {
    void createPreference()
  }, [])

  const createPreference = async () => {
    try {
      setLoading(true)
      const items = cart.products.map(product => ({
        title: product.title,
        unit_price: product.price,
        quantity: product.quantity
      }))
      const res = await fetch(`${process.env.NEXT_PUBLIC_PREFIX_URL_FETCHS}/create_preference`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': `bearer-${process.env.NEXT_PUBLIC_API_KEY}`
        },
        body: JSON.stringify(items),
        next: {
          revalidate: 0
        }
      })
      const preference = await res.json()
      if (typeof preference.id === 'string') {
        setPreferenceId(preference.id as string)
      } else {
        throw new Error()
      }
    } catch (error) {
      setError('Error al crear la preferencia')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {
        preferenceId != null && (
          <Wallet initialization={{ preferenceId }} />
        )
      }
      {
        loading && (
          <footer
            className='my-3'
          >
            <Skeleton className='rounded-lg py-1 md:py-2 px-2 font-medium w-full h-12' />
            <div
              className='overflow-hidden w-40 m-auto'>
              <Skeleton className='rounded-lg px-2 font-medium' />
            </div>
          </footer>
        )
      }
      {
        error !== '' && <p>{error}</p>
      }
    </>
  )
}
