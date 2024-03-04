import { SkeletonTheme } from 'react-loading-skeleton'
import Nav from '../components/Nav'

interface Props {
  children: React.ReactNode
}

const layout = ({ children }: Props) => {
  return (
    <>
      <Nav />
      <SkeletonTheme baseColor="#c2c2c2" highlightColor="#9b9b9b">
        {children}
      </SkeletonTheme>
    </>
  )
}

export default layout
