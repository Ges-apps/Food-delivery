import React from 'react'
import { useState } from 'react'
import {CgMenuHotdog} from 'react-icons/cg';
import {MdDeliveryDining} from 'react-icons/md';
import {GiEating , GiHotMeal} from 'react-icons/gi';
import {AiOutlineClose, AiOutlineSearch , AiOutlineShareAlt} from 'react-icons/ai';
import {ImCart} from 'react-icons/im';
import {TbTruckDelivery} from 'react-icons/tb';
import {GrFavorite} from 'react-icons/gr';
import {IoMdWallet , IoMdHelpCircle} from 'react-icons/io';
const Navbar = () => {
    const [nav , setNav]=useState(false)
 {   const handleNav = () =>{
    setNav(!nav)
  }

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/** LEFT SIDE **/}
        <div onClick={handleNav} className='flex items-center'>
          <div className="cursor-pointer">
          <CgMenuHotdog size={35}/>
          </div>
          <h1 className='text-2xl px-2 sm:text-3xl lg:text-4xl'>Foo<span className='font-bold text-orange-400'>DIA</span></h1>
        </div>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-2'>
          <p className='bg-black text-white rounded-full p-2'><MdDeliveryDining size={20}/></p>
          <p className='p-2'><GiEating size={20}/></p>
        </div>
        {/** Search place **/}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
          <AiOutlineSearch size={25}/>
          <input className='w-full bg-transparent p-2 focus:outline-none' type="text" placeholder='Search' />
        </div>
        {/** Cart button **/}
        
        <button className='bg-black text-white rounded-full hidden md:flex p-2 items-center'><ImCart className='mr-2'/>Cart</button>        

        {/** Mobile Menu **/}
        {/** OverLay **/}
        {nav?<div onClick={handleNav} className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : null}

        {/**SIde Drawer Menu**/}
        <div className={nav? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
            <AiOutlineClose onClick={handleNav} size={30} className="absolute right-4 top-4 cursor-pointer" />
            <h2 className='text-2xl p-4 '>Foo<span className='font-bold text-orange-400'>DIA</span></h2>
            <nav>
              <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4 flex  font-semibold hover:border-b-2 border-gray-100 duration-150 cursor-pointer items-center'><TbTruckDelivery size={25} className="mr-4"/>Orders</li>
                <li className='text-xl py-4 flex  font-semibold hover:border-b-2 border-gray-100 duration-150 cursor-pointer items-center'><GiHotMeal size={25} className="mr-4"/>Hot Sales</li>
                <li className='text-xl py-4 flex  font-semibold hover:border-b-2 border-gray-100 duration-150 cursor-pointer items-center'><GrFavorite size={25} className="mr-4"/>Favorites</li>
                <li className='text-xl py-4 flex  font-semibold hover:border-b-2 border-gray-100 duration-150 cursor-pointer items-center'><IoMdWallet size={25} className="mr-4"/>Wallet</li>
                <li className='text-xl py-4 flex  font-semibold hover:border-b-2 border-gray-100 duration-150 cursor-pointer items-center'><IoMdHelpCircle size={25} className="mr-4"/>Help</li>
                <li className='text-xl py-4 flex  font-semibold hover:border-b-2 border-gray-100 duration-150 cursor-pointer items-center'><AiOutlineShareAlt size={25} className="mr-4"/>Share</li>
              </ul>
            </nav>
        </div>

    </div>

  )
}
}
export default Navbar