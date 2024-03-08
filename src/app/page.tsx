/* eslint-disable react/no-unescaped-entities */

import Nav from './components/Nav'
import Searcher from './components/Searcher'
import { quicksand } from './fonts/fonts'

async function Page () {
  return (
    <>
      <Nav dark={true} />
      <header
        className='w-full h-[43rem] sm:h-auto sm:min-h-dvh flex items-end justify-center'
      >
        <img
          src='/joyas.webp'
          alt="women's clothing"
          loading='lazy'
          className='absolute object-cover object-center h-full w-full bg-slate-50'
        />
        <div
          className='absolute object-cover object-center h-full w-full bg-gradient-gray'
        ></div>
        <Searcher classNameContainer='z-10 mb-32 animate-enter' />
      </header>
      <section className='max-w-4xl m-auto my-20 px-3 lg:px-0 grid md:grid-cols-2 lg:grid-cols-[35%,32.5%,32.5%] lg:grid-rows-2 gap-3'>
        <article
          className='p-4 bg-white-custom rounded-2xl border border-gray-custom shadow-card-custom lg:col-span-1 lg:row-span-2'
        >
          <h2
            className={`${quicksand.className} text-2xl font-bold text-dodger-blue-800 text-center mb-3`}
          >About us</h2>
          <p
            className='text-gray-800 leading-tight pb-1'
          >
            Luco's Store has been crafted with a passion for the extraordinary. We are a company with 10 years of experience, dedicated to serving each customer in the best possible way. However, it's essential to clarify that we are a FAKE company
          </p>
        </article>
        <article
          className='p-4 bg-white-custom rounded-2xl border border-gray-custom shadow-card-custom lg:col-span-2'
        >
          <h2
            className={`${quicksand.className} text-2xl font-bold text-dodger-blue-800 text-center mb-3`}
          >Our products</h2>
          <p
            className='text-gray-800 leading-tight pb-1'
          >
            Embark on a shopping odyssey at Rugo's Store, where cutting-edge electronics, exquisite jewelry, and fashionable men's and women's clothing redefine your style with sophistication and flair.
          </p>
        </article>
        <article
          className='p-4 bg-white-custom rounded-2xl border border-gray-custom shadow-card-custom'
        >
          <h2
            className={`${quicksand.className} text-2xl font-bold text-dodger-blue-800 text-center mb-3`}
          >Policies</h2>
          <p
            className='text-gray-800 leading-tight pb-1'
          >
            <strong>Transparency, quality, and satisfaction:</strong> Our policies ensure your reliable and exceptional experience.
          </p>
        </article>
        <article
          className='p-4 bg-gradient-red-light rounded-2xl border border-red-200 shadow-card-custom'
        >
          <h2
            className={`${quicksand.className} text-2xl font-bold text-bright-red-800 text-center mb-3`}
          >Important</h2>
          <p
            className='text-gray-800 leading-tight pb-1'
          >
            This store is <strong>COMPLETELY FAKE</strong>, created for learning purposes.
          </p>
        </article>
      </section>
    </>
  )
}

export default Page
