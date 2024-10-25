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
        <div className='flex flex-col items-center justify-center py-1 gap-2 max-sm:px-2'>

            <div className='relative flex flex-wrap items-center  justify-center max-sm:gap-3 min-md:gap-8 gap-2 sm:w-4/5 max-sm:w-full  py-10 '>

                <div>
                   
                    <LinkButtons
                    text="Life" 
                    subtext="Insurance" 
                    imgSrc="/assets/images/Products/life-balance2.avif" 
                    link="/term-insurance"
                    />
                </div>

                <div>
                  
                    <LinkButtons
                    text="Health" 
                    subtext="Insurance" 
                    imgSrc="/assets/images/Products/heartbeat 2.avif" 
                    link="/individual-health-insurance"
                    />
                </div>

                <div>
                  
                    <LinkButtons
                    text="Investment Plans" 
                    subtext="Insurance" 
                    imgSrc="/assets/images/Products/advance.avif" 
                    link="/investment-plans"
                    />
                </div>

                <div>
                   
                    <LinkButtons
                    text="Car" 
                    subtext="Insurance" 
                    imgSrc="/assets/images/Products/jeep2.avif" 
                    link="/car-insurance"
                    />
                </div>

                <div>
                    
                    <LinkButtons
                    text="2 Wheeler" 
                    subtext="Insurance" 
                    imgSrc="/assets/images/Products/bike.avif" 
                    link="/two-wheeler-insurance"
                    />
                </div>

                <div>
                    
                    <LinkButtons
                    text="Family Health" 
                    subtext="Insurance" 
                    imgSrc="/assets/images/Products/family2.avif" 
                    link="/family-health-insurance"
                    />
                </div>

                <div>
                   
                    <LinkButtons
                    text="Travel" 
                    subtext="Insurance" 
                    imgSrc="/assets/images/Products/airplane.avif" 
                    link="/travel-insurance"
                    />

                </div>
                <div>
                    
                    <LinkButtons
                    text="Fire & Burglary" 
                    subtext="Insurance" 
                    imgSrc="/assets/images/Products/burning-building.avif" 
                    link="/fire-insurance"
                    />
                </div>
                <div>
                   
                    <LinkButtons
                    text="Home" 
                    subtext="Insurance" 
                    imgSrc="/assets/images/Products/home.avif" 
                    link="/home-insurance"
                    />

                </div>

                

                <div>
                  
                    <LinkButtons
                    text="Child" 
                    subtext="Savings Plans" 
                    imgSrc="/assets/images/Products/piggy-bank.avif" 
                    link="/"
                    />
                </div>

                <div>
                   
                    <LinkButtons
                    text="Money Back Plan" 
                    subtext="life Plan" 
                    imgSrc="/assets/images/Products/freeterm.svg" 
                    link="/"
                    />

                </div>

                     <DialogButton handleOpen={handleOpen} />
                     <InsuranceModel open={open} handleOpen={handleOpen} />
                
            </div>


        </div>
    );
};

export default Products;