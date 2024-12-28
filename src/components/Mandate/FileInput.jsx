import { Button } from '@material-tailwind/react';
import React from 'react';
import SignatureCanvas from 'react-signature-canvas';
const FileInput = ({
  isCanvasOpen,
  handleFileChange,
  handleSignatureToggle,
  handleSignatureSave,
  signaturePadRef,
  isSignatureSaved,
  formData,
}) => {
  return (
    <div className="flex flex-col">
      <div className="mb-4 text-left flex md:w-[60vw] items-center lg:justify-between w-full xl:w-[30vw]">
        <label className="text-sm md:w-1/6 w-1/4 xl:w-[20%]">Signature:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="ml-2 w-full lg:block hidden"
        />

        <Button
          type="button"
          className="px-4 py-2 flex lg:hidden border w-fit bg-blue-600 text-white"
          onClick={handleSignatureToggle}
        >
          {isCanvasOpen ? 'Close Signature Pad' : 'Draw Signature'}
        </Button>
      </div>

      {isCanvasOpen && (
        <div className="mt-4">
          <SignatureCanvas
            ref={signaturePadRef}
            canvasProps={{
              width: 300,
              height: 150,
              className: 'border-2 mb-2 border-gray-400',
              willReadFrequently: true,
            }}
          />
          <div className="flex md:w-[60vw] justify-between pb-5">
            <Button
              type="button"
              onClick={() => signaturePadRef.current.clear()}
              className="mt-2 text-sm py-2 px-4"
            >
              Clear
            </Button>
            <Button
              type="button"
              className="mt-2 bg-green-600 text-white py-2 px-4"
              onClick={handleSignatureSave}
            >
              Save Signature
            </Button>
          </div>
        </div>
      )}

      {formData.sign && (
        <div className="my-2">
          <p className="text-sm text-green-500">
            {isSignatureSaved ? 'Signature saved successfully!' : 'Signature uploaded!'}
          </p>
        </div>
      )}
    </div>
  );
};

export default FileInput;
