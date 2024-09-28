import React from 'react'
import {
    FigmaLogoIcon,
    FramerLogoIcon,
    SketchLogoIcon,
    TwitterLogoIcon,
    GitHubLogoIcon,
    VercelLogoIcon,
    NotionLogoIcon,
    DiscordLogoIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
} from "@radix-ui/react-icons";

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
        <div className='flex flex-col items-center justify-center gap-10 py-10'>
            <div className="relative m-auto w-screen overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
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
