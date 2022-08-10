import React from 'react';

import {Product, FooterBanner, HeroBanner} from '../components';

const Home = () => {
  return (
    <> 
      <HeroBanner />
      
      <div>
        <h2 className='products-heading'>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {['Product 1', 'Product 2', 'Product 3'].map(
        (product) => product)}
      </div>

      <FooterBanner />
    </>
  )
}

export default Home;