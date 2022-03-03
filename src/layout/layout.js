import React, { useEffect } from 'react'
import { Helmet } from "react-helmet";
import Footer from './footer';
import "../style/global.scss"
import ImgLogo from '../assets/icons/logo_black.svg'
import { Link } from 'react-router-dom';
const Layout = ({
  children,
  title,
  selectLang,
  openLang,
  page = "home"
}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='flex flex-col items-center min-h-screen justify-between relative overflow-x-hidden text-app-black-100'>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <main className="w-full flex-1 flex justify-center relative container text-app-black">
        <Link to="/">
          <img src={ImgLogo} alt="logo" className="absolute left-12 lg:left-20 xl:left-40 top-6 lg:top-10 z-50" />
        </Link>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout