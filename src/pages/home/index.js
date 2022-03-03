import React from "react";
import Layout from "../../layout/layout";
import Img2 from "../../assets/images/img_2.png"
import Img3 from "../../assets/images/img_3.png"
import Img4 from "../../assets/images/img_4.png"
import Img5 from "../../assets/images/img_5.png"
import ImgSparks from "../../assets/images/img_sparks.svg"
import ImgYou from '../../assets/images/img_you.png'
import ImgPeople from '../../assets/images/img_people.png'
import ImgMatch from '../../assets/icons/ico_match.svg'
import ImgConfidential from '../../assets/icons/ico_confidential.svg'
import ImgSupport from '../../assets/icons/ico_support.svg'
import ImgCheck from '../../assets/icons/ico_check.svg'
import { PrimaryButton } from "../../components/button";

const HomePage = (props) => {

  return (
    <Layout>
      <div className="home-container bg-app-primary-back">
        <div className="relative flex flex-col lg:flex-row-reverse items-end lg:items-start gap-8">
          <div className="w-full lg:w-1/2 xl:w-1/2 justify-start flex items-start sm:pl-8">
            <video muted loop autoPlay className="h-3/5 rounded-bl-normal xl:rounded-bl-large rounded-xl sm:rounded-t-none sm:rounded-r-none mt-24 sm:mt-0" poster="black">
              <source src="https://s3.amazonaws.com/appforest_uf/f1645987117077x359794633720515800/Sholder%20Website%20Final.m4v" type="video/mp4" />
            </video>
          </div>
          <div className="bg-white sm:bg-transparent rounded-t-2xl sm:rounded-none shadow-lg sm:shadow-none transform sm:transform-none mx-4 sm:mx-0 -translate-y-16 lg:w-1/2 xl:w-1/2 flex flex-col items-start justify-center py-6 h-full px-8 xl:pr-32 xl:pl-40 pb-37 pt-32">
            <div className="flex-1 items-start justify-center flex flex-col">
              <div className="font-larken text-4xl lg:text-7xl flex-col mt-8 wxl:mt-16">
                <p>
                  Learn on us.
                </p>
                <div className="flex items-start">
                  <p className="whitespace-nowrap">
                    Tap into
                  </p>
                  <img src={ImgYou} alt="you" className="mt-3 lg:mt-8 lg:w-auto w-28" />
                </div>
              </div>
              <p className="text-xl font-tt">
                We are developing the world’s first awakened platform designed to facilitate increasing personal power by finding the answers, not outside yourself, but within. <strong>Join us in the movement that will change the course of humanity.</strong>
              </p>
              <PrimaryButton className="mt-8">
                Get early access
              </PrimaryButton>
            </div>
          </div>
          <img src={ImgSparks} alt="spark" className="absolute left-1/2 top-20 md:top-10 lg:block hidden" />
        </div>
        <div className="relative flex flex-col lg:flex-row items-end 2xl:items-center gap-8 lg:items-end xl:items-center">
          <div className="w-full lg:w-1/3 xl:w-1/2 justify-between xl:justify-center flex items-center relative pr-8">
            <img src={Img2} alt="img-1" className="sm:w-1/2 lg:w-full h-full w-full" />
            <div className=" hidden sm:block lg:hidden absolute w-1/2 left-1/2 top-1/2 bg-white xl:bg-transparent h-4/5 -translate-y-1/2 -translate-x-10 shadow-xl rounded-l-2xl px-6">
              <p className="text-2xl tiny:text-3xl sm:text-xl 2xl:leading-10 2xl:text-3xl absolute top-1/2 transform -translate-y-1/2 font-tt">
                In a world where many often seek authority outside themselves, we’re holding space to discover and amplify true personal power.
              </p>
            </div>
            <p className="text-2xl tiny:text-3xl sm:text-xl xl:text-4xl xl:leading-11 absolute top-1/2 transform -translate-y-1/2 font-tt text-white px-8 xl:pl-32 xl:pr-12 sm:hidden lg:block 2xl:w-3/4 2xl:text-4xl 2xl:leading-12 pb-20">
              In a world where many often seek authority outside themselves, we’re holding space to discover and amplify true personal power.
            </p>
          </div>
          <div className="bg-white sm:bg-transparent rounded-t-2xl sm:rounded-none shadow-lg sm:shadow-none transform sm:transform-none mx-4 sm:mx-0 -translate-y-16 lg:w-2/3 xl:w-1/2 pt-10 xl:pl-32  flex flex-col items-center justify-center h-full pb-6">
            <div className="flex-1 items-start justify-center flex flex-col relative h-full">
              <div className="flex flex-col w-full tiny:w-2/3  px-8 lg:px-0">
                <div className="w-2/3 tiny:w-full">
                  <p className="font-larken text-4xl">
                    Sholder <span className="italic">(shōl’dər)</span> </p>
                  <p className="font-larken italic font-bold">
                    noun
                  </p>
                </div>
                <p className="mt-6 font-tt">
                  A shortened version of the word SpaceholderTM, a person trained and certified to hold space with genuine curiosity and compassion, and to provide support for organizing thoughts or stabilizing emotions, while another person processes his/her/their thoughts or emotions on their path to inner wisdom.
                </p>
              </div>
              <div className="flex flex-col mt-10 2xl:mt-24 font-tt text-lg xl:text-2xl font-bold  px-8 lg:px-0 gap-3 xl:gap-4">
                <div className="flex gap-1 items-center">
                  <img src={ImgCheck} alt="check" />
                  <p>Deep Listening</p>
                </div>
                <div className="flex gap-1 items-center">
                  <img src={ImgCheck} alt="check" />
                  <p>Non-Judgement</p>
                </div>
                <div className="flex gap-1 items-center">
                  <img src={ImgCheck} alt="check" />
                  <p>Reflective Inquiry</p>
                </div>
                <div className="flex gap-1 items-center">
                  <img src={ImgCheck} alt="check" />
                  <p>Focused Solely on You</p>
                </div>
              </div>
              <img src={Img5} alt="img 5" className="right-0 absolute top-0 tiny:top-1/2 transform -translate-y-1/3 w-1/3 xl:w-1/2" />
            </div>
          </div>
        </div>

        <div className="w-full py-8 bg-gradient-to-b from-app-yellow-light to-app-yellow-dark flex flex-col sm:flex-row items-center justify-center gap-8 px-6">
          <p className="text-white text-xl md:text-2xl text-center">
            Join us in our movement to restore and elevate human connection.
          </p>
          <PrimaryButton className="flex-shrink-0 text-lg">
            Get early access
          </PrimaryButton>
        </div>
        <div className="relative flex flex-col lg:flex-row-reverse items-end 2xl:items-center gap-8 lg:items-start">
          <div className="w-full lg:w-1/3 xl:w-1/2 justify-between flex items-start relative pl-8 flex-row-reverse">
            <img src={Img3} alt="img-1" className="sm:w-1/2 lg:w-full h-full w-full" />
            <div className=" hidden sm:block lg:hidden absolute w-1/2 right-1/2 top-1/2 bg-white h-4/5 -translate-y-1/2 translate-x-10 shadow-xl rounded-r-2xl px-6">
              <p className="text-2xl tiny:text-3xl sm:text-xl 2xl:leading-10 2xl:text-3xl absolute top-1/2 transform -translate-y-1/2 font-tt">
                When you can hold the space for someone, with the intent for them to heal, you are returning them to wholeness
              </p>
            </div>
            <p className="text-2xl tiny:text-3xl sm:text-xl xl:text-4xl xl:leading-12 absolute top-1/3 transform -translate-y-1/2 font-tt text-white sm:hidden lg:block 2xl:text-4xl 2xl:leading-12 left-1/2 -translate-x-1/2 xl:w-1/2">
              When you can hold the space for someone, with the intent for them to heal, you are returning them to wholeness
            </p>
          </div>
          <div className="bg-white sm:bg-transparent rounded-t-2xl sm:rounded-none shadow-lg sm:shadow-none transform sm:transform-none mx-4 sm:mx-0 -translate-y-16 sm:w-full lg:w-2/3 xl:w-1/2 pt-10 xl:pl-32  flex flex-col items-start lg:items-center justify-center py-6 h-full px-8">
            <div className="font-larken text-4xl flex-1 items-start justify-center flex flex-col gap-12">
              <p className="text-4xl">
                How it works: Self Help, Together
              </p>
              <div className="flex items-start flex-col gap-12 ">
                <div className="flex items-center gap-6">
                  <img src={ImgMatch} alt="match" />
                  <div className="flex flex-col font-tt">
                    <p className="text-2xl font-bold">
                      Match & Connect
                    </p>
                    <p className="text-sm">
                      with a Certified SpaceholderTM
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <img src={ImgSupport} alt="match" />
                  <div className="flex flex-col font-tt">
                    <p className="text-2xl font-bold">
                      Stay Supported
                    </p>
                    <p className="text-sm">
                      with customized paths and real relationship
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <img src={ImgConfidential} alt="match" />
                  <div className="flex flex-col font-tt">
                    <p className="text-2xl font-bold">
                      Share Confidentially
                    </p>
                    <p className="text-sm">
                      to explore your stories and access inner wisdom
                    </p>
                  </div>
                </div>
              </div>
              <PrimaryButton className="">
                Find a sholder
              </PrimaryButton>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col lg:flex-row items-end gap-8 xl:items-center">
          <div className="w-full lg:w-1/3 xl:w-1/2 justify-between flex items-start relative pr-8">
            <img src={Img4} alt="img-1" className="sm:w-1/2 lg:w-full h-full w-full" />
          </div>
          <div className="bg-white sm:bg-transparent rounded-t-2xl sm:rounded-none shadow-lg sm:shadow-none transform sm:transform-none mx-4 sm:mx-0 -translate-y-16 lg:w-2/3 xl:w-1/2 pt-10 flex flex-col items-center justify-center py-6 h-full">
            <div className="font-larken text-7xl flex-1 items-start justify-center flex flex-col px-8 xl:w-2/3">
              <div className="flex items-start flex-col">
                <p className="text-4xl font-semibold">
                  Become a Sholder
                </p>
                <p className="text-xl font-tt">
                  Are you a current or future mental health practitioner, social worker, alternative healer, life coach, or simply a natural empath and great listener with a desire to help others? Certified SpaceholdersTM earn a part-time income while making a real difference.
                </p>
              </div>
              <p className="text-2xl font-tt mt-8 font-semibold">
                Interested? We’d love to connect with you.
              </p>
              <PrimaryButton className="mt-8">
                Get early access
              </PrimaryButton>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={ImgPeople} alt="people" className="w-full" />
          <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white flex flex-col gap-1 sm:gap-4 items-center justify-center text-center font-tt px-4 w-full sm:w-1/2">
            <p className="text-2xl md:text-4xl 2xl:text-6xl">
              The only thing missing is “u”
            </p>
            <p className="sm:block hidden text-base">
              We believe that when someone holds space for your story to be heard, true healing and growth can be unlocked. Our deep listeners are ready to meet you whereever you are, and honor your story without judgement.
            </p>
            <PrimaryButton className="sm:mt-8">Get early access</PrimaryButton>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage