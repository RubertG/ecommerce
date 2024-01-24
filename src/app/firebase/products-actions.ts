import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { db } from './DBcore'
import { type TypeIdProduct, type TypeProduct } from '@/types'

export const getProducts = async () => {
  const q = query(collection(db, 'products'))
  const querySnapshot = await getDocs(q)
  const products: TypeProduct[] = []
  querySnapshot.forEach((doc) => {
    const id = doc.id
    const product = {
      id, ...doc.data()
    }
    products.push(product as TypeProduct)
  })
  return products
}

export const getProduct = async (id: TypeIdProduct) => {
  const docRef = doc(db, 'products', id)
  const querySnapshot = await getDoc(docRef)
  if (!querySnapshot.exists()) throw new Error('Product not found')
  const product = {
    ...querySnapshot.data(), id: querySnapshot.id
  }
  return product as TypeProduct
}

export const getProductsByCategory = async (name: string) => {
  const q = query(collection(db, 'products'), where('category.name', '==', name))
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
