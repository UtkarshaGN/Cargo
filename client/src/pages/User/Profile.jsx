import React, { useState } from 'react'
import EditModal from '../../components/EditModal'
import toast from 'react-hot-toast'
import BookingDetailsModal from '../../components/BookingDetailsModal'


export default function Profile() {
    const [editModal, setEditModal] = useState(false)
    const [bookingDetailsModal, setBookingDetailsModal] = useState(false)



      //booking function
   const handleUpdate =() =>{
        toast.success("Profile updated successfully")
        setEditModal(false)
    }
  return (
    <>
      <div className="max-w-5xl mx-auto my-10 p-6 bg-teal-100 rounded-2xl shadow-sm">
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <p className="font-semibold text-gray-800 mb-1">Name</p>
          <p className="text-gray-600 mb-4">John Doe</p>

          <p className="font-semibold text-gray-800 mb-1">Email</p>
          <p className="text-gray-600 mb-4">john.doe@example.com</p>

          <p className="font-semibold text-gray-800 mb-1">Phone</p>
          <p className="text-gray-600 mb-4">+91 98765 43210</p>

          <button  onClick={()=>setEditModal(!editModal)}className="mt-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition">
            Edit details
          </button>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">Your bookings</h4>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left bg-gray-100 text-gray-700 font-semibold px-4 py-3 border-b border-gray-200">Car name</th>
                  <th className="text-left bg-gray-100 text-gray-700 font-semibold px-4 py-3 border-b border-gray-200">Journey date</th>
                  <th className="text-left bg-gray-100 text-gray-700 font-semibold px-4 py-3 border-b border-gray-200">Status</th>
                  <th className="text-left bg-gray-100 text-gray-700 font-semibold px-4 py-3 border-b border-gray-200">View details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-600">Honda</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-600">01-10-2026</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-600">Pending</td>
                  <td  onClick={()=>setBookingDetailsModal(!bookingDetailsModal)} className="px-4 py-3 font-bold text-green-700  text-center border-b bg-amber-200 border-gray-200 text-gray-600 cursor-pointer">View details</td>
                 
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/*Edit modal*/}
      {editModal  && (<EditModal editModal={editModal} setEditModal={setEditModal} />)}

      {/*Booking details modal*/}
      {bookingDetailsModal  && (<BookingDetailsModal bookingDetailsModal={bookingDetailsModal} setBookingDetailsModal={setBookingDetailsModal} />)}
    </>
  )
}
