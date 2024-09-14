import React from 'react'
import Logo from '../../assets/logo.png'

export default function Header() {
  return (
    <div className='w-full h-[100px] flex justify-between items-center'>
      <div className='flex'>
        <img src={Logo} alt="logo" width={50} height={50}/>
        {/* <a href="#">
          <h3 className='text-2xl'>پرستاران</h3>
        </a> */}
      </div>
      <button className='border-4 border-[#00bf63] h-10 rounded-lg px-4'>انتخاب همیار</button>
    </div>
  )
}
