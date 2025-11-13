import React from 'react'
import { useLoaderData } from 'react-router'
import LatestProduct from '../LatestProduct/LatestProduct'

export const Home = () => {

  const latestProducts = useLoaderData()

  return (
    <div>
      <h1 className='text-center text-2xl my-4 font-semibold'>Latest products: {latestProducts.length}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
        {
          latestProducts.map((latestProduct, index) => <LatestProduct key={index} latestProduct={latestProduct}></LatestProduct>)
        }
      </div>
    </div>
  )
}
