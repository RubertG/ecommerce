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
          >Sobre nosotros</h2>
          <p
            className='text-gray-800 leading-tight pb-1'
          >
            <strong>Luco's store</strong> ha sido creada con pasión por lo extraordinario. Somos una empresa con 10 años de experiencia, dedicada a servir a cada cliente de la mejor manera posible. Sin embargo, es esencial aclarar que somos una empresa <strong>FALSA</strong>.
          </p>
        </article>
        <article
          className='p-4 bg-white-custom rounded-2xl border border-gray-custom shadow-card-custom lg:col-span-2'
        >
          <h2
            className={`${quicksand.className} text-2xl font-bold text-dodger-blue-800 text-center mb-3`}
          >Nuestros productos</h2>
          <p
            className='text-gray-800 leading-tight pb-1'
          >
            Embárcate en una odisea de compras en <strong>Luco's store</strong>, donde la electrónica de vanguardia, las joyas exquisitas y la moda para hombres y mujeres redefinen tu estilo con sofisticación y elegancia.
          </p>
        </article>
        <article
          className='p-4 bg-white-custom rounded-2xl border border-gray-custom shadow-card-custom'
        >
          <h2
            className={`${quicksand.className} text-2xl font-bold text-dodger-blue-800 text-center mb-3`}
          >Políticas</h2>
          <p
            className='text-gray-800 leading-tight pb-1'
          >
            <strong>Transparencia, calidad y satisfacción:</strong> Nuestras políticas garantizan una experiencia confiable y excepcional para ti.
          </p>
        </article>
        <article
          className='p-4 bg-gradient-red-light rounded-2xl border border-red-200 shadow-card-custom'
        >
          <h2
            className={`${quicksand.className} text-2xl font-bold text-bright-red-800 text-center mb-3`}
          >Importante</h2>
          <p
            className='text-gray-800 leading-tight pb-1'
          >
            <strong>Luco's store</strong> es una tienda <strong>COMPLETAMENTE FALSA</strong>, creada con propósitos de aprendizaje.
          </p>
        </article>
      </section>
    </>
  )
}

export default Page
