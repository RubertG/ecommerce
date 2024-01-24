import { type TypeCart, type TypeIdCart } from '@/types'
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore'
import { db } from './DBcore'

export const getCarts = async () => {
  const c = collection(db, 'carts')
  const querySnapshot = await getDocs(c)
  const carts: TypeCart[] = []
  querySnapshot.forEach((doc) => {
    const cart = {
      ...doc.data(),
      id: doc.id
    }
    carts.push(cart as TypeCart)
  })
  return carts
}

export const getCart = async (id: TypeIdCart) => {
  const docRef = doc(db, 'carts', id)
  const querySnapshot = await getDoc(docRef)
  const cart = {
    ...querySnapshot.data(), id: querySnapshot.id
  }
  return cart as TypeCart
}

export const addProductsCart = async (idCart: TypeIdCart, cart: Omit<TypeCart, 'id'>) => {
  try {
    const docRef = doc(db, 'carts', idCart)
    await setDoc(docRef, cart)
  } catch (error) {
    return error
  }
}
