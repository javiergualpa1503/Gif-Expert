import React from 'react'
import { useState } from 'react'
import { AddCategory, GridGifs } from './components/'

function App() {
  const [categories, setCategories] = useState(['Goku'])

  const onAddNewCategory = (newValue) => {
    if (categories.includes(newValue)) return
    setCategories([newValue, ...categories])
  }

  return (
    <div className='p-5'>
      <h1 className='text-3xl font-semibold'>Gif Expert App</h1>

      {/* Input Value */}
      <AddCategory onAddNewCategory={onAddNewCategory} />

      {/* List Gifts */}
      {
        categories.map(category => (
          <GridGifs
            key={category}
            category={category}
          />
        ))
      }

    </div>
  )
}

export default App
