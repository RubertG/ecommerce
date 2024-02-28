import { MoreProducts } from '@/app/components/MoreProducts'
import { type TypeProduct } from '@/types'
import { Suspense, type FC } from 'react'

const getData = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_PREFIX_URL_FETCHS}/products/${id}`)
  const data = await res.json()
  return data as TypeProduct
}

interface Props {
  params: {
    id: string
  }
}

const ProductPage: FC<Props> = async ({ params: { id } }) => {
  const product = await getData(id)

  return (
    <div>
      {
        product.price
      }
      <Suspense fallback={<p>Loading...</p>}>
        <MoreProducts category={product.category.name} />
      </Suspense>
    </div>
  )
}

export default ProductPage
