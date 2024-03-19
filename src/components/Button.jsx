import React from 'react';

const Button = ({ label, iconUrl, backgroundColor, borderColor, textColor, fullWidth }) => {
  return (
    <button className={` flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none border-2
    ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` :
        'bg-coral-red text-white border-coral-red'} rounded-full ${fullWidth && 'w-full'} `}>
      {label}

      {iconUrl && <img src={iconUrl} alt="" className=' ml-2 rounded-full w-5 h-5' />}
    </button>
  )
}

export default Button