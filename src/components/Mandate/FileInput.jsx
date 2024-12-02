import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const FileInput = ({ label, name, onFileChange, required = false }) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [file, setFile] = useState(null); // Store the file object
  const signaturePadRef = useRef(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile); // Save the uploaded file to state
      if (onFileChange) {
        onFileChange(name, uploadedFile); // Notify parent component
      }
    }
  };

  const saveSignature = () => {
    if (signaturePadRef.current && !signaturePadRef.current.isEmpty()) {
      const dataURL = signaturePadRef.current.toDataURL();

      // Convert Data URL to Blob
      const blob = dataURLToBlob(dataURL);

      // Create a File object from the Blob
      const signatureFile = new File([blob], "signature.png", { type: "image/png" });

      setFile(signatureFile); // Save the signature file to state
      setIsDrawing(false); // Exit drawing mode

      if (onFileChange) {
        onFileChange(name, signatureFile); // Notify parent component
      }
    }
  };

  const clearSignature = () => {
    if (signaturePadRef.current) {
      signaturePadRef.current.clear();
    }
  };

  const dataURLToBlob = (dataURL) => {
    const parts = dataURL.split(",");
    const mimeType = parts[0].match(/:(.*?);/)[1];
    const byteString = atob(parts[1]);
    const arrayBuffer = new Uint8Array(byteString.length);

    for (let i = 0; i < byteString.length; i++) {
      arrayBuffer[i] = byteString.charCodeAt(i);
    }

    return new Blob([arrayBuffer], { type: mimeType });
  };

  return (
    <div className="text-left flex flex-col md:w-[60vw] xl:w-[30vw] mb-4">
      <label className="text-sm mb-2">{label}:</label>

      {/* Toggle between Upload and Draw */}
      <div className="flex space-x-4 mb-4">
        <button
          type="button"
          className={`px-4 py-2 rounded ${!isDrawing ? "bg-blue-600 text-white" : "bg-gray-300"}`}
          onClick={() => setIsDrawing(false)}
        >
          Upload
        </button>
        <button
          type="button"
          className={`px-4 py-2 rounded ${isDrawing ? "bg-blue-600 text-white" : "bg-gray-300"}`}
          onClick={() => setIsDrawing(true)}
        >
          Draw
        </button>
      </div>

      {isDrawing ? (
        <div>
          <SignatureCanvas
            ref={signaturePadRef}
            penColor="black"
            canvasProps={{
              width: 500,
              height: 200,
              className: "border border-gray-300",
            }}
          />
          <div className="mt-2 flex space-x-4">
            <button
              type="button"
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={saveSignature}
            >
              Save Signature
            </button>
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={clearSignature}
            >
              Clear
            </button>
          </div>
        </div>
      ) : (
        <input
          type="file"
          name={name}
          required={required}
          className="border border-gray-300 p-2 w-full"
          onChange={handleFileChange}
        />
      )}

      {/* File Info Preview */}
      {file && (
        <div className="mt-4">
          <p>
            <strong>File Name:</strong> {file.name}
          </p>
          <p>
            <strong>File Type:</strong> {file.type}
          </p>
        </div>
      )}
    </div>
  );
};

export default FileInput;
