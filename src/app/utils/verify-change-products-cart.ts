import { type TypeProductsCart } from '@/types'
import { getProduct } from '../firebase/products-actions'

export const verifyChangeProductsCart = async (products: TypeProductsCart[]) => {
  const newProducts: TypeProductsCart[] = await Promise.all(products.map(
    async (product) => {
      const productDB = await getProduct(product.id)
      const newProductCart = {
        ...productDB,
        quantity: product.quantity
      }
      return newProductCart
    }))
  return newProducts
}
