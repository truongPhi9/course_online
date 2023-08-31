import React from 'react'

export default function Course({ title, imgCourse }) {
  return (
    <div className=''>
        <div className='rounded-2xl cursor-pointer w-full h-36 overflow-hidden'>
            <img className='w-full h-full scale-125' src={imgCourse} alt={imgCourse} />
        </div>
        <div className='mt-3'>
          <h3 className='text-lg font-semibold text-zinc-700'>{title}</h3>
        </div>
    </div>
  )
}
