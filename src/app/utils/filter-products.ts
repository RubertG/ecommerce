import { MAX_PRICE, MAX_RATE, MIN_PRICE, MIN_RATE } from '@/const'
import { type TypeProduct, type TypeSearchParams } from '@/types'

export const filterProducts = (
  products: TypeProduct[],
  {
    search,
    [MAX_PRICE]: maxPrice,
    [MIN_PRICE]: minPrice,
    [MAX_RATE]: maxRate,
    [MIN_RATE]: minRate
  }: TypeSearchParams
) => {
  const filteredProducts = products.filter((product) => {
    if (search != null && !product.title.toLowerCase().includes(search.toLowerCase())) {
      return false
    }

    if (maxPrice != null && product.price > parseFloat(maxPrice)) {
      return false
    }

    if (minPrice != null && product.price < parseFloat(minPrice)) {
      return false
    }

    if (maxRate != null && product.rate > parseFloat(maxRate)) {
      return false
    }

    if (minRate != null && product.rate < parseFloat(minRate)) {
      return false
    }

    return true
  })

  return filteredProducts
}
