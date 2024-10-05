import React from 'react';
import { Button } from '@material-tailwind/react'; // Make sure you have the correct import for Material Tailwind
import { Link } from 'react-router-dom';

const LinkButtons = ({ text, subtext, imgSrc, link }) => {
  return (
  <a href={link} className="no-underline">
    <Button className={`rounded-lg relative flex px-1 flex-col md:w-32 md:h-28 max-sm:w-24 max-sm:h-28 w-24 h-24 shadow-xl outline-none items-center justify-center overflow-hidden transition-all bg-white hover:scale-105 border border-zinc-200 text-black`}>
      <img className='md:w-10 w-8' src={imgSrc} alt={text} />
      <span className="font-semibold md:text-sm capitalize">{text}</span>
      <span className='md:text-sm font-light text-gray-400 capitalize'>{subtext}</span>
    </Button>
  </a>
  )
}

export default LinkButtons