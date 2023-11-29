import React from 'react'
import ProductCard from '../components/ProductCard'
import { FaArrowRight } from "react-icons/fa";

function Collections() {
  return (
    <div  className='flex flex-col gap-3 m-8'>
         <h1 className='font-medium'>WOMEN</h1>
     <div className='flex flex-col justify-start items-center gap-4'>
        <div className='flex justify-start flex-wrap'>
            <div><ProductCard /></div>
            <div><ProductCard /></div>
            <div><ProductCard /></div>
        </div>
        <div className='flex justify-start flex-wrap'>
            <div><ProductCard /></div>
            <div><ProductCard /></div>
            <div><ProductCard /></div>
        </div>
        <div className='w-56 h-16 cursor-pointer green-bg text-white flex items-center justify-center rounded-sm text-xl gap-2 hover:bg-black'> Discover more  <FaArrowRight/></div>
        </div>

      <h1 className='font-medium'>MEN</h1>
      <div className='flex flex-col justify-start items-center gap-4'>
      <div className='flex justify-start flex-wrap'>
            <div><ProductCard /></div>
            <div><ProductCard /></div>
            <div><ProductCard /></div>
        </div>
        <div className='flex justify-start flex-wrap'>
            <div><ProductCard /></div>
            <div><ProductCard /></div>
            <div><ProductCard /></div>
        </div>
        <div className='w-56 h-16 cursor-pointer green-bg text-white flex items-center justify-center rounded-sm text-xl gap-2 hover:bg-black'> Discover more  <FaArrowRight/></div>
        </div>
    </div>
  )
}

export default Collections