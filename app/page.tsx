import React from 'react'
import { AiOutlineEye, AiOutlineMessage } from 'react-icons/ai'
import { MdBolt, MdMemory } from 'react-icons/md'
// import TopicsList from './TopicsList'

const page = () => {
  return (
    <div className='w-[700px] h-[60vh] rounded-3xl shadow-slate-900 flex justify-between items-center gap-6 sm:flex-col -mt-[200px] max-h-full p-4 max-sm:flex-col max-md:flex-row max-lg:flex md:flex-row'>
    <div className='w-[350px] h-full flex flex-col justify-center items-center bg-[#5D3EFB] rounded-3xl gap-6 p-4'>
      <p className='font-bold text-white text-2xl'>Your Result</p>
      <div className='w-[150px] h-[150px] rounded-full flex justify-center items-center flex-col gap-2  bg-[#271583a5]'>
        <h1 className='font-bold text-white text-5xl'>76</h1>
        <p className='font-normal text-white '>of 100</p>
      </div>
      <h2 className='font-bold text-white text-2xl'>Great</h2>
      <p className='text-white font-normal text-center flex justify-center items-center'>You scored higher than 65% of <br /> the people who have taken these tests.</p>
    </div>
    <div className='w-[350px] h-full flex flex-col justify-center items-start bg-white gap-5'>
      <h1 className='font-bold flex justify-start items-start'>Summary</h1>
      <div className='w-[300px] h-[40px]  rounded-sm flex justify-between items center p-2 bg-[#FFF6F5]'>
        <div className="flex gap-2 justify-center items-center text-red-500 font-bold"><MdBolt/>Reaction</div>
        <p className="font-bold">80/100</p>
      </div>
      <div className='w-[300px] h-[40px]  rounded-sm flex justify-between items center p-2 bg-[#FFFBF2]'>
        <div className="flex gap-2 justify-center items-center text-yellow-500 font-bold"><MdMemory/>Memory</div>
        <p className="font-bold">80/100</p>
      </div>
      <div className='w-[300px] h-[40px]  rounded-sm flex justify-between items center p-2 bg-[#F2FBFA]'>
        <div className="flex gap-2 justify-center items-center text-green-500 font-bold"><AiOutlineMessage/>Verbal</div>
        <p className="font-bold">80/100</p>
      </div>
      <div className='w-[300px] h-[40px]  rounded-sm flex justify-between items center p-2 bg-[#F3F3FD]'>
        <div className="flex gap-2 justify-center items-center text-indigo-500 font-bold"><AiOutlineEye/>Visual</div>
        <p className="font-bold">80/100</p>
      </div>
      <button className='w-[300px] h-[40px] bg-[#5D3EFB] rounded-full font-bold text-white'>Continue</button>
    </div>
    </div>
  )
}

export default page
