import React from 'react'
import SignIn from '../pages/SignIn'

const Header = () => {
  return (
    <div className='text-2xl flex justify-between w-full items-center'>
      <h1>  PapyonLab</h1>
      <h2> <SignIn/> </h2>
    </div>
  )
}

export default Header