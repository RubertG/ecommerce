import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore'
import { db } from './DBcore'
import { type TypeProduct } from '@/types'

export const getProducts = async () => {
  const q = query(collection(db, 'products'))
  const querySnapshot = await getDocs(q)
  const products: TypeProduct[] = []
  querySnapshot.forEach((doc) => {
    const id = doc.id
    const product = {
      ...doc.data(), id
    }
    products.push(product as TypeProduct)
  })
  return products
}

export const getProduct = async (id: string) => {
  const docRef = doc(db, 'products', id)
  const querySnapshot = await getDoc(docRef)
  const product = {
    ...querySnapshot.data(), id: querySnapshot.id
  }
  return product as TypeProduct
}