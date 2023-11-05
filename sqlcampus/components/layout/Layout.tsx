import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  return (
    <div>
      <Header title={title}></Header>
      {children}
      <Footer></Footer>
    </div>
  )
};

export default Layout;
