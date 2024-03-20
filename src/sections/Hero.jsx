import React, { useState } from 'react';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../constants';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';

const Hero = () => {

  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1)

  return (
    <section id='home' className=' w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>

      <div className=" relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className=' text-xl text-coral-red font-montserrat'>Our Summer Collection</p>
        <h1 className=' mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className=' xl:bg-white xl:whitespace-nowrap relative xl:z-10 pr-10'>The New Arrival</span>
          <br />
          <span className=' text-coral-red inline-block mt-3'>Nike </span>Shoes
        </h1>
        <p className=' font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Discover Stylish Nike arrivals, quality comfort, and innovation for your active life</p>
        <Button label='Shop Now' iconUrl={arrowRight} />

        <div className=" flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className=' text-4xl font-bold font-palanquin'>{stat.value}</p>
              <p className=' leading-7 font-montserrat text-slate-gray'> {stat.label} </p>
            </div>
          ))}
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center relative flex-1 xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoeImage} alt="" width={610} height={500} className=' relative object-contain z-10' />

        <div className=" flex gap-4 sm:gap-6 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div className="" key={index}>
              <ShoeCard
                imgUrl={shoe}
                changeBigShoeImage={(shoe)=>setBigShoeImage(shoe)}
                bigShoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero