import React from 'react'

function Header() {
  return (
    <header className="flex flex-col space-y-5 justify-center items-center py-2 
      border-b border-neutral-500">
        <h3 className="text-white uppercase font-semibold animate-pulse text-[92px] 
        underline decoration-amber-600">
          STICKS
        </h3>
        <p className="text-2xl text-white font-semibold">Try to Win</p>
      </header>
  )
}

export default Header