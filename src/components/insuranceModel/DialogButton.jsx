import React from "react";
import { Button } from "@material-tailwind/react";

const DialogButton = ({ handleOpen }) => {
  return (
    <Button onClick={handleOpen}  className={`rounded-lg relative flex flex-col max-sm:w-24 max-sm:h-28 w-32 h-28 shadow-xl outline-none items-center justify-center overflow-hidden transition-all bg-white hover:scale-110 border border-zinc-200 text-black `}>
     <img className='w-10' src="assets/images/Products/more.svg" alt="More Insurance" />
      <span className="font-semibold text-sm capitalize">More</span>
      <span className='text-sm font-light text-gray-400 capitalize'>Insurance</span>
   </Button>
  
  )
}

export default DialogButton