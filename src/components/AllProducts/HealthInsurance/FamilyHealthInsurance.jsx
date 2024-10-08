import React from 'react'
import TableComponent from '../GeneralInsurance/RelativeComponents/TableComponent'
import { Card, CardBody, Typography } from '@material-tailwind/react'
import InsuranceCard from '../GeneralInsurance/RelativeComponents/InsuranceCard';
import ImageTextCard from '../GeneralInsurance/RelativeComponents/ImageText';

const TABLE_HEADERS_PAGE_1 = [
    "Point of Difference",
    "Individual Insurance",
    "Family Insurance",
  ];
  
  const TABLE_ROWS_PAGE_1 = [
    {
      point: "Coverage Scope",
      individual:
        "Provides coverage for a single person. The benefits, such as hospitalization, treatment, and other medical expenses, are specific to the individual insured under the policy.",
      family:
        "Covers multiple family members under a single plan. The sum insured is shared among all covered family members, offering protection for spouses, children, and sometimes parents.",
    },
    {
      point: "Premium Cost",
      individual:
        "The premium is generally lower since it covers just one person. The cost is determined by factors like age, health condition, and coverage needs of the individual.",
      family:
        "The premium is higher as it offers coverage to multiple individuals. However, family plans are often more cost-effective than buying individual policies for each family member.",
    },
    {
      point: "Sum Insured",
      individual:
        "The sum insured is solely for the individual, ensuring that the full amount can be used if needed. There's no sharing of benefits.",
      family:
        "The sum insured is shared among all covered family members, which means if one member uses a large portion, the remaining amount may be lower for others.",
    },
    {
      point: " Flexibility and Renewals",
      individual:
        "Provides flexibility in choosing specific coverage based on the individual’s health requirements. Each policy is renewed independently.",
      family:
        "Offers a more streamlined renewal process since one policy covers multiple members. However, as the age of the oldest member increases, the premium for the entire family may rise.",
    },
    
  ];
  const COLUMN_WIDTHS = [
   "w-[15vw]",  // 40% width for Comprehensive Insurance
    "w-[30vw]", // 40% width for Third-party Insurance
    "w-[30vw]", // 40% width for Third-party Insurance
  ];
const FamilyHealthInsurance = () => {
    const insuranceOptions = [
        {
          logo: "/assets/images/company/icicibank.jpg", // Replace with actual image URLs
          insurerName: "Family Insurance",
          price: "-",
          keyFeatures: ["No Inspection Needed", "Immediate Policy Issurance"],
        //   link: "https://www.ilgi.co/D2DBB68FAE",
        },
      ];
  return (
    <>
    <div>
      <Card className="mt-6 shadow-none px-3 bg-white container w-full lg:w-[90%] xl:w-[90%] flex flex-col justify-center">
        <CardBody className="px-1">
          <Typography variant="h4" color="blue-gray" className="mb-2 ">
            Top Family Insurance Plans
          </Typography>

          <div className="mt-4 grid w-full px-6   grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            {insuranceOptions.map((option, index) => (
              <InsuranceCard key={index} {...option} />
            ))}
          </div>
          <br />

          <div>
            <ImageTextCard
              heading="A Guide to Family Insurance"
              subheading=" Get car insurance & protect your vehicle & yourself."
              imageSrc="https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80"
              altText="Nexon Car"
              description="Car insurance, also referred as Motor or Four-wheeler insurance, is a type of agreement between a car owner and an insurance provider. This contract provides financial protection to the vehicle if the vehicle suffers any damage or loss due to expected events like accidents & natural disasters. 
               A motor insurance holds more significance than just being a piece of paper to keep in the car’s dashboard and show traffic officials when necessary. This insurance policy gives financial protection to the damages of your vehicle caused in an accident or theft.No matter how careful you are while driving, accidents can happen, and repair costs can be substantial. Car insurance policies are of various types. First type is third-party car insurance. This cover protects you from financial damages if your insured vehicle unintentionally damages a third party's vehicle or property or injures a third party.  "
            />
          </div>
          
          <br />
          <div className="div pt-5">
            <Typography
              variant="h3"
              color="blue-gray"
              className="mb-2 pt-10 w-full text-center"
            >
              Individual Insurance Vs Family Insurance
            </Typography>
            <TableComponent
              headers={TABLE_HEADERS_PAGE_1}
              rows={TABLE_ROWS_PAGE_1}
              columnWidths={COLUMN_WIDTHS}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  </>
  )
}

export default FamilyHealthInsurance