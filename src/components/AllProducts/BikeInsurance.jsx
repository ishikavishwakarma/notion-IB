import React from 'react'
import Header from '../Header'

const BikeInsurance = () => {
  return (
    <>
   
    <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 max-w-md mx-auto">  
      <div className="text-center mb-5">  
        <h2 className="text-2xl font-bold">New India Bike Insurance</h2>  
        <p className="text-gray-600">STARTING FROM ₹ 714</p>  
      </div>  
      <div className="space-y-4">  
        <div className="flex items-center space-x-3">  
          <div className="text-green-500">  
            <i className="fas fa-check"></i>  
          </div>  
          <p>No Inspection Needed</p>  
        </div>  
        <div className="flex items-center space-x-3">  
          <div className="text-green-500">  
            <i className="fas fa-check"></i>  
          </div>  
          <p>Immediate Policy Insurance</p>  
        </div>  
      </div>  
      <div className="text-center mt-5">  
        <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded">  
          Check Premium  
        </button>  
      </div>  
    </div>
    </>
  )
}

export default BikeInsurance