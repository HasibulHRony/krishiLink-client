import React, { useContext, useState } from 'react'
import { Link, useLoaderData } from 'react-router'
import ProductCard from '../../Components/ProductCard/ProductCard'

export const AllCrops = () => {
  const allCrops = useLoaderData()

  const [loading, setLoading] = useState(false)
  const [searchData, setSearchData] = useState([...allCrops])

  const handleSearching = (e) => {
    e.preventDefault()
    console.log("searching button is working properly")
    const search_input = e.target.search.value
    console.log(search_input)
    setLoading(true)

    fetch(`https://krishi-link-server-neon.vercel.app/search?search=${search_input}`)
      .then(res => res.json())
      .then(data => {
        setSearchData([...data])
        setLoading(false)
      })
  }

  return (
    <div>
      <h1 className='text-center text-2xl my-4 font-semibold'>All Crops: {searchData.length}</h1>

      <form onSubmit={handleSearching} className=" mt-4 mb-4 flex gap-2 justify-center">
        <label className="input rounded-full ">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input name="search" type="search" placeholder="Search" />
        </label>
        <button className="btn  rounded-full">{loading ? "Loading" : "Find"}</button>
      </form>


      {
        searchData.length ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 mb-4">
          {
            searchData.map((crop, index) => <ProductCard key={index} crop={crop}></ProductCard>)
          }
        </div> : <div className="flex flex-col max-w-96 mx-auto p-4 items-center justify-center min-h bg-gray-100 text-center px-4">
          <h2 className="text-3xl font-semibold mb-2">No Data Found!</h2>
          <p className="text-gray-600 mb-6">
            The page you are looking for doesn’t exist or an unexpected error has occurred.
          </p>

          <Link
            to="/"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            Back to Home
          </Link>
        </div>
      }

    </div>
  )
}
