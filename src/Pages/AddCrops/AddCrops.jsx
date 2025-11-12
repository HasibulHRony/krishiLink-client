import React, { useContext } from 'react'
import { AuthContext } from '../../Providers/AuthContext'
import { useNavigate } from 'react-router'

export const AddCrops = () => {

  const navigate = useNavigate()

  const { user } = useContext(AuthContext)
  console.log(user)

  const handleAddCrops = (e) => {
    e.preventDefault()
    const name = e.target.cropName.value;
    const type = e.target.cropType.value;
    const pricePerUnit = e.target.unitPrice.value;
    const unit = e.target.unitType.value;
    const quantity = e.target.quantity.value;
    const description = e.target.description.value;
    const location = e.target.location.value;
    const image = e.target.cropPhoto.value;
    const owner = {
      ownerEmail: user?.email,
      ownerName: user?.displayName,
    }

    const formData = {
      name: name,
      type: type,
      pricePerUnit: pricePerUnit,
      unit: unit,
      quantity: quantity,
      description: description,
      location: location,
      image: image,
      owner: owner,
    }

    fetch("http://localhost:3000/added-crops", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error))

    navigate('/my-posts')

    console.log({ name, type, pricePerUnit, unit, quantity, description, image, location, owner })
  }
  console.log(user)




  return (
    <div className=''>
      <div className="hero bg-base-200 h-fit p-8">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className='text-center text-2xl'>Add  Your Crops Here.........</h1>
            <form onSubmit={handleAddCrops}>

              <fieldset className="fieldset">
                <label className="label">The Crop Name: </label>
                <input type="text" required className="input" name='cropName' placeholder="The Crop Name:" />
                <label className="label">Crop Type:</label>
                <input type="text" required className="input" name='cropType' placeholder="Your Crop Type: " />
                <label className="label">Price Per Unit: </label>
                <input type="text" required className="input" name='unitPrice' placeholder="Your Crop Type: " />
                <label className="label">Unit: </label>
                <input type="text" required className="input" name='unitType' placeholder="Your Parameter Unit: " />
                <label className="label">Quantity: </label>
                <input type="text" required className="input" name='quantity' placeholder="Quantity You may supply: " />
                <label className="label">Description: </label>
                <input type="text" required className="input" name='description' placeholder="Your Product Description: " />
                <label className="label">Location: </label>
                <input type="text" required className="input" name='location' placeholder="Location Your Product grow: " />
                <label className="label">Crops Photo: </label>
                <input type="url" required className="input" name='cropPhoto' placeholder="Your crop photo url: " />
                <button className="btn btn-neutral mt-4">Submit</button>
              </fieldset>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
