import React from 'react'
import { useState } from 'react'

export const AddCategory = ({ onAddNewCategory }) => {

  const [inputValue, setInputValue] = useState('')

  // On Change Value
  const onChange = (event) => {
    setInputValue(event.target.value)
  }

  //Add Categorie submit
  const handelSubmit = (event) => {
    event.preventDefault()
    if (inputValue.length <= 1) return
    onAddNewCategory(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={handelSubmit}>
      <input
        placeholder='Buscar gif'
        className={'border border-black rounded-md p-2 text-black w-full outline-none bg-white text-sm my-4'}
        type="text"
        value={inputValue}
        onChange={onChange}
      />
    </form>
  )
}
