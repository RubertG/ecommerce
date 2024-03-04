import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CardProductSkeleton = () => {
  return (
    <article
      className='block border md:border-2 shadow-gray-custom border-gray-custom p-2 rounded-lg w-44 md:w-60 bg-white-custom'
    >
      <Skeleton
        className='w-full aspect-square rounded-lg'
      />
      <h2
        className='mt-2 text-sm md:text-base text-center font-medium w-full h-5'
      ><Skeleton className='w-full h-5' /></h2>
      <footer
        className='flex items-center mt-2 gap-2 text-sm sm:text-base'
      >
        <Skeleton className='rounded-lg py-1 md:py-2 px-2 font-medium' width={70} />
        <Skeleton className='rounded-lg py-1 md:py-2 px-2 font-medium' width={70} />
      </footer>
    </article>
  )
}

export default CardProductSkeleton
