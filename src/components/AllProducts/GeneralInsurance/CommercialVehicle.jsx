import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    TabPanel,
    CardHeader,
} from "@material-tailwind/react";
import Header from "../../Header";
import TableComponent from "./RelativeComponents/TableComponent";
import { Link } from "react-router-dom";
import InsuranceCard from "./RelativeComponents/InsuranceCard";
import ImageTextCard from "./RelativeComponents/ImageText";
import InsuranceTypes from "./RelativeComponents/TypesInsurance";

const TABLE_HEADERS_PAGE_1 = [
    "Point of Difference",
    "Comprehensive Insurance",
    "Third-party Insurance",
];

const TABLE_ROWS_PAGE_1 = [
    {
        point: "Definition",
        comprehensive:
            "Comprehensive commercial vehicle insurance offers the highest level of coverage, including all third-party benefits plus protection for your vehicle and other incidents.",
        thirdParty:
            "Third-party insurance is the minimum level of cover required by law for commercial vehicle drivers. It only covers damage or injury to others if you're at fault in an accident.",
    },
    {
        point: "Coverage",
        comprehensive:
            "It covers Third-Party Liability, Your Commercial Vehicle, Fire and Theft, Vandalism, Windshield Repairs",
        thirdParty:
            "It provides Damage to other vehicles, Injury to other road users or passengers, Damage to property",
    },
    {
        point: "Legal Requirement",
        comprehensive: "Comprehensive insurance provides much more protection and is worth considerin",
        thirdParty:
            "If you're driving a commercial vehicle, third-party insurance is the minimum legal requirement",
    },
    {
        point: "Cost",
        comprehensive: "Comprehensive insurance can be more cost-effective in the long run, especially if you want to avoid out-of-pocket costs for repairing your own vehicle after an accident",
        thirdParty: "Third-party insurance tends to have lower premiums,",
    },
    {
        point: "Exclusions",
        comprehensive:
            "Wear and tear, Driving under the influence, Non-approved modifications",
        thirdParty: "If your car is damaged or written off in an accident, theft, or fire, third-party insurance won't cover the repairs or replacement.",
    },
];
const COLUMN_WIDTHS = [
    "w-20", // 25% width for Point of Difference
    "w-24", // 40% width for Comprehensive Insurance
    "w-24", // 40% width for Third-party Insurance
];
const CommercialVehicle = () => {
    const insuranceOptions = [
        {
            logo: "/assets/images/company/icicibank.jpg", // Replace with actual image URLs
            insurerName: "Commercial Vehicle Insurance",
            price: "-",
            keyFeatures: ["No Inspection Needed", "Immediate Policy Issurance"],
            link: "https://www.ilgi.co/D2DBB68FAE",
        },
    ];
    
    return (
        <>
            <div>
                <Card className="mt-6 shadow-none px-3 bg-white container w-full lg:w-[90%] xl:w-[90%] flex flex-col justify-center">
                    <CardBody className="px-1">
                        <Typography variant="h4" color="blue-gray" className="mb-2 ">
                            Top Commercial Vehicle Insurance Plans
                        </Typography>

                        <div className="mt-4 grid w-full px-6   grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                            {insuranceOptions.map((option, index) => (
                                <InsuranceCard key={index} {...option} />
                            ))}
                        </div>
                        <br />

                        <div>
                            <ImageTextCard
                                heading="A Guide to Commercial Vehicle Insurance"
                                subheading=" Get commercial vehicle  insurance & protect your vehicle & yourself."
                                imageSrc="assets/images/Products/general/ads.png"
                                altText="Nexon Commercial Vehicle "
                                description="axi insurance, also known as motor insurance or four-wheeler insurance, is a contractual agreement between a commercial vehicle owner and an insurance provider. This policy provides financial protection in the event of damage or loss to the vehicle due to unforeseen incidents like accidents, theft, or natural disasters. More than just a legal requirement, commercial vehicle insurance offers peace of mind by covering repair costs and safeguarding your investment.
No matter how careful you are on the road, accidents happen, and repair expenses can be overwhelming. Commercial Vehicle insurance steps in to reduce the financial burden of these incidents."
                            />
                        </div>
                        <br />


                        <Card className="mt-6 w-full text-center">
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                Types of Commercial Vehicle Insurance
                            </Typography>
                            <CardBody>
                                <Typography className='md:px-5'>
                                    <ul className="list-disc text-start flex flex-col items-start gap-2">
                                        <li><span className="text-gray-800 font-semibold">Public Hire Commercial Vehicle Insurance: </span> For drivers who can pick up passengers from the street without prior booking (e.g., black cabs).</li>
                                        <li><span className="text-gray-800 font-semibold">Private Hire Commercial Vehicle Insurance: </span> For drivers who only transport passengers who have booked in advance (e.g., Uber or minicab drivers).</li>
                                        <li><span className="text-gray-800 font-semibold">Comprehensive Coverage: </span> Includes third-party, fire, and theft protection plus damage to your vehicle.</li>
                                        <li><span className="text-gray-800 font-semibold">Third-Party Only: </span> Covers damages or injuries caused to others, but not your vehicle.</li>
                                    </ul>
                                </Typography>
                            </CardBody>

                        </Card>



                        <br />
                        <div className="div pt-5">
                            <Typography
                                variant="h3"
                                color="blue-gray"
                                className="mb-2 pt-10 w-full text-center"
                            >
                                Third-Party Vs Comprehensive Commercial Vehicle Insurance
                            </Typography>
                            <TableComponent
                                headers={TABLE_HEADERS_PAGE_1}
                                rows={TABLE_ROWS_PAGE_1}
                                columnWidths={COLUMN_WIDTHS}
                            />
                        </div>
                    </CardBody>
                </Card >
            </div >
        </>
    );
};

export default CommercialVehicle;
