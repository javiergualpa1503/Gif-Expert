import React from 'react'

const GifItem = ({ title, url }) => {
  return (
    <div className='flex flex-col bg-white rounded-xl overflow-hidden justify-center items-center content-center shadow-lg h-[0%]'>
      <img className='h-full' src={url} alt={title} />
      <h3 className='p-2 text-center flex-1'>{title}</h3>
    </div>
  )
}

export default GifItem