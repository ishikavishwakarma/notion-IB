import React, { useState } from 'react';
import { MdVerifiedUser } from 'react-icons/md';

const Estimate = () => {
    const [showForm, setShowForm] = useState('carInsurance');
    const [activeButton, setActiveButton] = useState('carInsurance');
    const [animateForm, setAnimateForm] = useState(false);

    const handleButtonClick = (type) => {
        setShowForm(type);
        setActiveButton(type);
        setAnimateForm(true);
    };

    return (
        <div className='w-screen flex flex-col items-center justify-center gap-10 py-20 max-sm:px-2 '>

            <div className='flex flex-col items-center gap-2'>
                <p className='text-sm'><span className='inline-block text-[#7166F5]'><MdVerifiedUser /></span>Get a Free Estimate</p>
                <h1 className='text-[5vw] font-semibold text-center'>Get an Insurance Quote to <br />
                    Get Standard!</h1>
            </div>

            <div className='flex flex-col items-center justify-center w-screen gap-16 max-sm:px-5'>
                <div className='flex flex-wrap items-center justify-center gap-2'>

                    <button className={`rounded-full relative flex px-6 py-3 shadow-xl outline-none  items-center justify-center overflow-hidden ${activeButton === 'carInsurance' ? 'bg-[#7166F5]' : 'bg-[#ffffff]'} ${activeButton === 'carInsurance' ? 'text-white' : 'text-gray-800'} hover:text-white transition-all before:absolute before:-bottom-10 before:h-10 before:w-10 before:rounded-full before:bg-[#7166F5] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56`}
                        onClick={() => handleButtonClick('carInsurance')}>
                        <span className="relative z-10">Car Insurance</span>
                    </button>

                    <button className={`rounded-full relative flex px-6 py-3 shadow-xl outline-none  items-center justify-center overflow-hidden ${activeButton === 'lifeInsurance' ? 'bg-[#7166F5]' : 'bg-[#ffffff]'} ${activeButton === 'lifeInsurance' ? 'text-white' : 'text-gray-800'} hover:text-white transition-all before:absolute before:-bottom-10 before:h-10 before:w-10 before:rounded-full before:bg-[#7166F5] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56`}
                        onClick={() => handleButtonClick('lifeInsurance')}>
                        <span className="relative z-10">Life Insurance</span>
                    </button>

                    <button className={`rounded-full relative flex px-6 py-3 shadow-xl outline-none  items-center justify-center overflow-hidden ${activeButton === 'homeInsurance' ? 'bg-[#7166F5]' : 'bg-[#ffffff]'} ${activeButton === 'homeInsurance' ? 'text-white' : 'text-gray-800'} hover:text-white transition-all before:absolute before:-bottom-10 before:h-10 before:w-10 before:rounded-full before:bg-[#7166F5] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56`}
                        onClick={() => handleButtonClick('homeInsurance')}>
                        <span className="relative z-10">Home Insurance</span>
                    </button>

                    <button className={`rounded-full relative flex px-6 py-3 shadow-xl outline-none  items-center justify-center overflow-hidden ${activeButton === 'healthInsurance' ? 'bg-[#7166F5]' : 'bg-[#ffffff]'} ${activeButton === 'healthInsurance' ? 'text-white' : 'text-gray-800'} hover:text-white transition-all before:absolute before:-bottom-10 before:h-10 before:w-10 before:rounded-full before:bg-[#7166F5] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56`}
                        onClick={() => handleButtonClick('healthInsurance')}>
                        <span className="relative z-10">Health Insurance </span>
                    </button>

                </div>

                {showForm === 'carInsurance' && (
                    <div className={`carInsuranceForm flex gap-10 items-center justify-center w-3/4 max-sm:w-full p-10 max-sm:px-5 border-2 shadow-[#7166F5] hover:shadow-md rounded-lg border-[#7166F5] ${animateForm ? 'animate-form' : ''}`}>
                        <form className='flex flex-col items-start justify-start w-1/2 max-sm:w-full gap-10'>
                            <input className='h-14 px-2 w-full border border-[#7266f5a4] rounded-md outline-none ' type="text" placeholder='Full Name' />
                            <input className='h-14 px-2 w-full border border-[#7266f5a4] rounded-md outline-none ' type="email" placeholder='Email Address' />
                            <select className='h-14 px-2 w-full border border-[#7266f5a4] rounded-md outline-none ' name="insuranceType" id="">
                                <option>Subject Type Insurance</option>
                                <option value="carInsurance">Car Insurance</option>
                                <option value="lifeInsurance">Life Insurance</option>
                                <option value="healthInsurance">Health Insurance</option>
                                <option value="homeInsurance">Home Insurance</option>
                            </select>
                            <button className="rounded-md relative flex px-5 py-3 items-center justify-center overflow-hidden bg-[#7166F5] hover:text-black text-white shadow-2xl transition-all before:absolute before:-bottom-10 before:h-10 before:w-10 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                                <span className="relative z-10">Get a Quote Now</span>
                            </button>
                        </form>
                        <div className='max-sm:hidden w-1/2 flex flex-col items-center gap-3'>
                            <img className='rounded-lg ' src="assets/images/Estimate/car-insurance-two.jpg" alt="" />
                            <p className='text-md font-semibold text-gray-500'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration some form, by injected humour, or randomised words which don't look even</p>
                        </div>
                    </div>

                )}

                {showForm === 'lifeInsurance' && (
                    <div className={`carInsuranceForm flex gap-10 items-center justify-center w-3/4  max-sm:w-full  max-sm:px-5 p-10 border-2 shadow-[#7166F5] hover:shadow-md rounded-lg border-[#7166F5] ${animateForm ? 'animate-form' : ''}`}>
                        <form className='flex flex-col items-start justify-start w-1/2  max-sm:w-full gap-10'>
                            <input className='h-14 px-2 w-full border border-[#7266f5a4] rounded-md outline-none ' type="text" placeholder='Full Name' />
                            <input className='h-14 px-2 w-full border border-[#7266f5a4] rounded-md outline-none ' type="email" placeholder='Email Address' />
                            <select className='h-14 px-2 w-full border border-[#7266f5a4] rounded-md outline-none ' name="insuranceType" id="">
                                <option>Subject Type Insurance</option>
                                <option value="carInsurance">Car Insurance</option>
                                <option value="lifeInsurance">Life Insurance</option>
                                <option value="healthInsurance">Health Insurance</option>
                                <option value="homeInsurance">Home Insurance</option>
                            </select>
                            <button className="rounded-md relative flex px-5 py-3 items-center justify-center overflow-hidden bg-[#7166F5] hover:text-black text-white shadow-2xl transition-all before:absolute before:-bottom-10 before:h-10 before:w-10 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                                <span className="relative z-10">Get a Quote Now</span>
                            </button>
                        </form>
                        <div className='w-1/2 max-sm:hidden flex flex-col items-center gap-3'>
                            <img className='rounded-lg ' src="assets/images/Estimate/life-insurance-two.jpg" alt="" />
                            <p className='text-md font-semibold text-gray-500'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration some form, by injected humour, or randomised words which don't look even</p>
                        </div>
                    </div>
                )}

                {showForm === 'homeInsurance' && (
                    <div className={`carInsuranceForm flex gap-10 items-center justify-center w-3/4  max-sm:w-full  max-sm:px-5 p-10 border-2 shadow-[#7166F5] hover:shadow-md rounded-lg border-[#7166F5] ${animateForm ? 'animate-form' : ''}`}>
                        <form className='flex flex-col items-start justify-start w-1/2  max-sm:w-full gap-10'>
                            <input className='h-14 px-2 w-full border border-[#7266f5a4] rounded-md outline-none ' type="text" placeholder='Full Name' />
                            <input className='h-14 px-2 w-full border border-[#7266f5a4] rounded-md outline-none ' type="email" placeholder='Email Address' />
                            <select className='h-14 px-2 w-full border border-[#7266f5a4] rounded-md outline-none ' name="insuranceType" id="">
                                <option>Subject Type Insurance</option>
                                <option value="carInsurance">Car Insurance</option>
                                <option value="lifeInsurance">Life Insurance</option>
                                <option value="healthInsurance">Health Insurance</option>
                                <option value="homeInsurance">Home Insurance</option>
                            </select>
                            <button className="rounded-md relative flex px-5 py-3 items-center justify-center overflow-hidden bg-[#7166F5] hover:text-black text-white shadow-2xl transition-all before:absolute before:-bottom-10 before:h-10 before:w-10 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                                <span className="relative z-10">Get a Quote Now</span>
                            </button>
                        </form>
                        <div className='max-sm:hidden w-1/2 flex flex-col items-center gap-3'>
                            <img className='rounded-lg ' src="assets/images/Estimate/home-insurance-two.jpg" alt="" />
                            <p className='text-md font-semibold text-gray-500'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration some form, by injected humour, or randomised words which don't look even</p>
                        </div>
                    </div>
                )}

                {showForm === 'healthInsurance' && (
                    <div className={`carInsuranceForm flex gap-10 items-center justify-center w-3/4  max-sm:w-full  max-sm:px-5 p-10 border-2 shadow-[#7166F5] hover:shadow-md rounded-lg border-[#7166F5] ${animateForm ? 'animate-form' : ''}`}>
                        <form className='flex flex-col items-start justify-start w-1/2  max-sm:w-full gap-10'>
                            <input className='h-14 px-2 w-full border border-[#7266f5a4] rounded-md outline-none ' type="text" placeholder='Full Name' />
                            <input className='h-14 px-2 w-full border border-[#7266f5a4] rounded-md outline-none ' type="email" placeholder='Email Address' />
                            <select className='h-14 px-2 w-full border border-[#7266f5a4] rounded-md outline-none ' name="insuranceType" id="">
                                <option>Subject Type Insurance</option>
                                <option value="carInsurance">Car Insurance</option>
                                <option value="lifeInsurance">Life Insurance</option>
                                <option value="healthInsurance">Health Insurance</option>
                                <option value="homeInsurance">Home Insurance</option>
                            </select>
                            <button className="rounded-md relative flex px-5 py-3 items-center justify-center overflow-hidden bg-[#7166F5] hover:text-black text-white shadow-2xl transition-all before:absolute before:-bottom-10 before:h-10 before:w-10 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                                <span className="relative z-10">Get a Quote Now</span>
                            </button>
                        </form>
                        <div className='w-1/2  max-sm:hidden flex flex-col items-center gap-3'>
                            <img className='rounded-lg ' src="assets/images/Estimate/health-insurance-two.jpg" alt="" />
                            <p className='text-md font-semibold text-gray-500'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration some form, by injected humour, or randomised words which don't look even</p>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Estimate;