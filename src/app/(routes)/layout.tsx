import Nav from '../components/Nav'

interface Props {
  children: React.ReactNode
}

const layout = ({ children }: Props) => {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}

export default layout
