import Link from 'next/link'
import React from 'react'

const Navs = () => {
  return (
    <nav className='flex justify-center items-center bg-slate-900 px-20 py-4 gap-2'>
   <div className=' w-full flex justify-between items-center gap-2'>
   <Link href={""} className='font-bold p-4 text-white '>K.codes</Link>
   <Link href={"/Addtopics"} className='font-bold p-4 bg-white text-black rounded-sm'>Add Topic</Link>
   </div>
    </nav>
  )
}

export default Navs
