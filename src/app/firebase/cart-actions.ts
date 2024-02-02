import { type TypeIdUser, type TypeCartWithId, type TypeIdCart } from '@/types'
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore'
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

export const getCart = async (id: TypeIdUser) => {
  const q = query(collection(db, 'carts'), where('id_user', '==', id))
  const querySnapshot = await getDocs(q)
  const carts: TypeCartWithId[] = []
  querySnapshot.forEach((doc) => {
    const id = doc.id
    const cart = {
      ...doc.data(), id
    }
    carts.push(cart as TypeCartWithId)
  })
  return carts[0]
}

export const addCart = async (idCart: TypeIdCart, cart: Omit<TypeCartWithId, 'id'>) => {
  const docRef = doc(db, 'carts', idCart)
  await setDoc(docRef, cart)
  return docRef
}
