import React from 'react'

function StartButton({ onGameStart }) {
  return (
    <div className='w-full flex flex-row items-center justify-center'>
      <button
        onClick={onGameStart}
        className="uppercase text-neutral-300 font-semibold text-4xl 
                border border-amber-600 px-4 py-3 rounded-full hover:bg-amber-600
              hover:text-neutral-800 group transition duration-500 ease-in-out"
      >
        Click on{' '}
        <span className='underline decoration-amber-600 animate-pulse 
                group-hover:animate-none'>
          Button
        </span>{' '}
        to start
      </button>
    </div>
  )
}

export default StartButton