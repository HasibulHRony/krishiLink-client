import React, { useContext, useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router'
import { AuthContext } from '../../Providers/AuthContext'
import { toast } from 'react-toastify'

export const CropDetails = () => {

  const { user } = useContext(AuthContext)
  const cropDetails = useLoaderData()
  const [isInterested, setInterested] = useState(false)



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
    _id,
  } = cropDetails || {};
  const [totalPrice, setTotalPrice] = useState(0)
  const formattedDate = new Date(createdAt).toLocaleString();

  const handleInterest = (e) => {
    e.preventDefault()
    const expectedQuantity = Number(e.target.expectedQuantity.value);
    const message = e.target.message.value;
    const total = Number(pricePerUnit) * expectedQuantity;
    setTotalPrice(total)

    const newInterest = {
      cropId: _id,
      userEmail: user.email,
      userName: user.displayName,
      quantity: expectedQuantity,
      message: message,
      status: "pending",
    }

    fetch(`http://localhost:3000/all_products/${_id}/interests`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newInterest)
    })
      .then(res => res.json())
      .then(data => {
        toast.success("Data Added successfully")
        setInterested(true)
      })
      .catch(error => console.log(error))

    console.log(user)
    console.log(newInterest)

  }



  return (
    <div className='p-4'>
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


      <div>
        {
          user.email === owner.ownerEmail ?
            <div className='overflow-x-auto'>
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Seller</th>
                    <th>Bid Price</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>

                </tbody>
              </table>

            </div>


            :


            <div>



              {
                !isInterested ?

                  <div className="hero bg-base-200">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                      <div className="card-body">
                        <form onSubmit={handleInterest}>
                          <p className='text-center text-2xl my-4'>Are You Interested? Please inform use: </p>
                          <fieldset className="fieldset">
                            <label className="label">expectedQuantity:</label>
                            <input required name='expectedQuantity' type="text" className="input" placeholder="Quantity" />
                            <label className="label">Message:</label>
                            <input required name='message' type="text" className="input" placeholder="message" />
                            <label className='label'>Total Price:</label>
                            <input name='total' readOnly type='text' className='input' placeholder={totalPrice}></input>
                            <button className="btn btn-neutral mt-4">Submit Interest</button>
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div> : ""
              }
            </div>

        }

      </div>



    </div>
  );
}
