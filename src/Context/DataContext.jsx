import React, { createContext, useState, useContext } from "react";
import axios from "axios";
const API_BASE_URL= `http://127.0.0.1:8000/api`;
// Create the context
const DataContext = createContext();

// Create the provider
export const DataProvider = ({ children }) => {
  const [responseMessage, setResponseMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to send mail via API

  /**
   * Function to send mail via API
   * @param {Object} mailData
   */
  const sendMail = async (mailData) => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/contact/mail`, mailData);
      setResponseMessage(response.data); // Assume API returns a "message" field in the response
      setError(null); // Clear previous errors
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred");
    } finally {
      setLoading(false);
    }
  };
   /**
   * Function to submit a mandate via API
   * @param {FormData} mandateData
   */
   const submitMandate = async (mandateData) => {
    setLoading(true);
    setError(null);

    try {
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };
      const response = await axios.post(`${API_BASE_URL}/mandates`, mandateData, config);
      setResponseMessage(response.data); // Handle API response
      return null; // No errors
    } catch (err) {
      const errorMessages =
      err.response?.data?.message || "An error occurred while submitting the mandate";
    setError(errorMessages);
    return Array.isArray(errorMessages) ? errorMessages : [errorMessages];
    } finally {
      setLoading(false);
    }
  };

  return (
    <DataContext.Provider
      value={{
        sendMail,
        submitMandate,
        responseMessage,
        loading,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use the ContactContext
export const useDataContext = () => {
  return useContext(DataContext);
};

export default DataContext;
