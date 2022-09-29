import React, { useState } from 'react'

function Form( { min, max, handleClick } ) {

  const [value, setValue] = useState(min);

  const onValueChange = (e) => {
    if (e.target.value >= min && e.target.value <= max) 
      setValue(parseInt(e.target.value))
  }

  return (
    <div className='flex flex-col space-y-2'>
      <p className="text-gray-200 text-mono text-lg text-center font-semibold">
        You can take from {min} to {max} sticks...
      </p>
      <div className="flex flex-row">
        <input
          onChange={onValueChange}
          value={value}
          placeholder='Sticks count...'
          className='bg-neutral-700 border-neutral-600 rounded-tl-lg rounded-bl-lg 
        px-4 py-2 font-mono text-xl placeholder-gray-200 outline-none text-gray-200'
          type="number"
        />
        <button
        disabled={!value}
        onClick={() => handleClick(value)}
        className='bg-amber-600 px-4 py-2 text-neytral-600 rounded-tr-lg
        rounded-br-lg font-mono text-xl uppercase font-bold hover:bg-amber-600/80'>
        Take</button>
      </div>
    </div>
  )
}

export default Form