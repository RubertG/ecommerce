import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from './DBcore'

export const logout = async () => { await signOut(auth) }

export const singInWithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  await signInWithPopup(auth, provider)
}

export const authState = async () => {
  return await new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (userCurrent) => {
      if (userCurrent != null) {
        const user = userCurrent
        resolve(user)
      } else {
        resolve(null)
      }
      unsubscribe()
    })
  })
}
