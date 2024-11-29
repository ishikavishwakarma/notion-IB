import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MandateData = () => {
  const [mandates, setMandates] = useState([]);

  // Fetch mandates data from the API
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/mandates/getalldata')
      .then(response => {
        setMandates(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the mandates:', error);
      });
  }, []);

  // Function to handle deleting a mandate
  const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/mandates/${id}`)
      .then(response => {
        setMandates(mandates.filter(mandate => mandate.id !== id)); // Update state by removing the deleted mandate
      })
      .catch(error => {
        console.error('There was an error deleting the mandate:', error);
      });
  };

  // Function to handle sending an email (placeholder, as actual email API is needed)
  const handleSendEmail = (email) => {
    // Here you would integrate the actual email sending logic.
    console.log(`Sending email to ${email}`);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Mandates</h2>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Address</th>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Mobile Number</th>
            <th className="px-4 py-2 text-left">Signature</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {mandates.map((mandate) => (
            <tr key={mandate.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">{mandate.name}</td>
              <td className="px-4 py-2">{mandate.email}</td>
              <td className="px-4 py-2">{mandate.address}</td>
              <td className="px-4 py-2">{mandate.date}</td>
              <td className="px-4 py-2">{mandate.mobile_number}</td>
              <td className="px-4 py-2">
                <img
                  src={`http://127.0.0.1:8000/storage/${mandate.signature_file}`}
                  alt="Signature"
                  className="w-24 h-auto"
                />
              </td>
              <td className="px-4 py-2">
                <button
                  onClick={() => handleDelete(mandate.id)}
                  className="bg-red-600 text-white py-1 px-4 rounded-lg hover:bg-red-700 transition-colors duration-200"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleSendEmail(mandate.email)}
                  className="bg-blue-600 text-white py-1 px-4 rounded-lg ml-2 hover:bg-blue-700 transition-colors duration-200"
                >
                  Send Email
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default MandateData;
