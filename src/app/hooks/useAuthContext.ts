import { useContext } from 'react'
import { authContext } from '../context/authContext'

export const useAuthContext = () => {
  const authContextAux = useContext(authContext)
  if (authContextAux == null) {
    throw new Error('useAuthContext must be used within an AuthContextProvider')
  }
  return authContextAux
}
