import Skeleton from 'react-loading-skeleton'

export const ProductDetailsSkeleton = () => {
  return (
    <section
      className='grid md:grid-cols-[45%,55%] md:grid-rows-1 gap-2 md:gap-3 px-3 xl:px-0 my-10 max-w-5xl m-auto'
    >
      <picture
        className='p-2 pt-1 rounded-lg bg-white-custom border-2 border-gray-custom shadow-gray-custom w-full aspect-square'
      >
        <Skeleton
          className='w-full h-full object-cover rounded-lg'
        />
      </picture>
      <article>
        <main
          className='rounded-lg bg-white-custom border-2 border-gray-custom shadow-gray-custom'
        >
          <h2
            className='font-bold text-lg lg:text-2xl text-center text-Lochmara-950 border-b-2 border-b-gray-custom px-2 py-2'
          ><Skeleton className='py-2'/></h2>
          <p
            className='px-2 py-2 text-gray-900'
          ><Skeleton className='py-2'/></p>
        </main>
        <footer
          className='flex mt-2 gap-1 md:gap-2'
        >
          <Skeleton
            className='border py-2 px-2 font-medium md:text-lg h-full'
            width={60}
          ></Skeleton>
          <Skeleton
            className='border rounded-lg py-2 px-2 font-medium md:text-lg h-full'
            width={50}
          ></Skeleton>
          <div
            className='grid grid-cols-2 w-full gap-1 md:gap-2'
          >
            <button
              className='py-[0.125rem] px-4 bg-gradient-blue-light text-sm sm:text-base font-medium rounded-lg border-Lochmara-200 border-2 text-Lochmara-600 hover:shadow-gray-custom transition-shadow'
              disabled
            >
              Add cart
            </button>
            <button
              className='py-[0.125rem] px-4 bg-gradient-blue text-sm sm:text-base font-medium rounded-lg border-Lochmara-600 text-Lochmara-50 border-2 hover:shadow-blue-custom transition-shadow '
              disabled
            >
              Buy
            </button>
          </div>
        </footer>
      </article>
    </section>
  )
}
