import React from 'react'

export const PrimaryButton = (props) => {
  const {className, children} = props
  return(
    <button className={`${className} px-5 bg-app-primary rounded-md py-3 font-tt text-sm sm:text-xl text-white font-bold`}>
      {children}
    </button>
  )
}