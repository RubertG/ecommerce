import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, type User } from 'firebase/auth'
import { auth } from './DBcore'

export const logout = async () => {
  await signOut(auth)
}

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  await signInWithPopup(auth, provider)
}

interface Props {
  setUser: (user: User | null) => void
  setLoading: (loading: boolean) => void
}

export const authState = ({ setUser, setLoading }: Props) => {
  onAuthStateChanged(auth, (userCurrent) => {
    setUser(userCurrent)
    setLoading(false)
  })
}
