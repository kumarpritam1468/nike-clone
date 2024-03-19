import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({rating, feedback, customerName, imgUrl}) => {
  return (
    <div className=' flex justify-center items-center flex-col'>
        <img src={imgUrl} alt="" className=' rounded-full object-cover w-[120px] h-[120px]' />
        <p className=' mt-6 max-w-sm text-center info-text'>{feedback}</p>
        <div className=' mt-3 flex justify-center items-center gap-2.5'>
            <img src={star} alt="" width={24} height={24} className=' object-contain m-0' />
            <p className=' text-xl font-montserrat text-slate-gray'>({rating})</p>
        </div>
        <h3 className=' mt-2'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard