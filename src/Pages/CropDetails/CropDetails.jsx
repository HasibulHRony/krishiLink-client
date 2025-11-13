import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router'

export const CropDetails = () => {

  const cropDetails= useLoaderData()
  console.log(cropDetails)

  // useEffect(,[_id])



  return (
    <div>CropDetails</div>
  )
}
