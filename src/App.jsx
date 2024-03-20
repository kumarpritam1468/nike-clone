import React from 'react';
import { CustomerReviews, Footer, Hero, PopularProduct, Services, SpecialOffer, Subscribe, SuperQuality } from './sections';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main className='relative overflow-x-hidden'>
      <Navbar/>
      <section className=' xl:padding-l xl:padding-r'>
        <Hero/>
        <section className='padding'>
          <PopularProduct/>
        </section>
        <section className='padding'>
          <SuperQuality/>
        </section>
        <section className='padding-x py-10'>
          <Services/>
        </section>
        <section className='padding'>
          <SpecialOffer/>
        </section>
        <section className='padding bg-pale-blue'>
          <CustomerReviews/>
        </section>
        <section className='padding sm:py-32 py-16 w-full'>
          <Subscribe/>
        </section>
      </section>
        <section className='bg-black padding-x padding-t pb-8'>
          <Footer/>
        </section>
    </main>
  )
}

export default App