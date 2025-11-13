import React, { useEffect } from 'react'
import { Link, useLoaderData } from 'react-router'

export const CropDetails = () => {

  const cropDetails = useLoaderData()

  console.log(cropDetails)

  const {
    name,
    type,
    pricePerUnit,
    unit,
    quantity,
    description,
    location,
    image,
    owner,
    createdAt,
  } = cropDetails || {};

  const formattedDate = new Date(createdAt).toLocaleString();

  return (
    <div className="max-w-6xl mx-auto my-10 p-6 bg-white shadow-md rounded-2xl">
      {/* Image & Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Image */}
        <div className="flex justify-center items-center">
          <img
            src={image}
            alt={name}
            className="rounded-2xl w-full max-w-md object-cover shadow-md"
          />
        </div>

        {/* Right: Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800 capitalize">{name}</h1>
          <p className="text-sm text-gray-500">
            Added on: <span className="font-medium">{formattedDate}</span>
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
              {type}
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              {location}
            </span>
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
              {quantity} {unit} available
            </span>
          </div>

          <p className="text-lg text-gray-700">
            <span className="font-semibold text-gray-900">Price:</span>{" "}
            {pricePerUnit} ৳ / {unit}
          </p>

          <p className="text-gray-600 leading-relaxed">
            <span className="font-semibold text-gray-900">Description:</span>{" "}
            {description}
          </p>

          <div className="border-t pt-4 mt-4">
            <h3 className="text-lg font-semibold text-gray-800">Owner Info</h3>
            <p className="text-gray-700">
              <span className="font-semibold">Name:</span> {owner?.ownerName}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span> {owner?.ownerEmail}
            </p>
          </div>

          <div className='flex gap-3'>
            <button className="btn btn-primary mt-6 px-6 py-2 rounded-lg text-white font-semibold">
              Contact Owner
            </button>
            <button className="btn btn-primary mt-6 px-6 py-2 rounded-lg text-white font-semibold">
              <Link to={"/"}>
               Go Home
              </Link>
            </button>
            <button className="btn btn-primary mt-6 px-6 py-2 rounded-lg text-white font-semibold">
              Contact Owner
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
