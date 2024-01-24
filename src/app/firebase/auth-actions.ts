import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from './DBcore'

export const logout = async () => { await signOut(auth) }

export const singInWithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  return await signInWithPopup(auth, provider)
}
