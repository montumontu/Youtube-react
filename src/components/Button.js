import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className= " rounded-lg bg-gray-100 px-5 py-2 mx-1">{name}</button>
    </div>
  )
}

export default Button