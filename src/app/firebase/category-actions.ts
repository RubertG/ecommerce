import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from './DBcore'
import { type TypeCategory, type TypeCategoryWithId } from '@/types'

export const getCategories = async () => {
  const q = query(collection(db, 'categories'))
  const querySnapshot = await getDocs(q)
  const categories: TypeCategoryWithId[] = []
  querySnapshot.forEach((doc) => {
    const id = doc.id
    const category = {
      id, ...doc.data()
    }
    categories.push(category as TypeCategoryWithId)
  })
  return categories
}

export const getCategory = async (name: string) => {
  const q = query(collection(db, 'categories'), where('name', '==', name))
  const querySnapshot = await getDocs(q)
  const categories: TypeCategory[] = []
  querySnapshot.forEach((doc) => {
    const category = doc.data()
    categories.push(category as TypeCategory)
  })
  return categories[0]
}
