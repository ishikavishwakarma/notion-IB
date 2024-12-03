import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDataContext } from '../../Context/DataContext';
import { Button } from '@material-tailwind/react';
import SignatureCanvas from 'react-signature-canvas';
import { useRef, useState } from 'react';
import LoadingOverlay from '../LoadingOverlay';
import { Link } from 'react-router-dom';

const Mandate = () => {
  const { submitMandate, loading } = useDataContext();
  const currentDate = new Date().toISOString().split("T")[0]; // Get the current date in YYYY-MM-DD format
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
    sign: null,
    till: currentDate, // Set the current date as default
  });
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);  // To toggle the signature canvas visibility
  const [isSignatureSaved, setIsSignatureSaved] = useState(false); // To check if signature is saved
  const fileInputRef = useRef(null); // Ref for file input
  const signaturePadRef = useRef(null); // Ref for signature pad (SignatureCanvas)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, sign: file });
      updateFileInput(file);
    }
  };

  const handleSignatureToggle = () => {
    setIsCanvasOpen(!isCanvasOpen);  // Toggle the canvas visibility
  };

  const handleSignatureSave = () => {
    if (signaturePadRef.current.isEmpty()) {
      alert("Please draw your signature first!");
      return;
    }

    // Convert the drawn signature into a file or Data URL
    const signatureDataURL = signaturePadRef.current.getTrimmedCanvas().toDataURL();
    const signatureFile = dataURLToFile(signatureDataURL, 'signature.png');
    setFormData({ ...formData, sign: signatureFile });

    // Manually trigger the file input change event
    updateFileInput(signatureFile);

    setIsSignatureSaved(true); // Mark signature as saved

    // Close the signature canvas after saving
    setIsCanvasOpen(false);
  };

  const updateFileInput = (file) => {
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
    fileInputRef.current.files = dataTransfer.files;
  };

  const dataURLToFile = (dataURL, filename) => {
    const [metadata, base64Data] = dataURL.split(',');
    const mimeType = metadata.match(/:(.*?);/)[1];
    const binaryData = atob(base64Data);
    const byteArray = new Uint8Array(binaryData.length);
    for (let i = 0; i < binaryData.length; i++) {
      byteArray[i] = binaryData.charCodeAt(i);
    }
    return new File([byteArray], filename, { type: mimeType });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.sign) {
      toast.error("Please upload or draw your signature before submitting.");
      return;
    }
    // Prepare FormData
    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("address", formData.address);
    form.append("mobile_number", formData.contact);

    // Add signature: use the file if it's a file, else use Data URL
    if (formData.sign instanceof File) {
      form.append("signature_file", formData.sign);
    } else if (typeof formData.sign === 'string') {
      form.append("signature_data", formData.sign);
    }

    form.append("date", formData.till);

    try {
      await submitMandate(form);
      toast.success("Mandate created successfully!");
      setFormData({
        name: "",
        email: "",
        address: "",
        contact: "",
        sign: null,
        till: currentDate,
      });
    } catch (error) {
      if (Array.isArray(error)) {
        error.forEach((msg) => toast.error(msg));
      } else {
        toast.error(error || "Something went wrong, please try again.");
      }
    }
  };
  return (
    <div className="max-w-4xl mx-auto py-6 px-4 bg-white border border-gray-300 shadow-lg">
      <LoadingOverlay loading={loading} />
      <table className="w-full">
        <tr className="top ">
          <td colSpan="2">
            <table className="w-full">
              <tr className='flex md:justify-between justify-start items-start md:items-center flex-col md:flex-row w-full'>
                <td className="title">
                  <img
                    src="/assets/images/header/logo.webp"
                    alt="Company logo"
                    className="w-full max-w-[300px] mx-auto"
                  />
                </td>

                <td className="md:text-right ">
                  <p><b>Broker Code: IRDA/ DB 693/17</b></p>
                  <p><b>GSTIN: 23AAFCN3874P1ZX</b></p>
                  <p><b>CIN: U66010MP2016PTC041677</b></p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr className="information ">
          <td colSpan="2">
            <table className="w-full md:text-base ">
              <tr>
                <td className='pt-2'>
                  <p><b>Address: Plot No. 1, 3rd Floor, Lalwani Complex, Vidya Nagar, Bhopal - 462026</b></p>
                  <p><b>Contact: <Link
                   to="tel:0755-4911343"
                  >
                  0755-4911343
                  </Link> , <Link
                  to="tel:9302182475"
                  >
                  +919302182475
                  </Link> </b></p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <form onSubmit={handleSubmit} encType="multipart/form-data" className="mt-8 px-4 w-full">
        <h2 className="text-xl text-center font-bold mb-4 underline">MANDATE LETTER TO ACT AS AN INSURANCE BROKER</h2>
        <h3 className="text-center font-semibold mb-4 underline">TO WHOMSOEVER IT MAY CONCERN</h3>

        <p className="text-left mb-4">
          <label className="text-base">
            I / We hereby appoint M/s Notion Insurance Broker Pvt. Ltd. as my insurance broker in connection with my General/Life Insurance requirements till{' '}
            <span>{formData.till}</span> {/* Display the current date */}
            .
          </label>
        </p>

        <p className="text-left mb-4">
          <label className="text-base">
            M/s Notion Insurance Broker Pvt. Ltd. is hereby authorized to negotiate directly with any or multiple insurance companies on my/our behalf, regarding my/our present and future insurance requirements.
          </label>
        </p>

        <p className="text-left mb-4">
          <label className="text-base">
            This letter will remain in force until cancelled in writing by me/us.
          </label>
        </p>
       {/* Signature Input */}
       <div className="flex flex-col">

       <div className="mb-4 text-left flex md:w-[60vw] items-center lg:justify-between w-full xl:w-[30vw]">
          <label className="text-sm md:w-1/6 w-1/4 xl:w-[20%]">Signature :</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            ref={fileInputRef}
           className="ml-2  w-full lg:block hidden"
          />
            <Button
              type="button"
              className="px-4 py-2 flex lg:hidden border w-fit bg-blue-600 text-white"
              onClick={handleSignatureToggle}
            >
              {isCanvasOpen ? 'Close' : 'Draw Signature'}
            </Button>
         
        </div>
          {/* Signature Pad - Visible only when isCanvasOpen is true */}
          {isCanvasOpen && (
            <div className="mt-4">
              {/* SignaturePad.js */}
              <SignatureCanvas
                ref={signaturePadRef}
                
                canvasProps={{
                 
                  className: 'signature-canvas border-2 mb-2  border-gray-400',
                  willReadFrequently: true, // Set the willReadFrequently attribute for performance optimization
                }}
              />
          {/* Save Signature Button */}
          <div className="flex md:w-[60vw] justify-between pb-5">

              <div>
                <Button
                  type="button"
                  onClick={() => signaturePadRef.current.clear()}
                  className="mt-2 text-sm py-2 px-4"
                >
                  Clear
                </Button>
              </div>
          {isCanvasOpen && (
            <Button
              type="button"
              className="mt-2 bg-green-600 text-white py-2 px-4"
              onClick={handleSignatureSave}
            >
              Save Signature
            </Button>
          )}
          </div>
            </div>
          )}
          {/* Show uploaded signature info */}
          {formData.sign && (
            <div className="my-2">
              <p className="text-base {text-green-500}">{isSignatureSaved ? 'Signature saved successfully!' : 'Signature uploaded!'}</p>
            </div>
          )}
       </div>

        <p className="text-left flex md:w-[60vw] justify-between w-full xl:w-[30vw] mb-4">
          <label className="text-base md:w-1/6 w-1/4 xl:w-[15%]">Name : </label>
          <input
            type="text"
            name="name"
            required
            className="border-b-2 w-full border-black ml-2  xl:w-[85%] text-sm"
            value={formData.name}
            onChange={handleChange}
          />
        </p>

        <p className="text-left mb-4 md:w-[60vw] xl:w-[30vw] flex justify-between">
          <label className="text-base md:w-1/6 w-1/4 xl:w-[15%]">Address: </label>
          <input
            type="text"
            name="address"
            required
            className="border-b-2 border-black ml-2 w-full xl:w-[85%] text-sm"
            value={formData.address}
            onChange={handleChange}
          />
        </p>

        <p className="text-left mb-4 w-full md:w-[60vw] xl:w-[30vw] flex justify-between">
          <label className="text-base md:w-1/6 w-1/4 xl:w-[15%]">M. No: </label>
          <input
            type="text"
            name="contact"
            required
            className="border-b-2 border-black ml-2 w-full xl:w-[85%] text-sm"
            value={formData.contact}
            onChange={handleChange}
          />
        </p>

        <p className="text-left mb-4 w-full md:w-[60vw] xl:w-[30vw] flex justify-between">
          <label className="text-base md:w-1/6 w-1/4 xl:w-[15%]">Email Id: </label>
          <input
            type="email"
            name="email"
            required
            className="border-b-2 border-black ml-2 w-full xl:w-[85%] text-sm"
            value={formData.email}
            onChange={handleChange}
          />
        </p>

        <div className="flex justify-center">
        <Button type="submit" className='bg-blue-600' >
        {loading ? "Submitting..." : "Submit"}
      </Button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Mandate;
