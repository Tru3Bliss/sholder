import React from 'react'
import { PrimaryButton } from '../../components/button'
import Layout from '../../layout/layout'
import ImgQuestion from '../../assets/images/img_question.png'
import ImgSparks from "../../assets/images/img_sparks.svg"
const FaqPage = () => {
  return (
    <Layout>
      <div className='flex flex-col bg-app-primary-back w-full'>
        <div className='flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 mt-11 gap-10 pb-12'>
          <img src={ImgSparks} alt='spark' className='mx-auto'/>
          <div className='flex items-start gap-4 flex-col lg:flex-row'>
            <h2 className='text-6xl font-larken font-bold'>
              Frequently Asked
            </h2>
            <img src={ImgQuestion} alt="question" />
          </div>
          <div className='flex flex-col gap-4 font-tt'>
            <p className='font-bold text-xl'>
              How is this different from online therapy or coaching?</p>
            <p className=''>
              The word Sholder is derived from the term “spaceholder,” which refers to a person who brings a rare and non-interfering presence to help you process emotions, thoughts and experiences without judgment and labels. Where Sholdering and therapy or coaching are similar is in the training, although the methods are quite different.
            </p>
          </div>
          <div className='flex flex-col gap-4 font-tt'>
            <p className='font-bold text-xl'>How are Sholders trained?</p>
            <p className=''>Our staff of world-renowned psychologists, shamans and social researchers have developed a proprietary method to best train and certify individuals in becoming Sholders.  This unique body of knowledge has been drawn from the best practices across several modalities of healing.  By design, our collective of Sholders reflect the whole of human experience to allow Sharers to access diverse life wisdom and perspectives for their personal benefit.
            </p>
          </div>
          <div className='flex flex-col gap-4 font-tt'>
            <p className='font-bold text-xl'>What kind of Commitment is required?</p>
            <p className=''>You decide.  We offer unique pathways for personal evolution that can be utilized in short or long term timeframes.  You may need a quick touch base to tackle a specific issue and be on your way.  The cadence and convenience are key values for engaging with Sholder, on on-demand platform built solely around your needs.
            </p>
          </div>
          <div className='flex flex-col gap-4 font-tt'>
            <p className='font-bold text-xl'>What about confidentiality?</p>
            <p className=''>Trust is critical to ensuring your comfort and safety.  As such, your shoulder will only receive your first name and is trained to only discuss topics that you’re comfortable sharing and to keep confidential and personal or sensitive information.  In addition to you deciding what level of personal information to share, we use only encrypted communications technologies and offer audio-only options for those you want added anonymity.
            </p>
          </div>
          <div className='flex flex-col gap-4 font-tt'>
            <p className='font-bold text-xl'>Do you take insurance?</p>
            <p className=''>No. Our pricing model reflects the most cost-effective approach to regenerative economies where our Sholdes are compensated fairly for their time and you, the Sharer are provided the most bang for your buck.  We do have referral codes and other programs in place to help more vulnerable populations access our platform at free or near free pricing.
            </p>
          </div>
        </div>
        <div className="w-full py-8 bg-gradient-to-b from-app-yellow-light to-app-yellow-dark flex flex-col sm:flex-row items-center justify-center gap-8 px-6">
          <p className="text-white text-xl md:text-2xl text-center">Join us in our movement to restore and elevate human connection.</p>
          <PrimaryButton className="flex-shrink-0 text-lg">Get early access</PrimaryButton>
        </div>
      </div>
    </Layout>
  )
}

export default FaqPage