import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({ imgUrl, name, price }) => {
    return (
        <div className=' flex flex-1 flex-col w-full max-sm:w-full'>
            <img src={imgUrl} alt={name} className='w-[280px] h-[280px]' />
            <div className=" mt-8 flex justify-start gap-2.5">
                <img src={star} alt="" width={24} height={24} />
                <p className=' font-montserrat text-xl text-slate-gray'>4.5</p>
            </div>

            <h3 className=' mt-2 text-2xl font-palanquin leading-normal font-semibold'>{name}</h3>
            <p className=' mt-2 font-semibold text-coral-red leading-normal font-montserrat text-2xl'>{price}</p>
        </div>
    )
}

export default PopularProductCard