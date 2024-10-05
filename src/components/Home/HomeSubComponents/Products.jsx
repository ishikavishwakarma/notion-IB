import React, { useState } from 'react';
import { MdVerifiedUser } from 'react-icons/md';
import { RxCross2 } from "react-icons/rx";
import DialogButton from '../../insuranceModel/DialogButton';
import InsuranceModel from '../../insuranceModel/InsuranceModel';
import LinkButtons from '../../insuranceModel/LinkButtons';

const Products = () => {
   
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
  
    return (
        <div className='flex flex-col items-center justify-center py-10 gap-2 max-sm:px-2'>

            <div className='relative flex flex-wrap items-center  justify-center max-sm:gap-3 min-md:gap-8 gap-2 sm:w-4/5 max-sm:w-full  py-10 '>

                <div>
                   
                    <LinkButtons
                    text="Life" 
                    subtext="Insurance" 
                    imgSrc="assets/images/Products/life-balance.gif" 
                    link="/life-insurance"
                    />
                </div>

                <div>
                  
                    <LinkButtons
                    text="Health" 
                    subtext="Insurance" 
                    imgSrc="assets/images/Products/heartbeat .gif" 
                    link="/health-insurance"
                    />
                </div>

                <div>
                  
                    <LinkButtons
                    text="Investment Plans" 
                    subtext="Insurance" 
                    imgSrc="assets/images/Products/advance.gif" 
                    link="/investment-plans"
                    />
                </div>

                <div>
                   
                    <LinkButtons
                    text="Car" 
                    subtext="Insurance" 
                    imgSrc="assets/images/Products/jeep.gif" 
                    link="/car-insurance"
                    />
                </div>

                <div>
                    
                    <LinkButtons
                    text="2 Wheeler" 
                    subtext="Insurance" 
                    imgSrc="assets/images/Products/bike.gif" 
                    link="/bike-insurance"
                    />
                </div>

                <div>
                    
                    <LinkButtons
                    text="Family Health" 
                    subtext="Insurance" 
                    imgSrc="assets/images/Products/family.gif" 
                    link="/family-health-insurance"
                    />
                </div>

                <div>
                   
                    <LinkButtons
                    text="Travel" 
                    subtext="Insurance" 
                    imgSrc="assets/images/Products/airplane.gif" 
                    link="/travel-insurance"
                    />

                </div>
                <div>
                    
                    <LinkButtons
                    text="Fire & Burglary" 
                    subtext="Insurance" 
                    imgSrc="assets/images/Products/non-general/burning-building.png" 
                    link="/fire-insurance"
                    />
                </div>
                <div>
                   
                    <LinkButtons
                    text="Home" 
                    subtext="Insurance" 
                    imgSrc="assets/images/Products/home.gif" 
                    link="/home-insurance"
                    />

                </div>

                

                <div>
                  
                    <LinkButtons
                    text="Child" 
                    subtext="Savings Plans" 
                    imgSrc="assets/images/Products/piggy-bank.gif" 
                    link="/"
                    />
                </div>

                <div>
                   
                    <LinkButtons
                    text="Free of Cost" 
                    subtext="Term Plan" 
                    imgSrc="assets/images/Products/freeterm.svg" 
                    link="/"
                    />

                </div>

                <div>
                     <DialogButton handleOpen={handleOpen} />
                     <InsuranceModel open={open} handleOpen={handleOpen} />
                </div>

            </div>


        </div>
    );
};

export default Products;