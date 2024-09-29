import React from 'react';

const Workflow = () => {
  const steps = [
    { number: '01', title: 'Select insurance', description: 'Lorem Ipsum is simply free dummy text of the printing and amet picing', icon: '' },
    { number: '02', title: 'Schedule meeting', description: 'Lorem Ipsum is simply free dummy text of the printing and amet picing', icon: '' },
    { number: '03', title: 'Meet agent', description: 'Lorem Ipsum is simply free dummy text of the printing and amet picing', icon: '' },
    { number: '04', title: 'Get insurance', description: 'Lorem Ipsum is simply free dummy text of the printing and amet picing', icon: '' },
  ];

  return (
    <div className="mx-auto p-6 w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/2 flex flex-col gap-20 items-center justify-center">
      <h2 className="text-center text-3xl font-bold py-5">Our easy work process in 4 steps</h2>
      <div className="w-full flex relative items-center justify-between flex-wrap md:flex-nowrap">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center w-full md:w-1/2 lg:w-1/4 xl:w-1/4 mb-6 md:mb-0">
            <div className="relative flex justify-center items-center w-28 h-28 bg-blue-500 text-white rounded-full mb-4">
              {step.icon}
              <div className='p-1 border rounded-full text-xs absolute top-0 right-0 bg-orange-700'>
                {step.number}
              </div>
            </div>
            <div className="text-lg font-semibold mb-2">{step.title}</div>
            {/* <p className="text-gray-500 text-sm">{step.description}</p> */}
          </div>
        ))}
      </div>
      <div className='w-3/4 pl-3  border rounded-xl flex items-center justify-between overflow-hidden'>
        <input className='outline-none pl-5' type="text" placeholder='Do not hesitate, contact us for better future life.' />
        <button className='px-5 py-2 bg-blue-700 text-white font-semibold'>Get a Quote</button>
      </div>
    </div>
  );
};

export default Workflow;