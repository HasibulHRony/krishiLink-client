import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../../Providers/AuthContext'
import { Link } from 'react-router'
import Swal from 'sweetalert2'

export const MyPosts = () => {
  const { user } = useContext(AuthContext)
  const [myPost, setMyPost] = useState([])
  const editModalRef = useRef(null)

  useEffect(() => {
    fetch(`http://localhost:3000/my-posts?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        setMyPost([...data])
      })
  }, [user.email])

  // console.log(myPost)

  const handleEditModalOpen = () => {
    editModalRef.current.showModal()
  }

  const handleDelete = (_id) => {

    Swal.fire({
      title: "Are you sure to delete?",
      text: "once you delete, it will never back!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "delete it anyway!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:3000/all_products/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your posts has been deleted.",
                icon: "success"
              });
              const remainingPosts = myPost.filter(post => post._id !== _id);
              setMyPost(remainingPosts)

            }
          })
      }
    });
  }




  const handleEditPost = (e, _id) => {
    e.preventDefault()
    const unitPrice = Number(e.target.unitPrice.value);
    const quantity = Number(e.target.quantity.value);

    const updateInfo = {
      pricePerUnit: unitPrice,
      quantity: quantity
    }


    Swal.fire({
      title: "Are you sure to Edit Info?",
      text: "Ready to edit!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Edit it anyway!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:3000/all_products/${_id}`, {
          method: 'PATCH',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateInfo)
        })
          .then(res => res.json())
          .then(data => {
            if (data.modifiedCount) {
              Swal.fire({
                title: "Updated!",
                text: "Your posts has been Updated.",
                icon: "success"
              });
            }

            const updatedPost = myPost.map(item =>
              item._id === _id
                ? { ...item, pricePerUnit: unitPrice, quantity: quantity }
                : item
            );
            setMyPost(updatedPost)


          })
      }
    });
  }



  return (
    <div>
      <h1 className='text-2xl text-center my-4'>Total Posts For this user: {myPost.length}</h1>

      {
        myPost.length > 0 ? <div className="p-4 mx-auto">
          <div className='overflow-x-auto'>
            <table className="table p-4 mx-auto">
              {/* head */}
              <thead>
                <tr>
                  <th className='border border-black'>Name</th>
                  <th className='border border-black'>category</th>
                  <th className='border border-black'>Price Unit</th>
                  <th className='border border-black'>location</th>
                  <th className='border border-black'>edit</th>
                  <th className='border border-black'>delete</th>
                  <th className='border border-black'>Link</th>
                </tr>
              </thead>
              <tbody>
                {
                  myPost.map((post, index) => <tr key={index}>
                    <td className='border border-black'>{post.name}</td>
                    <td className='border border-black'>{post.type}</td>
                    <td className='border border-black'>{post.pricePerUnit}</td>
                    <td className='border border-black'>{post.location}</td>
                    <td className='border border-black'><button onClick={handleEditModalOpen} className='btn'>Edit</button></td>
                    <td className='border border-black'><button onClick={() => handleDelete(post._id)} className='btn'>Delete</button></td>
                    <td className='border border-black'>
                      <button className='btn'><Link to={`/crops-details/${post._id}`}>View Detail</Link></button>
                    </td>
                    <td>

                      <div>

                        <dialog ref={editModalRef} className="modal modal-bottom sm:modal-middle">
                          <div className="modal-box">
                            <form onSubmit={(e) => handleEditPost(e, post._id)}>

                              <label className="label">Price Per Unit: </label><br />
                              <input type="text" required className="input" name='unitPrice' placeholder="Your Crop Type: " /><br /><br />

                              <label className="label">Quantity: </label><br />
                              <input type="text" required className="input" name='quantity' placeholder="Quantity You may supply: " /><br /><br />
                              <button className="btn">Submit</button>
                            </form>
                            <form method="dialog" className='text-right' >
                              <button className='btn'>Close</button>
                            </form>
                          </div>
                        </dialog>
                      </div>

                    </td>
                  </tr>)
                }

              </tbody>
            </table>



          </div>
        </div> : <div><p className='text-center font-bold text-2xl my-5'>You don't have posted yet.</p></div>
      }


    </div>
  )
}
