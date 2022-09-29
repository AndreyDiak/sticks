import React, { useEffect, useState } from 'react'

function Sticks({ count, title }) {
  // count - sticks count
  // console.log(title + ' ' +count)
  const [sticks, setSticks] = useState([]);

  useEffect(() => {
    const sticks = Array(count).fill(null);
    setSticks(sticks);
  }, [count])

  return (
    <div className='flex flex-col space-y-2'>
      <p className="text-gray-200 font-semibold text-2xl text-center font-mono">{title}</p>

      {!!sticks.length
        && <>
          <div className='flex flex-row flex-wrap max-w-xs gap-2 px-2 py-2 md:max-w-lg 
          md:gap-4 md:px-4 border border-amber-600  rounded-md justify-center '>
            {sticks.map(_ => (
              <div className='stick' />
            ))}
          </div>
          <h2 className="text-gray-200 uppercase font-mono text-2xl">
            Total: {' '}
            <span className="underline decoration-amber-600">{sticks.length}</span>
          </h2>
        </>

      }

    </div>

  )
}

export default Sticks