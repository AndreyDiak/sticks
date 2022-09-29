import React from 'react'

function History({ history, title, isPlayer }) {

  return (
    <div className='h-full px-2 py-2'>
      <h2 className="text-gray-200 font-mono text-2xl mb-4">{title}</h2>
      <div>
        <div className="flex flex-col space-y-4">
          {history.map((count, index) => (
            <div className='flex flex-row space-x-4 max-x-lg'>
              <div className="text-white">{index+1}</div>
              <p className="text-gray-500 font-mono border-b border-neutral-700">
                {isPlayer ? 'You' : 'Opp'}
                {' '}takes {count} sticks
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default History