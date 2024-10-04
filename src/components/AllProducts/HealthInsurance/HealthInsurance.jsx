import React from 'react'
import InsuranceCard from '../GeneralInsurance/RelativeComponents/InsuranceCard';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import ImageTextCard from '../GeneralInsurance/RelativeComponents/ImageText';
import InsuranceTypes from '../GeneralInsurance/RelativeComponents/TypesInsurance';

const HealthInsurance = () => {
  const insurancetypes = [
    {
      name: 'To Safeguard Your Savings',
      description: 'Investing in health insurance is a proactive way to protect your hard-earned savings. In the event of unexpected medical expenses, having coverage ensures that you won’t have to deplete your savings or take on debt to manage healthcare costs.'},
    {
      name: 'To Combat Medical Inflation',
      description: 'With the continuous rise in healthcare costs, medical inflation can quickly erode your financial resources. Health insurance acts as a buffer against these escalating expenses, ensuring you have access to necessary medical services without the fear of exorbitant bills. '},
    {
      name: 'Adapting to Lifestyle Changes',
      description: 'Our lifestyles are constantly evolving, often leading to new health challenges that require immediate attention. A comprehensive health insurance plan is essential for adapting to these changes, providing coverage for various medical needs that arise from modern living.'},
  ];
    const insuranceOptions = [
        {
          logo: '/assets/images/company/icicibank.jpg', // Replace with actual image URLs
          insurerName: 'Health Insurance',
          price: '-',
          keyFeatures: ['No Inspection Needed', 'Immediate Policy Issurance'],
          // link:'https://www.ilgi.co/D2DBB68FAE'
        },
        
      ];
  return (
    <>
   
    <div>
      
      <Card className="mt-6 shadow-none px-3 bg-white container w-full lg:w-[90%] xl:w-[90%] flex flex-col justify-center">
      <CardBody className="px-1">
      <Typography variant="h4" color="blue-gray" className="mb-2 ">
        Top Health Insurance Plans
      </Typography>
      
      <div className="mt-4 grid w-full px-6   grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
        {insuranceOptions.map((option, index) => (
          <InsuranceCard key={index} {...option} />
        ))}
      </div>
      <br />
      <ImageTextCard
     heading="A Guide to Health Insurance"
       subheading="Essential Features and Benefits of Health Insurance Policies"
       imageSrc="https://www.hdfclife.com/content/dam/hdfclifeinsurancecompany/category-page/health-plan/images/HealthInsurance.png"
       altText="Bike"
       description="Health insurance is a contract between the insurer and the policyholder in which the insurance company agrees to reimburse medical expenses incurred by the policyholder during the policy's duration. According to the terms of the policy, the insured may face medical costs due to illness or unfortunate accidents that require hospital treatment. To access the benefits of a health insurance policy, the policyholder must pay a specified amount regularly, known as a premium. This premium, set by the insurance company, must be paid consistently—whether monthly, quarterly, semi-annually, or annually—without exception."
     />
      <br />
      <InsuranceTypes 
        title="The Significance of Health Insurance for Indian Citizens" 
        description="As healthcare costs continue to soar, the ability to access quality medical treatment can significantly impact your financial stability. To safeguard yourself and your loved ones from the financial burden of critical illnesses, it is essential for every individual to invest in a dependable health insurance plan. Here are the key reasons why obtaining coverage sooner rather than later is beneficial:"
        insuranceOptions={insurancetypes} 
        showButton={false} 
      />
      
      </CardBody>
    </Card>
    </div>
     </>
  )
}

export default HealthInsurance