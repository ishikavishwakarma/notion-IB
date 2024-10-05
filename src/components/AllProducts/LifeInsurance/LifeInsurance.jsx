import { Card, CardBody, Typography } from '@material-tailwind/react'
import React from 'react'
import InsuranceCard from '../GeneralInsurance/RelativeComponents/InsuranceCard'
import ImageTextCard from '../GeneralInsurance/RelativeComponents/ImageText';
import TableComponent from '../GeneralInsurance/RelativeComponents/TableComponent';
const TABLE_HEADERS_PAGE_1 = [
    "Key Features",
    "Benefits Offered",
  ];
  
  const TABLE_ROWS_PAGE_1 = [
    {
      point: "Providing Expert Guidance",
      comprehensive: "Notion Insurance Brokers helps customers navigate the complex insurance landscape by offering expert advice on selecting the right policy from top companies like ICICI Prudential, HDFC Life, and LIC.",
      
    },
    {
      point: "Customizing Insurance Solutions",
      comprehensive: "Acting as a middleman, Notion Insurance Brokers ensures that clients receive personalized insurance solutions that fit their unique financial goals and life stages.",
      
    },
    {
      point: "Enhancing Customer Experience",
      comprehensive: "Through a hands-on approach, Notion Insurance Brokers simplifies the process of purchasing life insurance, whether it’s managing paperwork, clarifying terms, or assisting with claims.",
      
    },
    {
      point: "Connecting with Leading Insurers",
      comprehensive: "By partnering with top companies, Notion Insurance Brokers offers its clients access to a wide range of policies, ensuring that each customer can find the best possible fit for their life insurance needs.",
      
    },
    
  ];
  const COLUMN_WIDTHS = [
   
    "w-[15vw]",  // 40% width for Comprehensive Insurance
    "w-[60vw]",  // 40% width for Third-party Insurance
   
  ];
const LifeInsurance = () => {
    const insuranceOptions = [
        {
          logo: '/assets/images/company/icicibank.jpg', // Replace with actual image URLs
          insurerName: 'Life Insurance',
          price: '-',
          keyFeatures: ['No Inspection Needed', 'Immediate Policy Issurance'],
        //   link:'https://www.ilgi.co/D2DBB68FAE'
        },
        
      ];
  return (
    <>
   
    <div>
      
      <Card className="mt-6 shadow-none px-3 bg-white container w-full lg:w-[90%] xl:w-[90%] flex flex-col justify-center">
      <CardBody className="px-1">
      <Typography variant="h4" color="blue-gray" className="mb-2 ">
        Top Life Insurance Plans
      </Typography>
      
      <div className="mt-4 grid w-full px-6   grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
        {insuranceOptions.map((option, index) => (
          <InsuranceCard key={index} {...option} />
        ))}
      </div>
      <br />
      <Card className="mt-6 w-full text-center">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        A Guide to Life Insurance
        </Typography>
        <Typography className='px-5'>
        Life insurance is the backbone of financial security for millions of Indians, safeguarding families against the uncertainties of life. The life insurance sector in India has evolved significantly over the past few decades, with private and public companies playing crucial roles in enhancing awareness and offering innovative solutions. <br />
        <br />
         In this article, we delve into the responsibilities and contributions of the top 10 life insurance companies in India: ICICI Prudential Life, HDFC Life, Max Life Insurance, TATA AIA, Bajaj Allianz, PnB MetLife, Canara HSBC Life Insurance, Aditya Birla Sun Life Insurance, SBI Life, and the Life Insurance Corporation of India (LIC).
        </Typography>
      </CardBody>
     
    </Card>
      <Card className="mt-6 w-full text-center">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        What Are the Mechanics of Life Insurance?
        </Typography>
        <Typography className='md:px-5'>
        Life insurance is a popular choice for those looking to secure their financial future and provide for their family in case of an untimely passing. A term life insurance policy, for example, can offer essential financial protection to your loved ones. Before purchasing life insurance, it's crucial to understand how the policy works and how your beneficiaries can receive the insurance payout.
        <br />
        <br />
        A life insurance policy is essentially a contract between the policyholder and the insurer, where the insurance company promises to provide coverage in exchange for regular premium payments. The person insured, known as the life assured, is covered by the policy, and the policyholder may or may not be the same person. The policyholder can choose to pay the premiums on an annual, semi-annual, quarterly, or monthly schedule.</Typography>
      </CardBody>
     
    </Card>
    
    <div className="div">
    <Typography variant="h3" color="blue-gray" className="mb-2 pt-10 w-full text-center">
    Key Responsibilities of Notion Insurance Brokers:
     </Typography>
     <TableComponent headers={TABLE_HEADERS_PAGE_1} rows={TABLE_ROWS_PAGE_1} columnWidths={COLUMN_WIDTHS} />
     
    </div>
     
      </CardBody>
    </Card>
    </div>
     </>
  )
}

export default LifeInsurance