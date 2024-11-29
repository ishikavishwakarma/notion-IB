// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Mandate = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     address: '',
//     contact: '',
//     sign: null,
//     till: ''
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'sign') {
//       setFormData({ ...formData, sign: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const form = new FormData();
//     form.append('name', formData.name);
//     form.append('email', formData.email);
//     form.append('address', formData.address);
//     form.append('mobile_number', formData.contact);
//     form.append('signature_file', formData.sign);
//     form.append('date', formData.till);

//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/mandates', form, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       // If the request is successful, show success message
//       toast.success('Mandate created successfully!');

//       // Clear the form fields
//       setFormData({
//         name: '',
//         email: '',
//         address: '',
//         contact: '',
//         sign: null,
//         till: new Date().toISOString().split('T')[0], // Set the current date
//       });

//     } catch (error) {
//       if (error.response && error.response.data) {
//         // Show validation errors from the backend
//         const errors = error.response.data.message;
//         Object.values(errors).forEach((msg) => {
//           toast.error(msg[0]); // Show error message in toast
//         });
//       } else {
//         toast.error('Something went wrong, please try again.');
//       }
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white border border-gray-300 shadow-lg">
//       <table className="w-full">
//         <tr className="top">
//           <td colSpan="2">
//             <table className="w-full">
//               <tr>
//                 <td className="title">
//                   <img
//                     src="/assets/images/header/logo.webp"
//                     alt="Company logo"
//                     className="w-full max-w-[300px] mx-auto"
//                   />
//                 </td>

//                 <td className="text-right">
//                   <p><b>Broker Code: IRDA/ DB 693/17</b></p>
//                   <p><b>GSTIN: 23AAFCN3874P1ZX</b></p>
//                   <p><b>CIN: U66010MP2016PTC041677</b></p>
//                 </td>
//               </tr>
//             </table>
//           </td>
//         </tr>

//         <tr className="information">
//           <td colSpan="2">
//             <table className="w-full">
//               <tr>
//                 <td>
//                   <p><b>Address: Plot No. 1, 3rd Floor, Lalwani Complex, Vidya Nagar, Bhopal - 462026</b></p>
//                   <p><b>Contact: 0755-4911343, +919302182475</b></p>
//                 </td>
//               </tr>
//             </table>
//           </td>
//         </tr>
//       </table>

//       <form onSubmit={handleSubmit} encType="multipart/form-data" className="mt-8">
//         <h2 className="text-xl text-center font-semibold mb-4 underline">MANDATE LETTER TO ACT AS AN INSURANCE BROKER</h2>
//         <h4 className="text-center font-medium mb-4 underline">TO WHOMSOEVER IT MAY CONCERN</h4>

//         <p className="text-left mb-4">
//           <label className="text-sm">
//             I / We hereby appoint M/s Notion Insurance Broker Pvt. Ltd. as my insurance broker in connection with my General/Life Insurance requirements till{' '}
//             <input
//               type="date"
//               name="till"
//               required
//               className="border-b-2 border-black ml-2 text-sm"
//               value={formData.till}
//               onChange={handleChange}
//             />
//             .
//           </label>
//         </p>

//         <p className="text-left mb-4">
//           <label className="text-sm">
//             M/s Notion Insurance Broker Pvt. Ltd. is hereby authorized to negotiate directly with any or multiple insurance companies on my/our behalf, regarding my/our present and future insurance requirements.
//           </label>
//         </p>

//         <p className="text-left mb-4">
//           <label className="text-sm">
//             This letter will remain in force until cancelled in writing by me/us.
//           </label>
//         </p>

//         <p className="text-left mb-4">
//           <label className="text-sm">Signature: </label>
//           <input
//             type="file"
//             name="sign"
//             required
//             className="ml-2"
//             onChange={handleChange}
//           />
//         </p>

//         <p className="text-left mb-4">
//           <label className="text-sm">Name: </label>
//           <input
//             type="text"
//             name="name"
//             required
//             className="border-b-2 border-black ml-2 w-full sm:w-1/2 text-sm"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </p>

//         <p className="text-left mb-4">
//           <label className="text-sm">Address: </label>
//           <input
//             type="text"
//             name="address"
//             required
//             className="border-b-2 border-black ml-2 w-full sm:w-1/2 text-sm"
//             value={formData.address}
//             onChange={handleChange}
//           />
//         </p>

//         <p className="text-left mb-4">
//           <label className="text-sm">M. No: </label>
//           <input
//             type="text"
//             name="contact"
//             required
//             className="border-b-2 border-black ml-2 w-full sm:w-1/2 text-sm"
//             value={formData.contact}
//             onChange={handleChange}
//           />
//         </p>

//         <p className="text-left mb-4">
//           <label className="text-sm">Email Id: </label>
//           <input
//             type="email"
//             name="email"
//             required
//             className="border-b-2 border-black ml-2 w-full sm:w-1/2 text-sm"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </p>

//         <div className="flex justify-center">
//           <input
//             type="submit"
//             value="Submit"
//             className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-700"
//           />
//         </div>
//       </form>

//       {/* ToastContainer for displaying toasts */}
//       <ToastContainer />
//     </div>
//   );
// };

// export default Mandate;



import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDataContext } from '../../Context/DataContext';
import { Button } from '@material-tailwind/react';

const Mandate = () => {
  const { submitMandate, loading } = useDataContext();
  const currentDate = new Date().toISOString().split('T')[0]; // Get the current date in YYYY-MM-DD format
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    contact: '',
    sign: null,
    till: currentDate // Set the current date as default
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'sign') {
      setFormData({ ...formData, sign: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare FormData
    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("address", formData.address);
    form.append("mobile_number", formData.contact);
    form.append("signature_file", formData.sign);
    form.append("date", formData.till);

    // Submit using context function
    try {
      await submitMandate(form);
      toast.success("Mandate created successfully!");
      // Reset form data
      setFormData({
        name: "",
        email: "",
        address: "",
        contact: "",
        sign: null,
        till: currentDate,
      });
    } catch (error) {
      // Display error messages
      if (Array.isArray(error)) {
        error.forEach((msg) => toast.error(msg));
      } else {
        toast.error(error || "Something went wrong, please try again.");
      }
    }
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const form = new FormData();
  //   form.append('name', formData.name);
  //   form.append('email', formData.email);
  //   form.append('address', formData.address);
  //   form.append('mobile_number', formData.contact);
  //   form.append('signature_file', formData.sign);
  //   form.append('date', formData.till);

  //   try {
  //     const response = await axios.post('http://127.0.0.1:8000/api/mandates', form, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });

  //     toast.success('Mandate created successfully!');
  //     setFormData({
  //       name: '',
  //       email: '',
  //       address: '',
  //       contact: '',
  //       sign: null,
  //       till: currentDate, // Ensure the date remains the current date
  //     });

  //   } catch (error) {
  //     if (error.response && error.response.data) {
  //       const errors = error.response.data.message;
  //       Object.values(errors).forEach((msg) => {
  //         toast.error(msg[0]);
  //       });
  //     } else {
  //       toast.error('Something went wrong, please try again.');
  //     }
  //   }
  // };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white border border-gray-300 shadow-lg">
      <table className="w-full">
        <tr className="top">
          <td colSpan="2">
            <table className="w-full">
              <tr>
                <td className="title">
                  <img
                    src="/assets/images/header/logo.webp"
                    alt="Company logo"
                    className="w-full max-w-[300px] mx-auto"
                  />
                </td>

                <td className="text-right">
                  <p><b>Broker Code: IRDA/ DB 693/17</b></p>
                  <p><b>GSTIN: 23AAFCN3874P1ZX</b></p>
                  <p><b>CIN: U66010MP2016PTC041677</b></p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr className="information">
          <td colSpan="2">
            <table className="w-full">
              <tr>
                <td>
                  <p><b>Address: Plot No. 1, 3rd Floor, Lalwani Complex, Vidya Nagar, Bhopal - 462026</b></p>
                  <p><b>Contact: 0755-4911343, +919302182475</b></p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <form onSubmit={handleSubmit} encType="multipart/form-data" className="mt-8 px-5 w-full">
        <h2 className="text-xl text-center font-semibold mb-4 underline">MANDATE LETTER TO ACT AS AN INSURANCE BROKER</h2>
        <h4 className="text-center font-medium mb-4 underline">TO WHOMSOEVER IT MAY CONCERN</h4>

        <p className="text-left mb-4">
          <label className="text-sm">
            I / We hereby appoint M/s Notion Insurance Broker Pvt. Ltd. as my insurance broker in connection with my General/Life Insurance requirements till{' '}
            <span>{formData.till}</span> {/* Display the current date */}
            .
          </label>
        </p>

        <p className="text-left mb-4">
          <label className="text-sm">
            M/s Notion Insurance Broker Pvt. Ltd. is hereby authorized to negotiate directly with any or multiple insurance companies on my/our behalf, regarding my/our present and future insurance requirements.
          </label>
        </p>

        <p className="text-left mb-4">
          <label className="text-sm">
            This letter will remain in force until cancelled in writing by me/us.
          </label>
        </p>
        
        <p className="text-left flex justify-between w-[30vw]  mb-4">
          <label className="text-sm w-[15%]">Signature: </label>
          <input
            type="file"
            name="sign"
            required
            className="ml-2 w-[85%]"
            onChange={handleChange}
          />
        </p>

        <p className="text-left flex justify-between w-[30vw] mb-4">
          <label className="text-sm w-[15%]">Name : </label>
          <input
            type="text"
            name="name"
            required
            className="border-b-2 border-black ml-2 w-full sm:w-[85%] text-sm"
            value={formData.name}
            onChange={handleChange}
          />
        </p>

        <p className="text-left mb-4 w-[30vw] flex justify-between">
          <label className="text-sm w-[15%]">Address: </label>
          <input
            type="text"
            name="address"
            required
            className="border-b-2 border-black ml-2 w-full sm:w-[85%] text-sm"
            value={formData.address}
            onChange={handleChange}
          />
        </p>

        <p className="text-left mb-4 w-[30vw] flex justify-between">
          <label className="text-sm w-[15%]">M. No: </label>
          <input
            type="text"
            name="contact"
            required
            className="border-b-2 border-black ml-2 w-full sm:w-[85%] text-sm"
            value={formData.contact}
            onChange={handleChange}
          />
        </p>

        <p className="text-left mb-4 w-[30vw] flex justify-between">
          <label className="text-sm w-[15%]">Email Id: </label>
          <input
            type="email"
            name="email"
            required
            className="border-b-2 border-black ml-2 w-full sm:w-[85%] text-sm"
            value={formData.email}
            onChange={handleChange}
          />
        </p>

        <div className="flex justify-center">
        <Button type="submit" className='bg-blue-600' disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </Button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Mandate;
