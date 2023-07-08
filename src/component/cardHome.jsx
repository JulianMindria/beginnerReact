import React from 'react'

function cardHome({image}) {
  return (
    <>
      <img
      className="mx-auto w-56 h-auto"
      alt='poster'
      src={image}
  />
    </>
  )
}

export default cardHome