/* eslint-disable react/no-unescaped-entities */
'use client'

import { useRouter } from 'next/navigation'
import { Button } from './Button'
import { ExitIcon, ShoppingCartIcon } from './Icons'
import { customToast } from '../utils/toasts'
import { useAuthContext } from '../hooks/useAuthContext'

function Nav () {
  const { signIn, signOut, user } = useAuthContext()
  const router = useRouter()

  const handleClickCart = () => {
    if (user != null) {
      router.push(`/cart/${user.uid}`)
    } else {
      customToast({ text: 'You must log in' })
    }
  }

  return (
    <nav>
      <header>
        Luco's store
      </header>
      <ul>
        <li>
          <Button
            onClick={handleClickCart}
          >
            <ShoppingCartIcon className='block fill-slate-500 w-10' />
          </Button>
        </li>
        {
          user != null
            ? (
              <>
                <li>
                  <p>{user.displayName?.[0]}</p>
                </li>
                <li>
                  <Button
                    className='flex flex-row gap-1 items-center'
                    onClick={() => { void signOut() }}
                  >
                    Log out
                    <ExitIcon className='fill-slate-600' />
                  </Button>
                </li>
              </>
              )
            : (
              <>
                <li>
                  <Button
                    onClick={() => { void signIn() }}
                  >
                    Sign in
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => { void signIn() }}
                  >
                    Log in
                  </Button>
                </li>
              </>
              )
        }
      </ul>
    </nav>
  )
}

export default Nav
