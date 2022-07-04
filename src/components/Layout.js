import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar/NavBar'

const Layout = ({children}) => {
  return (
    <div>
        <NavBar />
        {children}
        <Footer />
    </div>
  )
}

export default Layout