import { ReactNode } from 'react'
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'

type Props = {
  children: ReactNode
}

const App = ({ children }: Props) => {
  return (
    <div className="">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default App
