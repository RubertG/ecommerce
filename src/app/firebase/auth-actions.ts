import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, type User } from 'firebase/auth'
import { auth } from './DBcore'

export const logout = async () => {
  await signOut(auth)
}

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  await signInWithPopup(auth, provider)
}

export const authState = async (): Promise<User | null> => {
  return await new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (userCurrent) => {
      if (userCurrent != null) {
        const user = userCurrent
        resolve(user)
      }
      resolve(null)
      unsubscribe()
    })
  })
}
