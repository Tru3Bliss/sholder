import React from 'react'
import Layout from '../../layout/layout'
import Img6 from '../../assets/images/img_6.png'
import Img7 from '../../assets/images/img_7.png'
import ImgUs from '../../assets/images/img_us.png'
import ImgAvatar from '../../assets/images/img_avatar.png'
import ImgSparks from "../../assets/images/img_sparks.svg"
import { PrimaryButton } from '../../components/button'

const AboutPage = () => {
  return (
    <Layout>
      <div className='flex flex-col gap-8 bg-app-primary-back w-full pt-24 tiny:pt-0'>
        <div className='flex w-full gap-8.5 flex-col md:flex-row-reverse'>
          <div className='w-full md:w-1/3 xl:w-1/2 justify-end items-start flex'>
            <img src={Img6} alt="img 6" className='md:w-full tiny:w-5/6 sm:w-2/3' />
          </div>
          <div className='mx-4 tiny:mx-0 rounded-tl-3xl tiny:rounded-tl-none rounded-tr-3xl tiny:rounded-tr-normal tiny:w-5/6 sm:w-2/3 xl:w-1/2 flex items-center justify-center py-12 tiny:py-32 bg-white   transform -translate-y-22 md:-translate-y-0 md:bg-transparent'>
            <div className='flex flex-col w-3/4 xl:w-1/2'>
              <div className='flex gap-4'>
                <h2 className='text-6xl font-bold font-larken'>About</h2>
                <img src={ImgUs} alt="us" />
              </div>
              <p className='mt-6 xl:mt-14 font-tt'>We are a community of social researchers, clinical scientists, caregivers, humanitarians and pioneers, on a mission to empower all people to observe, heal, and retell their life stories in ways that lift themselves and others.
                At Sholder, we believe all the answers we seek are already within. It sometimes takes the right person with the right questions to help us access our best inner wisdom and see things from a fresh perspective.
                Sholder offers a whole new way to think about and approach mental well-being.</p>
            </div>
          </div>
        </div>
        <div className='flex w-full gap-8.5 flex-col lg:flex-row items-end xl:items-center'>
          <div className='w-full lg:w-1/3 xl:w-1/2 justify-start md:justify-center lg:justify-end md:items-center lg:items-start flex relative'>
            <img src={Img7} alt="img 7" className='md:w-1/2 tiny:w-5/6 sm:w-2/3 lg:w-full' />
            <div className='rounded-xl tiny:bg-white lg:bg-transparent text-white tiny:text-app-black lg:text-white absolute md:relative lg:absolute w-11/12 sm:w-2/3 lg:w-11/12 xl:w-1/2 top-1/2 md:top-0 lg:top-1/2 left-1/2 md:left-0 lg:left-1/2 transform  -translate-x-1/2 md:-translate-x-10 lg:-translate-x-1/2 -translate-y-1/2 md:translate-y-0 lg:-translate-y-1/2 p-4 tiny:shadow-xl lg:shadow-none'>
              <p className='font-tt font-bold text-sm xl:text-lg xl:leading-8'>“With adequate thought in designing the program of care, training, and supervision, anyone in the community with a calling for mental health care can become an effective mental health care provider. To me, this offers the most transformative opportunity to reimagine mental health care around the world.” </p>
              <div className='flex gap-2 mt-4'>
                <img src={ImgAvatar} alt="avatar" />
                <div className='flex flex-col justify-center'>
                  <p className='font-semibold'>Dr. Vikram Patel</p>
                  <p className='italic'>Professor of Global Health,
                    Harvard Medical School, 2020</p>
                </div>
              </div>
            </div>
          </div>
          <div className='mx-4 tiny:mx-0 rounded-tl-3xl tiny:rounded-tr-none rounded-tr-3xl tiny:rounded-tl-normal tiny:w-5/6 sm:w-2/3 xl:w-1/2 flex items-center justify-center bg-white   transform -translate-y-22 md:-translate-y-0 md:bg-transparent py-12'>
            <div className='flex flex-col w-3/4 xl:w-1/2 items-center sm:items-end gap-8'>
              <img src={ImgSparks} alt="spark"/>
              <p className='text-4xl font-larken text-center sm:text-right'>Join us in our movement to restore and elevate human connection.</p>
              <PrimaryButton className="w-max">Get early access</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}


export default AboutPage