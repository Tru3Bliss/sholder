import React from 'react'
import { Helmet } from "react-helmet";
import Footer from './footer';
import "../style/global.scss"
const Layout = ({
  children,
  title,
  selectLang,
  openLang,
  page = "home"
}) => {
  return (
    <div className='flex flex-col items-center min-h-screen justify-between relative overflow-x-hidden text-app-black-100'>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <main className="w-full flex-1 flex justify-center ">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout