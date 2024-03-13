import Searcher from '@/app/components/Searcher'

interface Props {
  children: React.ReactNode
}

const ProductLayout = ({ children }: Props) => {
  return (
    <>
      <header
        className='flex flex-col gap-2 items-center justify-center mt-[4.5rem]'
      >
        <Searcher />
      </header>
      {children}
    </>
  )
}

export default ProductLayout
