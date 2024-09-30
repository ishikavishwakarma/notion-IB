import React from 'react'

const LOGOS = [
    <img width='70%' src="assets/images/company/20190902132037.jpg" alt="company1" />,
    <img width='70%' src="assets/images/company/20190902133310.jpg" alt="company2" />,
    <img width='70%' src="assets/images/company/20190903134352.jpg" alt="company3" />,
    <img width='70%' src="assets/images/company/20190903134405.jpg" alt="company4" />,
    <img width='70%' src="assets/images/company/20190903134444.jpg" alt="company5" />,
    <img width='70%' src="assets/images/company/20190903134454.jpg" alt="company6" />,
    <img width='70%' src="assets/images/company/20190903134505.jpg" alt="company7" />,
    <img width='70%' src="assets/images/company/20190903134609.jpg" alt="company8" />,
    <img width='70%' src="assets/images/company/20210422100011.png" alt="company9" />,
    <img width='70%' src="assets/images/company/20210609170207.jpg" alt="company10" />,

];

const Partners = () => {
    return (
        <div className='flex items-center justify-center  py-10'>
           <div className='w-[10rem] h-[4rem] bg-[rgb(66,122,226)] flex items-center justify-center'>
                <p className='text-md text-white font-semibold rounded-md max-w-max'>Our Partners</p>
           </div>
            <div className="relative m-auto w-screen h-[4rem] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,rgb(66,122,226)_0%,rgba(255,255,255,0)_20%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,rgb(66,122,226)_0%,rgba(255,255,255,0)_20%)] after:content-['']">
                <div className="animate-infinite-slider flex w-[calc(450px*10)]">
                    {LOGOS.map((logo, index) => (
                        <div
                            className="slide flex w-[125px] items-center justify-center"
                            key={index}
                        >
                            {logo}
                        </div>
                    ))}
                    {LOGOS.map((logo, index) => (
                        <div
                            className="slide flex w-[125px] items-center justify-center"
                            key={index}
                        >
                            {logo}
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Partners
