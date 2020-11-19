import React from 'react'

function withListLoading(Component) {
  return function withLoadingComponent( { isLoading, ...props}) {
    if(!isLoading) return <Component {...props} />;
    return (
      <p className='px-4 text-center text-4xl font-semibold border border-gray-400 rounded shadow-lg mb-5 bg-pink-100'>
        Hold on, trying to find some jokes for you. 
      </p>
    )
  }
}

export default withListLoading
