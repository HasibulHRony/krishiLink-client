import React, { useContext, useState } from 'react'
import { useLoaderData } from 'react-router'
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

    fetch(`http://localhost:3000/search?search=${search_input}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setSearchData([...data])
        setLoading(false)
      })
  }

  console.log(allCrops)
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
        searchData.length ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
          {
            searchData.map((crop, index) => <ProductCard key={index} crop={crop}></ProductCard>)
          }
        </div> : <p>No Data Founded!</p>
      }

    </div>
  )
}
