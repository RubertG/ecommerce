import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, type User } from 'firebase/auth'
import { auth } from './DBcore'

export const logout = async () => {
  await signOut(auth)
}

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  await signInWithPopup(auth, provider)
}

type Props = (user: User | null) => void

export const authState = (callback: Props) => {
  onAuthStateChanged(auth, callback)
}
