import React from 'react'
import useGetGifs from '../hooks/useGetGifs'
import GifItem from './GifItem'


export const GridGifs = ({ category }) => {

  const { gifs, isLoading } = useGetGifs(category)

  return (
    <>
      <h3 className='text-3xl mb-2 font-semibold'>{category}</h3>
      {
        isLoading && <h3>Cargando...</h3>
      }
      <div className='flex flex-wrap justify-center gap-4'>
        {gifs.map((gif) => (
          <GifItem
            key={gif.id}
            {...gif}
          />
        ))}
      </div>
    </>
  )
}
