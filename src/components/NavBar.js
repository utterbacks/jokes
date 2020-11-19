import React from 'react'

function NavBar() {

  return (
      <>
      <header className="flex shadow-lg bg-pink-100 justify-center" >
            <div className="flex justify-between p-5" >
              <div className="flex items-center">
                
                  <div className="h-8  border-gray-800  px-2 pt-1" >
                      <a href="/" className="font-semibold flex" >
                          See some Jokes!
                      </a>
                  </div>
                  <div className="h-8  border-gray-800  px-2 pt-1" >
                      <a href="/info" className="font-semibold flex" >
                          What even is this?
                      </a>
                  </div>
              </div>
            </div>  
              
      </header>
      </>
  )
}

export default NavBar
