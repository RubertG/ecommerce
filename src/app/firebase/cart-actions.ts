import { type TypeCartWithId, type TypeIdCart } from '@/types'
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore'
import { db } from './DBcore'

export const getCarts = async () => {
  const c = collection(db, 'carts')
  const querySnapshot = await getDocs(c)
  const carts: TypeCartWithId[] = []
  querySnapshot.forEach((doc) => {
    const cart = {
      ...doc.data(),
      id: doc.id
    }
    carts.push(cart as TypeCartWithId)
  })
  return carts
}

export const getCart = async (id: TypeIdCart) => {
  const docRef = doc(db, 'carts', id)
  const querySnapshot = await getDoc(docRef)
  const cart = {
    ...querySnapshot.data(), id: querySnapshot.id
  }
  return cart as TypeCartWithId
}

export const addCart = async (idCart: TypeIdCart, cart: Omit<TypeCartWithId, 'id'>) => {
  const docRef = doc(db, 'carts', idCart)
  await setDoc(docRef, cart)
  return docRef
}
