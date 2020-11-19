import React from 'react'

function List(props) {
  const { joke, setup, delivery } = props;
  
  if(!joke && !setup === 0) return <p>No jokes yet, bud.</p>
  
  return (
    <div>
      <h2 className='text-center text-4xl font-semibold border border-gray-400 rounded shadow-lg mb-5 bg-pink-100' >
        Jokes!
      </h2>
      <ul className='text-center border border-gray-400 rounded shadow-md mb-5 px-3 bg-pink-100'>
        {joke 
        ? <li>
            {joke}
          </li> 
        : 
          <div>
            <li>
              {setup}
            </li>
            <li>
              {delivery}
            </li>
          </div>
        }
          
      </ul>
    </div>
  )
}

export default List
