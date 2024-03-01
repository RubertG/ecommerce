/* eslint-disable react/no-unescaped-entities */
'use client'

import { useRouter } from 'next/navigation'
import { ExitIcon, ShoppingCartIcon } from './Icons'
import { customToast } from '../utils/toasts'
import { useAuthContext } from '../hooks/useAuthContext'
import Link from 'next/link'
import { quicksand } from '../fonts/fonts'

interface Props {
  dark?: boolean
}

function Nav ({ dark = false }: Props) {
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
    <nav
      className={`${dark ? '' : 'bg-principal-white'} px-5 py-4 fixed top-0 left-0 w-full z-10`}
    >
      <div
        className='flex flex-row justify-between items-center max-w-5xl m-auto'
      >
        <Link
          href='/'
          className={`${quicksand.className} ${dark ? 'text-Lochmara-50' : 'text-Lochmara-950'} text-2xl font-bold hover:text-blue-500 transition-colors`}
        >
          Luco's store
        </Link>
        <ul
          className='flex gap-4 items-center justify-center'
        >
          <li
            className='w-7 h-7'
          >
            <button
              onClick={handleClickCart}
            >
              <ShoppingCartIcon className={`${dark ? 'fill-Lochmara-50' : 'fill-placeholder-gray'} block fill-Lochmara-100 w-full hover:fill-green-500 transition`} />
            </button>
          </li>
          {
            user != null
              ? (
                <>
                  <li
                    className='mx-2 w-8 h-8 bg-green-950 grid place-content-center rounded-full text-white-custom select-none'
                  >
                    <p>{user.displayName?.[0]}</p>
                  </li>
                  <li>
                    <button
                      className='py-[0.125rem] px-4 bg-gradient-red font-medium rounded-lg border-bright-red-800 text-Lochmara-50 border-2 hover:shadow-gray-custom transition-shadow flex justify-center items-center gap-1'
                      onClick={() => { void signOut() }}
                    >
                      <p className='text-nowrap'>Log out</p>
                      <ExitIcon className='fill-Lochmara-50 w-5 h-5' />
                    </button>
                  </li>
                </>
                )
              : (
                <>
                  <li>
                    <button
                      className='ml-2 py-[0.125rem] px-4 bg-gradient-blue-light font-medium rounded-lg border-Lochmara-200 border-2 text-Lochmara-600 hover:shadow-gray-custom transition-shadow'
                      onClick={() => { void signIn() }}
                    >
                      Sign in
                    </button>
                  </li>
                  <li>
                    <button
                      className='py-[0.125rem] px-4 bg-gradient-blue font-medium rounded-lg border-Lochmara-600 text-Lochmara-50 border-2 hover:shadow-gray-custom transition-shadow'
                      onClick={() => { void signIn() }}
                    >
                      Log in
                    </button>
                  </li>
                </>
                )
          }
        </ul>
      </div>
    </nav>
  )
}

export default Nav
