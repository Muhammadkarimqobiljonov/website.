import React from 'react'
import head_f from './assets/follow_head.png'
import logo from './assets/logo.png'

const App = () => {
  return (
    <div>
      <div className='bg-[black] h-[120px] '>
        <div className='flex justify-between w-[1300px] mx-auto h-[120px] items-center'>
          <img className='transform transition duration-1300 hover:scale-110        ` w-[220px] cursor-pointer' src={logo} alt="" />
          <ul className='flex items-center gap-[70px]'>
            <li><a className='text-[#FFFFFF] font-[500] ' href="#">Home </a></li>
            <li><a className='text-[#FFFFFF] font-[500] ' href="#">Shop</a></li>
            <li><a className='text-[#FFFFFF] font-[500] ' href="#">About us </a></li>
            <li><a className='text-[#FFFFFF] font-[500] ' href="#">About us </a></li>
            <li><a className='text-[#FFFFFF] font-[500] ' href="#">Blog</a></li>
          </ul>
          <div>
            <img className='cursor-pointer' src={head_f} alt="" />
          </div>
        </div>
      </div>

      <div className='h-[450px] bg-[]'>

      </div>
    </div>
  )
}

export default App
