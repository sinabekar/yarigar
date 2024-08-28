import React from 'react'

export default function Header() {
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5'>
      <div className='flex'>
        <img src="../../assets/logo.png" alt="logo" />
        <a href="#">
          <h3 className='text-2xl'>پرستاران</h3>
        </a>
      </div>
      <button className='border-4 border-[#00bf63] h-10 rounded-lg px-4'>ثبت‌نام  / ورود</button>
    </div>
  )
}
