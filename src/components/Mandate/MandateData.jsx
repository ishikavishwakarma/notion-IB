import React, { useEffect, useState } from 'react';
import { useDataContext } from '../../Context/DataContext';
import { Card, Typography } from '@material-tailwind/react';
import LoadingOverlay from '../LoadingOverlay';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
const MandateData = () => {
  const location = useLocation();
  const { mandates,handleSendEmail, fetchMandates,deleteMandate, loading } = useDataContext(); // Access context values
  const handleEmailClick = async (id) => {
    try {
      const response = await handleSendEmail(id);
      toast.success(response.data.message);  // Show success toast
    } catch (error) {
      toast.error('Failed to send email. Please check the logs.');  // Show error toast
    } 
  };
  const TABLE_HEAD = [
    "Name",
    "Email",
    "Address",
    "Date",
    "Mobile Number",
    "Signature",
    "Actions",
  ];
  
 
  useEffect(() => {
    // Function to determine if we should fetch mandates
    const checkAndFetchMandates = () => {
      if (document.visibilityState === "visible" && location.pathname === "/mandatedata") {
        fetchMandates();
      }
    };

    // Fetch mandates when component first mounts if it's the current route
    if (location.pathname === "/mandatedata") {
      fetchMandates();
    }

    // Add visibility change listener to detect tab switches
    document.addEventListener("visibilitychange", checkAndFetchMandates);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("visibilitychange", checkAndFetchMandates);
    };
  }, [location.pathname]);
// useEffect(() => {
//   if (mandates.length === 0) {
//     fetchMandates();
//   }
// }, []);
 
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Mandates</h2>
      <LoadingOverlay loading={loading} />
      <Card className="h-full w-full overflow-scroll lg:overflow-hidden">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mandates.length > 0 ? (
              mandates.map((mandate, index) => {
                const isLast = index === mandates.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={mandate.id}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {mandate.name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {mandate.email}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {mandate.address}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {mandate.date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {mandate.mobile_number}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <img
                        src={`http://127.0.0.1:8000/storage/${mandate.signature_file}`}
                        alt="Signature"
                        className="w-24 h-auto"
                      />
                    </td>
                    <td className={classes}>
                      <button

                        onClick={() => deleteMandate(mandate.id)}
                        className="bg-red-600 text-white py-1 px-4 rounded-lg hover:bg-red-700 transition-colors duration-200"
                      >
                        Delete
                      </button>
                      <button
                       onClick={() => handleEmailClick(mandate.id)}
                        className="bg-blue-600 text-white py-1 px-4 rounded-lg ml-2 hover:bg-blue-700 transition-colors duration-200"
                      >
                        Send Email
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={7} className="p-4 text-center">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    No mandates available.
                  </Typography>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>
      <ToastContainer />
    </div>
  );
};
export default MandateData;
