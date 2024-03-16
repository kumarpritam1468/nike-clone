import React from 'react'

const Button = ({label, iconUrl}) => {
  return (
    <button className=''>
        {label}

        <img src={iconUrl} alt="" />
    </button>
  )
}

export default Button