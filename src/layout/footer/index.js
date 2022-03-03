import React from "react";
import { Link, useNavigate } from "react-router-dom";

import ImgS from '../../assets/images/img_s.png'
import ImgLogo from '../../assets/icons/logo.svg'
import { socialLinks } from "../../utils/data";
import "./footer.scss"


const Footer = () => {
  return (
    <footer className="container footer w-full flex text-white flex-col justify-center items-center gap-4 font-larken">
      <div className="flex items-center justify-center gap-2 py-2">
        <Link to={"/about"}>
          <button type="button">
            About Us
          </button>
        </Link>
        <p>
          ·
        </p>
        <Link to={"/faq"}>
          <button type="button">
            FAQs
          </button>
        </Link>
        <p>
          |
        </p>
        <p>hello@sholder.com</p>
      </div>
      <div className="relative mx-auto">
        <img src={ImgS} alt="s-img" className="" />
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-6 flex flex-col items-center justify-center w-full px-4">
          <p className="text-center sm:whitespace-nowrap text-2xl ">Stay connected to the movement</p>
          <div className="flex gap-2">
            {
              socialLinks.map((data, idx) => (
                <div key={idx}>
                  <a href={data.link} target="_blank" rel="noreferrer">
                    <img src={data.icon} alt={data.name} />
                  </a>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <img src={ImgLogo} alt="logo" className="w-max" />
      <p className="uppercase text-sm">@ 2022 sholder</p>
    </footer>
  )
}

export default Footer