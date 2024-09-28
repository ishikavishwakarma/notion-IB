import React, { useState } from 'react';
import { MdVerifiedUser } from 'react-icons/md';
import { RxCross2 } from "react-icons/rx";
import DialogButton from './insuranceModel/DialogButton';
import InsuranceModel from './insuranceModel/InsuranceModel';

const Products = () => {
    const [showForm, setShowForm] = useState('none');
    const [activeButton, setActiveButton] = useState('none');
    const [animateForm, setAnimateForm] = useState(false);
    const [category, setCategory] = useState('generalInsurance');

    const handleButtonClick = (type) => {
        setShowForm(type);
        setActiveButton(type);
        setAnimateForm(true);
    };
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
  
    
    const handleCategory = (type) => {

        setCategory(type)
    }

    return (
        <div className='flex flex-col items-center justify-center py-10 gap-2 max-sm:px-2'>

            <div className='relative flex flex-wrap items-center justify-center max-sm:gap-3 gap-8 w-4/5 max-sm:w-full  py-10 '>

                <div>
                    <button className={`rounded-lg border relat flex flex-col max-sm:w-24 max-sm:h-28 w-32 h-28 shadow-xl outline-none items-center justify-center overflow-hidden ${activeButton === 'lifeInsurance' ? 'hover:scale-90' : 'scale-100'} ${activeButton === 'lifeInsurance' ? 'border-blue-200' : 'bg-[#ffffff]'} ${activeButton === 'lifeInsurance' ? 'text-black' : 'text-gray-800'}  transition-all hover:scale-110 `}
                        onClick={() => handleButtonClick('lifeInsurance')}>
                        <img className='w-10' src="assets/images/Products/life-balance.gif   " alt="" />
                        <span className="font-semibold max-sm:text-sm">Life</span>
                        <span className='text-sm font-light text-gray-400'>Insurance</span>
                    </button>

                    {showForm === 'lifeInsurance' && (
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 lifeInsuranceForm bg-white ${animateForm ? 'animate-form' : ''} flex flex-col gap-5 items-center justify-center p-10 pt-2 shadow-xl rounded-lg`}>
                            <div className='flex items-center justify-between w-full'>
                                <span>Life Insurance</span>
                                <span onClick={() => { setShowForm('none'), setActiveButton('none'), setAnimateForm(true); }} className="p-2 text-lg cursor-pointer"><RxCross2 /></span>
                            </div>
                            <form className='flex flex-col items-start justify-start w-[40vw] gap-6 pt-2'>
                                <input className='h-10 px-2 w-full border bg-white border-[#383838a4] rounded-md outline-none ' type="text" placeholder='Full Name' />
                                <input className='h-10 px-2 w-full border bg-white border-[#474747cb] rounded-md outline-none ' type="email" placeholder='Email Address' />
                                <select className='h-10 px-2 w-full border bg-white border-[#4d4d4da4] rounded-md outline-none ' name="insuranceType" id="">
                                    <option>Subject Type Insurance</option>
                                    <option value="carInsurance">Car Insurance</option>
                                    <option value="lifeInsurance">Life Insurance</option>
                                    <option value="healthInsurance">Health Insurance</option>
                                    <option value="homeInsurance">Home Insurance</option>
                                </select>
                                <button class="rounded-md relative flex px-4 py-2 items-center justify-center overflow-hidden bg-[#7166F5] hover:text-black text-white shadow-2xl transition-all before:absolute before:-bottom-10 before:h-10 before:w-10 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                                    <span class="relative z-10">Get a Quote Now</span>
                                </button>
                            </form>
                        </div>

                    )}
                </div>

                <div>
                    <button className={`rounded-lg border flex flex-col max-sm:w-24 max-sm:h-28 w-32 h-28 shadow-xl outline-none items-center justify-center overflow-hidden ${activeButton === 'healthInsurance' ? 'hover:scale-90' : 'scale-100'} ${activeButton === 'healthInsurance' ? 'border-blue-200' : 'bg-[#ffffff]'} ${activeButton === 'healthInsurance' ? 'text-black' : 'text-gray-800'}  transition-all hover:scale-110 `}
                        onClick={() => handleButtonClick('healthInsurance')}>
                        <img className='w-10' src="assets/images/Products/heartbeat .gif" alt="" />
                        <span className="font-semibold max-sm:text-sm">Health</span>
                        <span className='text-sm font-light text-gray-400'>Insurance</span>
                    </button>

                    {showForm === 'healthInsurance' && (
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 healthInsuranceForm bg-white ${animateForm ? 'animate-form' : ''} flex flex-col gap-5 items-center justify-center p-10 pt-2 shadow-xl rounded-lg`}>
                            <div className='flex items-center justify-between w-full'>
                                <span>Health Insurance</span>
                                <span onClick={() => { setShowForm('none'), setActiveButton('none'), setAnimateForm(true); }} className="p-2 text-lg cursor-pointer"><RxCross2 /></span>
                            </div>
                            <form className='flex flex-col items-start justify-start w-[40vw] gap-6 pt-2'>
                                <input className='h-10 px-2 w-full border bg-white border-[#383838a4] rounded-md outline-none ' type="text" placeholder='Full Name' />
                                <input className='h-10 px-2 w-full border bg-white border-[#474747cb] rounded-md outline-none ' type="email" placeholder='Email Address' />
                                <select className='h-10 px-2 w-full border bg-white border-[#4d4d4da4] rounded-md outline-none ' name="insuranceType" id="">
                                    <option>Subject Type Insurance</option>
                                    <option value="carInsurance">Car Insurance</option>
                                    <option value="lifeInsurance">Life Insurance</option>
                                    <option value="healthInsurance">Health Insurance</option>
                                    <option value="homeInsurance">Home Insurance</option>
                                </select>
                                <button className="rounded-md relative flex px-4 py-2 items-center justify-center overflow-hidden bg-[#7166F5] hover:text-black text-white shadow-2xl transition-all before:absolute before:-bottom-10 before:h-10 before:w-10 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                                    <span class="relative z-10">Get a Quote Now</span>
                                </button>
                            </form>
                        </div>

                    )}
                </div>

                <div>
                    <button className={`rounded-lg border flex flex-col max-sm:w-24 max-sm:h-28 w-32 h-28 shadow-xl outline-none items-center justify-center overflow-hidden ${activeButton === 'InvestmentPlans' ? 'hover:scale-90' : 'scale-100'} ${activeButton === 'InvestmentPlans' ? 'border-blue-200' : 'bg-[#ffffff]'} ${activeButton === 'InvestmentPlans' ? 'text-black' : 'text-gray-800'}  transition-all hover:scale-110 `}
                        onClick={() => handleButtonClick('InvestmentPlans')}>
                        <img className='w-10' src="assets/images/Products/advance.gif" alt="" />
                        <span className='text-sm font-light text-gray-400'>Investment Plans</span>
                    </button>

                    {showForm === 'InvestmentPlans' && (
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 InvestmentPlansForm bg-white ${animateForm ? 'animate-form' : ''} flex flex-col gap-5 items-center justify-center p-10 pt-2 shadow-xl rounded-lg`}>
                            <div className='flex items-center justify-between w-full'>
                                <span>Investment plans</span>
                                <span onClick={() => { setShowForm('none'), setActiveButton('none'), setAnimateForm(true); }} className="p-2 text-lg cursor-pointer"><RxCross2 /></span>
                            </div>
                            <form className='flex flex-col items-start justify-start w-[40vw] gap-6 pt-2'>
                                <input className='h-10 px-2 w-full border bg-white border-[#383838a4] rounded-md outline-none ' type="text" placeholder='Full Name' />
                                <input className='h-10 px-2 w-full border bg-white border-[#474747cb] rounded-md outline-none ' type="email" placeholder='Email Address' />
                                <select className='h-10 px-2 w-full border bg-white border-[#4d4d4da4] rounded-md outline-none ' name="insuranceType" id="">
                                    <option>Subject Type Insurance</option>
                                    <option value="carInsurance">Car Insurance</option>
                                    <option value="lifeInsurance">Life Insurance</option>
                                    <option value="healthInsurance">Health Insurance</option>
                                    <option value="homeInsurance">Home Insurance</option>
                                </select>
                                <button class="rounded-md relative flex px-4 py-2 items-center justify-center overflow-hidden bg-[#7166F5] hover:text-black text-white shadow-2xl transition-all before:absolute before:-bottom-10 before:h-10 before:w-10 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                                    <span class="relative z-10">Get a Quote Now</span>
                                </button>
                            </form>
                        </div>

                    )}
                </div>

                <div>
                    <button className={`rounded-lg border flex flex-col max-sm:w-24 max-sm:h-28 w-32 h-28 shadow-xl outline-none items-center justify-center overflow-hidden ${activeButton === 'carInsurance' ? 'hover:scale-90' : 'scale-100'} ${activeButton === 'carInsurance' ? 'border-blue-200' : 'bg-[#ffffff]'} ${activeButton === 'carInsurance' ? 'text-black' : 'text-gray-800'}  transition-all hover:scale-110 `}
                        onClick={() => handleButtonClick('carInsurance')}>
                        <img className='w-10' src="assets/images/Products/jeep.gif" alt="" />
                        <span className="font-semibold max-sm:text-sm">Car</span>
                        <span className='text-sm font-light text-gray-400'>Insurance</span>
                    </button>

                    {showForm === 'carInsurance' && (
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 carInsuranceForm bg-white ${animateForm ? 'animate-form' : ''} flex flex-col gap-5 items-center justify-center p-10 pt-2 shadow-xl rounded-lg`}>
                            <div className='flex items-center justify-between w-full'>
                                <span>Car Insurance</span>
                                <span onClick={() => { setShowForm('none'), setActiveButton('none'), setAnimateForm(true); }} className="p-2 text-lg cursor-pointer"><RxCross2 /></span>
                            </div>
                            <form className='flex flex-col items-start justify-start w-[40vw] gap-6 pt-2'>
                                <input className='h-10 px-2 w-full border bg-white border-[#383838a4] rounded-md outline-none ' type="text" placeholder='Full Name' />
                                <input className='h-10 px-2 w-full border bg-white border-[#474747cb] rounded-md outline-none ' type="email" placeholder='Email Address' />
                                <select className='h-10 px-2 w-full border bg-white border-[#4d4d4da4] rounded-md outline-none ' name="insuranceType" id="">
                                    <option>Subject Type Insurance</option>
                                    <option value="carInsurance">Car Insurance</option>
                                    <option value="lifeInsurance">Life Insurance</option>
                                    <option value="healthInsurance">Health Insurance</option>
                                    <option value="homeInsurance">Home Insurance</option>
                                </select>
                                <button class="rounded-md relative flex px-4 py-2 items-center justify-center overflow-hidden bg-[#7166F5] hover:text-black text-white shadow-2xl transition-all before:absolute before:-bottom-10 before:h-10 before:w-10 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                                    <span class="relative z-10">Get a Quote Now</span>
                                </button>
                            </form>
                        </div>

                    )}
                </div>

                <div>
                    <button className={`rounded-lg border flex flex-col max-sm:w-24 max-sm:h-28 w-32 h-28 shadow-xl outline-none items-center justify-center overflow-hidden ${activeButton === 'bikeInsurance' ? 'hover:scale-90' : 'scale-100'} ${activeButton === 'bikeInsurance' ? 'border-blue-200' : 'bg-[#ffffff]'} ${activeButton === 'bikeInsurance' ? 'text-black' : 'text-gray-800'}  transition-all hover:scale-110 `}
                        onClick={() => handleButtonClick('bikeInsurance')}>
                        <img className='w-10' src="assets/images/Products/bike.gif" alt="" />
                        <span className="font-semibold max-sm:text-sm">2 Wheeler</span>
                        <span className='text-sm font-light text-gray-400'>Insurance</span>
                    </button>

                    {showForm === 'bikeInsurance' && (
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bikeInsuranceForm bg-white ${animateForm ? 'animate-form' : ''} flex flex-col gap-5 items-center justify-center p-10 pt-2 shadow-xl rounded-lg`}>
                            <div className='flex items-center justify-between w-full'>
                                <span>2 Wheeler Insurance</span>
                                <span onClick={() => { setShowForm('none'), setActiveButton('none'), setAnimateForm(true); }} className="p-2 text-lg cursor-pointer"><RxCross2 /></span>
                            </div>
                            <form className='flex flex-col items-start justify-start w-[40vw] gap-6 pt-2'>
                                <input className='h-10 px-2 w-full border bg-white border-[#383838a4] rounded-md outline-none ' type="text" placeholder='Full Name' />
                                <input className='h-10 px-2 w-full border bg-white border-[#474747cb] rounded-md outline-none ' type="email" placeholder='Email Address' />
                                <select className='h-10 px-2 w-full border bg-white border-[#4d4d4da4] rounded-md outline-none ' name="insuranceType" id="">
                                    <option>Subject Type Insurance</option>
                                    <option value="carInsurance">Car Insurance</option>
                                    <option value="lifeInsurance">Life Insurance</option>
                                    <option value="healthInsurance">Health Insurance</option>
                                    <option value="homeInsurance">Home Insurance</option>
                                </select>
                                <button class="rounded-md relative flex px-4 py-2 items-center justify-center overflow-hidden bg-[#7166F5] hover:text-black text-white shadow-2xl transition-all before:absolute before:-bottom-10 before:h-10 before:w-10 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                                    <span class="relative z-10">Get a Quote Now</span>
                                </button>
                            </form>
                        </div>

                    )}
                </div>

                <div>
                    <button className={`rounded-lg border flex flex-col max-sm:w-24 max-sm:h-28 w-32 h-28 shadow-xl outline-none items-center justify-center overflow-hidden ${activeButton === 'familyInsurance' ? 'hover:scale-90' : 'scale-100'} ${activeButton === 'familyInsurance' ? 'border-blue-200' : 'bg-[#ffffff]'} ${activeButton === 'familyInsurance' ? 'text-black' : 'text-gray-800'}  transition-all hover:scale-110 `}
                        onClick={() => handleButtonClick('familyInsurance')}>
                        <img className='w-10' src="assets/images/Products/family.gif" alt="" />
                        <span className="font-semibold max-sm:text-sm">Family Health </span>
                        <span className='text-sm font-light text-gray-400'>Insurance</span>
                    </button>

                    {showForm === 'familyInsurance' && (
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 familyInsuranceForm bg-white ${animateForm ? 'animate-form' : ''} flex flex-col gap-5 items-center justify-center p-10 pt-2 shadow-xl rounded-lg`}>
                            <div className='flex items-center justify-between w-full'>
                                <span>Family Health Insurance</span>
                                <span onClick={() => { setShowForm('none'), setActiveButton('none'), setAnimateForm(true); }} className="p-2 text-lg cursor-pointer"><RxCross2 /></span>
                            </div>
                            <form className='flex flex-col items-start justify-start w-[40vw] gap-6 pt-2'>
                                <input className='h-10 px-2 w-full border bg-white border-[#383838a4] rounded-md outline-none ' type="text" placeholder='Full Name' />
                                <input className='h-10 px-2 w-full border bg-white border-[#474747cb] rounded-md outline-none ' type="email" placeholder='Email Address' />
                                <select className='h-10 px-2 w-full border bg-white border-[#4d4d4da4] rounded-md outline-none ' name="insuranceType" id="">
                                    <option>Subject Type Insurance</option>
                                    <option value="carInsurance">Car Insurance</option>
                                    <option value="lifeInsurance">Life Insurance</option>
                                    <option value="healthInsurance">Health Insurance</option>
                                    <option value="homeInsurance">Home Insurance</option>
                                </select>
                                <button class="rounded-md relative flex px-4 py-2 items-center justify-center overflow-hidden bg-[#7166F5] hover:text-black text-white shadow-2xl transition-all before:absolute before:-bottom-10 before:h-10 before:w-10 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                                    <span class="relative z-10">Get a Quote Now</span>
                                </button>
                            </form>
                        </div>

                    )}
                </div>

                <div>
                    <button className={`rounded-lg border flex flex-col max-sm:w-24 max-sm:h-28 w-32 h-28 shadow-xl outline-none items-center justify-center overflow-hidden ${activeButton === 'travelInsurance' ? 'hover:scale-90' : 'scale-100'} ${activeButton === 'travelInsurance' ? 'border-blue-200' : 'bg-[#ffffff]'} ${activeButton === 'travelInsurance' ? 'text-black' : 'text-gray-800'}  transition-all hover:scale-110 `}
                        onClick={() => handleButtonClick('travelInsurance')}>
                        <img className='w-10' src="assets/images/Products/airplane.gif" alt="" />
                        <span className="font-semibold max-sm:text-sm">Travel</span>
                        <span className='text-sm font-light text-gray-400'>Insurance</span>
                    </button>

                    {showForm === 'travelInsurance' && (
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 travelInsuranceForm bg-white ${animateForm ? 'animate-form' : ''} flex flex-col gap-5 items-center justify-center p-10 pt-2 shadow-xl rounded-lg`}>
                            <div className='flex items-center justify-between w-full'>
                                <span>Travel Insurance</span>
                                <span onClick={() => { setShowForm('none'), setActiveButton('none'), setAnimateForm(true); }} className="p-2 text-lg cursor-pointer"><RxCross2 /></span>
                            </div>
                            <form className='flex flex-col items-start justify-start w-[40vw] gap-6 pt-2'>
                                <input className='h-10 px-2 w-full border bg-white border-[#383838a4] rounded-md outline-none ' type="text" placeholder='Full Name' />
                                <input className='h-10 px-2 w-full border bg-white border-[#474747cb] rounded-md outline-none ' type="email" placeholder='Email Address' />
                                <select className='h-10 px-2 w-full border bg-white border-[#4d4d4da4] rounded-md outline-none ' name="insuranceType" id="">
                                    <option>Subject Type Insurance</option>
                                    <option value="carInsurance">Car Insurance</option>
                                    <option value="lifeInsurance">Life Insurance</option>
                                    <option value="healthInsurance">Health Insurance</option>
                                    <option value="homeInsurance">Home Insurance</option>
                                </select>
                                <button class="rounded-md relative flex px-4 py-2 items-center justify-center overflow-hidden bg-[#7166F5] hover:text-black text-white shadow-2xl transition-all before:absolute before:-bottom-10 before:h-10 before:w-10 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                                    <span class="relative z-10">Get a Quote Now</span>
                                </button>
                            </form>
                        </div>

                    )}
                </div>

                <div>
                    <button className={`rounded-lg border flex flex-col max-sm:w-24 max-sm:h-28 w-32 h-28 shadow-xl outline-none items-center justify-center overflow-hidden ${activeButton === 'homeInsurance' ? 'hover:scale-90' : 'scale-100'} ${activeButton === 'homeInsurance' ? 'border-blue-200' : 'bg-[#ffffff]'} ${activeButton === 'homeInsurance' ? 'text-black' : 'text-gray-800'}  transition-all hover:scale-110 `}
                        onClick={() => handleButtonClick('homeInsurance')}>
                        <img className='w-10' src="assets/images/Products/home.gif" alt="" />
                        <span className="font-semibold max-sm:text-sm">Home</span>
                        <span className='text-sm font-light text-gray-400'>Insurance</span>
                    </button>

                    {showForm === 'homeInsurance' && (
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 homeInsuranceForm bg-white ${animateForm ? 'animate-form' : ''} flex flex-col gap-5 items-center justify-center p-10 pt-2 shadow-xl rounded-lg`}>
                            <div className='flex items-center justify-between w-full'>
                                <span>Home Insurance</span>
                                <span onClick={() => { setShowForm('none'), setActiveButton('none'), setAnimateForm(true); }} className="p-2 text-lg cursor-pointer"><RxCross2 /></span>
                            </div>
                            <form className='flex flex-col items-start justify-start w-[40vw] gap-6 pt-2'>
                                <input className='h-10 px-2 w-full border bg-white border-[#383838a4] rounded-md outline-none ' type="text" placeholder='Full Name' />
                                <input className='h-10 px-2 w-full border bg-white border-[#474747cb] rounded-md outline-none ' type="email" placeholder='Email Address' />
                                <select className='h-10 px-2 w-full border bg-white border-[#4d4d4da4] rounded-md outline-none ' name="insuranceType" id="">
                                    <option>Subject Type Insurance</option>
                                    <option value="carInsurance">Car Insurance</option>
                                    <option value="lifeInsurance">Life Insurance</option>
                                    <option value="healthInsurance">Health Insurance</option>
                                    <option value="homeInsurance">Home Insurance</option>
                                </select>
                                <button class="rounded-md relative flex px-4 py-2 items-center justify-center overflow-hidden bg-[#7166F5] hover:text-black text-white shadow-2xl transition-all before:absolute before:-bottom-10 before:h-10 before:w-10 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                                    <span class="relative z-10">Get a Quote Now</span>
                                </button>
                            </form>
                        </div>

                    )}
                </div>

                <div>
                    <button className={`rounded-lg border flex flex-col max-sm:w-24 max-sm:h-28 w-32 h-28 shadow-xl outline-none items-center justify-center overflow-hidden ${activeButton === 'employeeInsurance' ? 'hover:scale-90' : 'scale-100'} ${activeButton === 'employeeInsurance' ? 'border-blue-200' : 'bg-[#ffffff]'} ${activeButton === 'employeeInsurance' ? 'text-black' : 'text-gray-800'}  transition-all hover:scale-110 `}
                        onClick={() => handleButtonClick('employeeInsurance')}>
                        <img className='w-10' src="assets/images/Products/employee.gif" alt="" />
                        <span className="font-semibold max-sm:text-sm">Employee Health</span>
                        <span className='text-sm font-light text-gray-400'>Insurance</span>
                    </button>

                    {showForm === 'employeeInsurance' && (
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 employeeInsuranceForm bg-white ${animateForm ? 'animate-form' : ''} flex flex-col gap-5 items-center justify-center p-10 pt-2 shadow-xl rounded-lg`}>
                            <div className='flex items-center justify-between w-full'>
                                <span>Employee Health Insurance</span>
                                <span onClick={() => { setShowForm('none'), setActiveButton('none'), setAnimateForm(true); }} className="p-2 text-lg cursor-pointer"><RxCross2 /></span>
                            </div>
                            <form className='flex flex-col items-start justify-start w-[40vw] gap-6 pt-2'>
                                <input className='h-10 px-2 w-full border bg-white border-[#383838a4] rounded-md outline-none ' type="text" placeholder='Full Name' />
                                <input className='h-10 px-2 w-full border bg-white border-[#474747cb] rounded-md outline-none ' type="email" placeholder='Email Address' />
                                <select className='h-10 px-2 w-full border bg-white border-[#4d4d4da4] rounded-md outline-none ' name="insuranceType" id="">
                                    <option>Subject Type Insurance</option>
                                    <option value="carInsurance">Car Insurance</option>
                                    <option value="lifeInsurance">Life Insurance</option>
                                    <option value="healthInsurance">Health Insurance</option>
                                    <option value="homeInsurance">Home Insurance</option>
                                </select>
                                <button class="rounded-md relative flex px-4 py-2 items-center justify-center overflow-hidden bg-[#7166F5] hover:text-black text-white shadow-2xl transition-all before:absolute before:-bottom-10 before:h-10 before:w-10 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                                    <span class="relative z-10">Get a Quote Now</span>
                                </button>
                            </form>
                        </div>

                    )}
                </div>

                <div>
                    <button className={`rounded-lg border flex flex-col max-sm:w-24 max-sm:h-28 w-32 h-28 shadow-xl outline-none items-center justify-center overflow-hidden ${activeButton === 'childSavingsPlans' ? 'hover:scale-90' : 'scale-100'} ${activeButton === 'childSavingsPlans' ? 'border-blue-200' : 'bg-[#ffffff]'} ${activeButton === 'childSavingsPlans' ? 'text-black' : 'text-gray-800'}  transition-all hover:scale-110 `}
                        onClick={() => handleButtonClick('childSavingsPlans')}>
                        <img className='w-10' src="assets/images/Products/piggy-bank.gif" alt="" />
                        <span className="font-semibold max-sm:text-sm">Child </span>
                        <span className='text-sm font-light text-gray-400'>Savings Plans</span>
                    </button>

                    {showForm === 'childSavingsPlans' && (
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 childSavingsPlansForm bg-white ${animateForm ? 'animate-form' : ''} flex flex-col gap-5 items-center justify-center p-10 pt-2 shadow-xl rounded-lg`}>
                            <div className='flex items-center justify-between w-full'>
                                <span>Child Savings Plans</span>
                                <span onClick={() => { setShowForm('none'), setActiveButton('none'), setAnimateForm(true); }} className="p-2 text-lg cursor-pointer"><RxCross2 /></span>
                            </div>
                            <form className='flex flex-col items-start justify-start w-[40vw] gap-6 pt-2'>
                                <input className='h-10 px-2 w-full border bg-white border-[#383838a4] rounded-md outline-none ' type="text" placeholder='Full Name' />
                                <input className='h-10 px-2 w-full border bg-white border-[#474747cb] rounded-md outline-none ' type="email" placeholder='Email Address' />
                                <select className='h-10 px-2 w-full border bg-white border-[#4d4d4da4] rounded-md outline-none ' name="insuranceType" id="">
                                    <option>Subject Type Insurance</option>
                                    <option value="carInsurance">Car Insurance</option>
                                    <option value="lifeInsurance">Life Insurance</option>
                                    <option value="healthInsurance">Health Insurance</option>
                                    <option value="homeInsurance">Home Insurance</option>
                                </select>
                                <button class="rounded-md relative flex px-4 py-2 items-center justify-center overflow-hidden bg-[#7166F5] hover:text-black text-white shadow-2xl transition-all before:absolute before:-bottom-10 before:h-10 before:w-10 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                                    <span class="relative z-10">Get a Quote Now</span>
                                </button>
                            </form>
                        </div>

                    )}
                </div>

                <div>
                    <button className={`rounded-lg border flex flex-col max-sm:w-24 max-sm:h-28 w-32 h-28 shadow-xl outline-none items-center justify-center overflow-hidden ${activeButton === 'freeTermPlan' ? 'hover:scale-90' : 'scale-100'} ${activeButton === 'freeTermPlan' ? 'border-blue-200' : 'bg-[#ffffff]'} ${activeButton === 'freeTermPlan' ? 'text-black' : 'text-gray-800'}  transition-all hover:scale-110 `}
                        onClick={() => handleButtonClick('freeTermPlan')}>
                        <img className='w-10' src="assets/images/Products/freeterm.svg" alt="" />
                        <span className="font-semibold max-sm:text-sm">Free of Cost</span>
                        <span className='text-sm font-light text-gray-400'>Term Plan</span>
                    </button>

                    {showForm === 'freeTermPlan' && (
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 freeTermPlanForm bg-white ${animateForm ? 'animate-form' : ''} flex flex-col gap-5 items-center justify-center p-10 pt-2 shadow-xl rounded-lg`}>
                            <div className='flex items-center justify-between w-full'>
                                <span>Term Plan</span>
                                <span onClick={() => { setShowForm('none'), setActiveButton('none'), setAnimateForm(true); }} className="p-2 text-lg cursor-pointer"><RxCross2 /></span>
                            </div>
                            <form className='flex flex-col items-start justify-start w-[40vw] gap-6 pt-2'>
                                <input className='h-10 px-2 w-full border bg-white border-[#383838a4] rounded-md outline-none ' type="text" placeholder='Full Name' />
                                <input className='h-10 px-2 w-full border bg-white border-[#474747cb] rounded-md outline-none ' type="email" placeholder='Email Address' />
                                <select className='h-10 px-2 w-full border bg-white border-[#4d4d4da4] rounded-md outline-none ' name="insuranceType" id="">
                                    <option>Subject Type Insurance</option>
                                    <option value="carInsurance">Car Insurance</option>
                                    <option value="lifeInsurance">Life Insurance</option>
                                    <option value="healthInsurance">Health Insurance</option>
                                    <option value="homeInsurance">Home Insurance</option>
                                </select>
                                <button class="rounded-md relative flex px-4 py-2 items-center justify-center overflow-hidden bg-[#7166F5] hover:text-black text-white shadow-2xl transition-all before:absolute before:-bottom-10 before:h-10 before:w-10 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                                    <span class="relative z-10">Get a Quote Now</span>
                                </button>
                            </form>
                        </div>

                    )}
                </div>

                <div>
                    <button className={`rounded-lg relative border flex flex-col max-sm:w-24 max-sm:h-28 w-32 h-28 shadow-xl outline-none items-center justify-center overflow-hidden ${activeButton === 'moreOption' ? 'hover:scale-90' : 'scale-100'} ${activeButton === 'moreOption' ? 'border-blue-200' : 'bg-[#ffffff]'} ${activeButton === 'moreOption' ? 'text-black' : 'text-gray-800'}  transition-all hover:scale-110 `}
                        onClick={() => handleButtonClick('moreOption')}>
                        <img className='w-10' src="assets/images/Products/more.svg" alt="" />
                        <span className="font-semibold max-sm:text-sm">More</span>
                        <span className='text-sm font-light text-gray-400'>Insurance</span>
                    </button>

                    {showForm === 'moreOption' && (
                        <div className={`w-full max-sm:w-screen max-sm:p-2 border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 moreOptionWindow bg-white ${animateForm ? 'animate-form' : ''} flex flex-col gap-5 items-center justify-center p-10 pt-2 shadow-xl rounded-lg`}>

                            <div className='flex items-center justify-between w-full'>
                                <h1 className='text-lg font-semibold'>More Products</h1>
                                <span onClick={() => { setShowForm('none'), setActiveButton('none'), setAnimateForm(true); }} className="p-2 font-bold rounded-full bg-orange-100 text-lg cursor-pointer"><RxCross2 /></span>
                            </div>

                            <div className='border-b w-full flex max-sm:flex-wrap items-center gap-2 flex-shrink-0 max-sm:py-2'>
                                <button className={`relative flex px-6 max-sm:px-2 max-sm:border max-sm:rounded-lg max-sm:py-1 py-3 outline-none items-center justify-center overflow-hidden hover:border-b hover:border-blue-800 `}
                                    onClick={() => handleCategory('generalInsurance')}>
                                    <span className="relative z-10">General Insurance</span>
                                </button>

                                <button className={`relative flex px-6 max-sm:px-2 max-sm:border max-sm:rounded-lg max-sm:py-1 py-3 outline-none items-center justify-center overflow-hidden hover:border-b hover:border-blue-800 `}
                                    onClick={() => handleCategory('nonGeneralInsurance')}>
                                    <span className="relative z-10">Non-General Insurance</span>
                                </button>

                                <button className={`relative flex px-6 max-sm:px-2 max-sm:border max-sm:rounded-lg max-sm:py-1 py-3 outline-none items-center justify-center overflow-hidden hover:border-b hover:border-blue-800 `}
                                    onClick={() => handleCategory('lifeInsurance')}>
                                    <span className="relative z-10">Life Insurance</span>
                                </button>

                                <button className={`relative flex px-6 max-sm:px-2 max-sm:border max-sm:rounded-lg max-sm:py-1 py-3 outline-none items-center justify-center overflow-hidden hover:border-b hover:border-blue-800 flex-shrink-0`}
                                    onClick={() => handleCategory('healthInsurance')}>
                                    <span className="relative z-10">Health Insurance</span>
                                </button>
                            </div>

                            {category === 'generalInsurance' && (
                                <div className={`flex-col generalInsuranceOption flex gap-2 max-sm:gap-2 max-sm:p-5 items-start justify-center w-full p-10 max-sm:px-5`}>
                                    <h1>General Insurance</h1>

                                    <div className='flex flex-wrap max-sm:gap-1 items-CENTER gap-5'>
                                        <button className={`flex flex-col w-24 h-28 outline-none items-center justify-center overflow-hidden `}>
                                            <img className='w-8' src="assets/images/Products/general/sport-car.png" alt="" />
                                            <span className='text-xs font-normal text-gray-400'>Car Insurance</span>
                                        </button>

                                        <button className={`flex flex-col w-24 h-28 outline-none items-center justify-center overflow-hidden `}>
                                            <img className='w-8' src="assets/images/Products/general/new-car-icon.avif" alt="" />
                                            <span className='text-xs font-normal text-gray-400'>Brand New Car</span>
                                        </button>

                                        <button className={`flex flex-col w-24 h-28 outline-none items-center justify-center overflow-hidden `}>
                                            <img className='w-8' src="assets/images/Products/general/airplane.png" alt="" />
                                            <span className='text-xs font-normal text-gray-400'>Travel Insurance</span>
                                        </button>

                                        <button className={`flex flex-col w-24 h-28 outline-none items-center justify-center overflow-hidden `}>
                                            <img className='w-8' src="assets/images/Products/general/bycicle.png" alt="" />
                                            <span className='text-xs font-normal text-gray-400'>2 Wheeler Insurance</span>
                                        </button>

                                        <button className={`flex flex-col w-24 h-28 outline-none items-center justify-center overflow-hidden `}>
                                            <img className='w-8' src="assets/images/Products/general/ads.png" alt="" />
                                            <span className='text-xs font-normal text-gray-400'>Commercial Vehicle</span>
                                        </button>

                                        <button className={`flex flex-col w-24 h-28 outline-none items-center justify-center overflow-hidden `}>
                                            <img className='w-8' src="assets/images/Products/general/taxi.png" alt="" />
                                            <span className='text-xs font-normal text-gray-400'>Taxi Insurance</span>
                                        </button>
                                    </div>

                                </div>
                            )}

                            {category === 'nonGeneralInsurance' && (
                                <div className={`nongeneralInsuranceOption flex flex-wrap max-sm:gap-2 max-sm:p-5 items-start justify-between w-full px-10 py-5 max-sm:px-5`}>

                                    <div className='w-1/2 py-5'>
                                        <h1>Marine & Property Insurance:-</h1>
                                        <div className='flex flex-wrap max-sm:w-[90vw] max-sm:gap-1 items-center gap-5'>

                                            <button className={`flex flex-col w-24 h-28 outline-none items-center justify-center overflow-hidden `}>
                                                <img className='w-8' src="assets/images/Products/non-general/ship.png" alt="" />
                                                <span className='text-xs font-normal text-gray-500'>Marine Insurance</span>
                                            </button>

                                            <button className={`flex flex-col w-24 h-28 outline-none items-center justify-center overflow-hidden `}>
                                                <img className='w-8' src="assets/images/Products/non-general/burning-building.png" alt="" />
                                                <span className='text-xs font-normal text-gray-500'>Fire & Burglary</span>
                                            </button>

                                            <button className={`flex flex-col w-24 h-28 outline-none items-center justify-center overflow-hidden `}>
                                                <img className='w-8' src="assets/images/Products/non-general/seller.png" alt="" />
                                                <span className='text-xs font-normal text-gray-500'>Shop Owner Insurance</span>
                                            </button>

                                            <button className={`flex flex-col w-24 h-28 outline-none items-center justify-center overflow-hidden `}>
                                                <img className='w-8' src="assets/images/Products/non-general/office-building.png" alt="" />
                                                <span className='text-xs font-normal text-gray-500'>Office Package Policy</span>
                                            </button>

                                        </div>
                                    </div>

                                    <div className='w-1/2 py-5'>
                                        <h1>Liability:-</h1>

                                        <div className='flex flex-wrap max-sm:w-[90vw] max-sm:gap-1 items-center gap-5'>
                                            <button className={`flex flex-col w-24 h-28 outline-none items-center justify-center overflow-hidden `}>
                                                <img className='w-8' src="assets/images/Products/non-general/medical.png" alt="" />
                                                <span className='text-xs font-normal text-gray-500'>Professional Indemnity for Doctors</span>
                                            </button>

                                            <button className={`flex flex-col w-24 h-28 outline-none items-center justify-center overflow-hidden `}>
                                                <img className='w-8' src="assets/images/Products/non-general/company.png" alt="" />
                                                <span className='text-xs font-normal text-gray-500'>Professional Indemnity for Companies</span>
                                            </button>

                                            <button className={`flex flex-col w-24 h-28 outline-none items-center justify-center overflow-hidden `}>
                                                <img className='w-8' src="assets/images/Products/non-general/engineer.png" alt="" />
                                                <span className='text-xs font-normal text-gray-500'>Workmen Compensation</span>
                                            </button>

                                            <button className={`flex flex-col w-24 h-28 outline-none items-center justify-center overflow-hidden `}>
                                                <img className='w-8' src="assets/images/Products/non-general/briefcase.png" alt="" />
                                                <span className='text-xs font-normal text-gray-500'>General Liability</span>
                                            </button>

                                            <button className={`flex flex-col w-24 h-28 outline-none items-center justify-center overflow-hidden `}>
                                                <img className='w-8' src="assets/images/Products/non-general/computer.png" alt="" />
                                                <span className='text-xs font-normal text-gray-500'>Cyber Insurance</span>
                                            </button>

                                            <button className={`flex flex-col w-24 h-28 outline-none items-center justify-center overflow-hidden `}>
                                                <img className='w-8' src="assets/images/Products/non-general/boss.png" alt="" />
                                                <span className='text-xs font-normal text-gray-500'>Directors & Officers Liabilityy</span>
                                            </button>

                                        </div>
                                    </div>

                                    <div className='w-1/2 py-5'>
                                        <h1>Engineering:-</h1>

                                        <div className='flex max-sm:w-[90vw] flex-wrap max-sm:gap-1 items-center gap-5'>
                                            <button className={`flex flex-col w-24 h-28 outline-none items-center justify-center overflow-hidden `}>
                                                <img className='w-8' src="assets/images/Products/non-general/worker.png" alt="" />
                                                <span className='text-xs font-normal text-gray-500'>Contractor's All Risk</span>
                                            </button>

                                            <button className={`flex flex-col w-24 h-28 outline-none items-center justify-center overflow-hidden `}>
                                                <img className='w-8' src="assets/images/Products/non-general/contruction.png" alt="" />
                                                <span className='text-xs font-normal text-gray-500'>Erection All Risk</span>
                                            </button>

                                            <button className={`flex flex-col w-24 h-28 outline-none items-center justify-center overflow-hidden `}>
                                                <img className='w-8' src="assets/images/Products/non-general/piling.png" alt="" />
                                                <span className='text-xs font-normal text-gray-500'>Contractor's Plant & Machinery</span>
                                            </button>

                                        </div>
                                    </div>

                                </div>

                            )}

                            {category === 'lifeInsurance' && (
                                <div className={`flex-col generalInsuranceOption flex gap-10 max-sm:gap-2 max-sm:p-5 items-start justify-center w-full p-10 max-sm:px-5`}>
                                    <h1>Life Insurance</h1>

                                    <div className='flex flex-wrap max-sm:gap-1 items-center justify-center gap-5'>
                                        <button className={`flex flex-col w-24 h-28 outline-none items-center justify-center overflow-hidden `}>
                                            <img className='w-8' src="assets/images/Products/general/sport-car.png" alt="" />
                                            <span className='text-xs font-normal text-gray-400'>Car Insurance</span>
                                        </button>

                                        <button className={`flex flex-col w-24 h-28 outline-none items-center justify-center overflow-hidden `}>
                                            <img className='w-8' src="assets/images/Products/general/new-car-icon.avif" alt="" />
                                            <span className='text-xs font-normal text-gray-400'>Brand New Car</span>
                                        </button>

                                        <button className={`flex flex-col w-24 h-28 outline-none items-center justify-center overflow-hidden `}>
                                            <img className='w-8' src="assets/images/Products/general/airplane.png" alt="" />
                                            <span className='text-xs font-normal text-gray-400'>Travel Insurance</span>
                                        </button>

                                        <button className={`flex flex-col w-24 h-28 outline-none items-center justify-center overflow-hidden `}>
                                            <img className='w-8' src="assets/images/Products/general/bycicle.png" alt="" />
                                            <span className='text-xs font-normal text-gray-400'>2 Wheeler Insurance</span>
                                        </button>

                                        <button className={`flex flex-col w-24 h-28 outline-none items-center justify-center overflow-hidden `}>
                                            <img className='w-8' src="assets/images/Products/general/ads.png" alt="" />
                                            <span className='text-xs font-normal text-gray-400'>Commercial Vehicle</span>
                                        </button>

                                        <button className={`flex flex-col w-24 h-28 outline-none items-center justify-center overflow-hidden `}>
                                                <img className='w-8' src="assets/images/Products/health/businessman.png" alt="" />
                                                <span className='text-xs font-normal text-gray-500'>Group Term Life</span>
                                            </button>
                                    </div>

                                </div>

                            )}

                            {category === 'healthInsurance' && (
                                <div className={`generalInsuranceOption flex gap-10 max-sm:gap-2 max-sm:p-5 items-start justify-center w-full px-10 py-5 max-sm:px-5`}>
                                    <div className='w-1/2 py-5'>
                                        <h1>Health Insurance:-</h1>
                                        <div className='flex flex-wrap max-sm:gap-1 items-center gap-5'>

                                            <button className={`flex flex-col w-28 h-28 outline-none items-center justify-center overflow-hidden `}>
                                                <img className='w-8' src="assets/images/Products/health/heart-rate.png" alt="" />
                                                <span className='text-xs font-normal text-gray-500'>Health</span>
                                            </button>

                                            <button className={`flex flex-col w-28 h-28 outline-none items-center justify-center overflow-hidden `}>
                                                <img className='w-8' src="assets/images/Products/health/protect.png" alt="" />
                                                <span className='text-xs font-normal text-gray-500'>1 Cr health Cover</span>
                                            </button>

                                            <button className={`flex flex-col w-28 h-28 outline-none items-center justify-center overflow-hidden `}>
                                                <img className='w-8' src="assets/images/Products/health/risk.png" alt="" />
                                                <span className='text-xs font-normal text-gray-500'>Arogya Sanjeeva…</span>
                                            </button>

                                            <button className={`flex flex-col w-28 h-28 outline-none items-center justify-center overflow-hidden `}>
                                                <img className='w-8' src="assets/images/Products/health/medicine.png" alt="" />
                                                <span className='text-xs font-normal text-gray-500'>Family Health Insurance</span>
                                            </button>

                                            <button className={`flex flex-col w-28 h-28 outline-none items-center justify-center overflow-hidden `}>
                                                <img className='w-8' src="assets/images/Products/health/cancer-ribbon.png" alt="" />
                                                <span className='text-xs font-normal text-gray-500'>Cancer Insurance</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className='w-1/2 py-5'>
                                        <h1>Employee Benefits:-</h1>

                                        <div className='flex flex-wrap max-sm:gap-1 items-center gap-5'>
                                            <button className={`flex flex-col w-28 h-28 outline-none items-center justify-center overflow-hidden `}>
                                                <img className='w-8' src="assets/images/Products/health/organization.png" alt="" />
                                                <span className='text-xs font-normal text-gray-500'>Employee Group Health Insurance</span>
                                            </button>

                                            <button className={`flex flex-col w-28 h-28 outline-none items-center justify-center overflow-hidden `}>
                                                <img className='w-8' src="assets/images/Products/health/compensation.png" alt="" />
                                                <span className='text-xs font-normal text-gray-500'>Group Personal Accident</span>
                                            </button>

                                            <button className={`flex flex-col w-28 h-28 outline-none items-center justify-center overflow-hidden `}>
                                                <img className='w-8' src="assets/images/Products/health/protection.png" alt="" />
                                                <span className='text-xs font-normal text-gray-500'>COVID-19 Group Health Plan</span>
                                            </button>

                                        </div>
                                    </div>

                                </div>

                            )}


                        </div>

                    )}
                </div>
                <div>
      {/* Passing state and handler to both components */}
      <DialogButton handleOpen={handleOpen} />
      <InsuranceModel open={open} handleOpen={handleOpen} />
    </div>


            </div>


        </div>
    );
};

export default Products;