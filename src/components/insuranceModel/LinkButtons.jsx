import React from 'react';
import { Button } from '@material-tailwind/react'; // Make sure you have the correct import for Material Tailwind

const LinkButoons = ({ text, subtext, imgSrc, link }) => {
  return (
    <a href={link} className="no-underline">
    <Button className={`rounded-lg relative flex flex-col max-sm:w-24 max-sm:h-28 w-32 h-28 shadow-xl outline-none items-center justify-center overflow-hidden transition-all bg-white hover:scale-110 border border-zinc-200 text-black`}>
      <img className='w-10' src={imgSrc} alt={text} />
      <span className="font-semibold text-sm capitalize">{text}</span>
      <span className='text-sm font-light text-gray-400 capitalize'>{subtext}</span>
    </Button>
  </a>
  )
}

export default LinkButoons