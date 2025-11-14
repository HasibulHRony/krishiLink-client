import React from 'react'
import { useLoaderData } from 'react-router'
import LatestProduct from '../LatestProduct/LatestProduct'
import { Sliders } from '../Sliders/Sliders'
import { Blog } from '../Blog/Blog'
import { HowWorks } from '../HowWorks/HowWorks'

export const Home = () => {

  const latestProducts = useLoaderData()
  const imgs = [
    "https://i.ibb.co.com/60v70M3v/land-o-lakes-inc-9cmb-LTARQMA-unsplash.jpg",
    "https://i.ibb.co.com/HDXhKwDW/irewolede-Pvwdl-Xqo85k-unsplash.jpg",
    "https://i.ibb.co.com/zTCVCL83/steven-weeks-DUPFowq-I6o-I-unsplash.jpg",
  ];

  return (
    <div>
      <h1 className='text-center text-2xl my-4 font-semibold'>WelCome TO<br></br> <span className='text-3xl font-bold text-green-900'>KrishiLink</span></h1>
      <div className='max-w-96 mx-auto'>
        <Sliders images={imgs}></Sliders>
      </div>

      <h2 className='text-center my-2 md:mt-4 text-2xl font-semibold'>Blog Section:</h2>
      <div className='p-4 mx-auto'>
        <Blog></Blog>
      </div>


      <h3 className='text-center text-2xl my-4 font-semibold'>Latest products: {latestProducts.length}</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mb-4">
        {
          latestProducts.map((latestProduct, index) => <LatestProduct key={index} latestProduct={latestProduct}></LatestProduct>)
        }
      </div>

      <div>
        <HowWorks></HowWorks>
      </div>


    </div>
  )
}
