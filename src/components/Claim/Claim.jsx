import React from 'react'
import { Typography } from "@material-tailwind/react";
import { Cog8ToothIcon } from "@heroicons/react/24/solid";
import {Helmet} from "react-helmet";


const Claim = () => {
  return (
    <div className="h-96 px-8 mx-auto grid place-items-center text-center">
      <Helmet>
  <meta charSet="utf-8" />
  <title>Claim - NIB</title>
  <meta
    name="description"
    content="Submit and track your insurance claims with Notion Insurance Broker Pvt. Ltd. We provide efficient support and guidance for all your insurance claims, ensuring a smooth and hassle-free process."
  />
  <meta
    name="keywords"
    content="insurance claims, NIB claims, Notion Insurance Broker claims, claim support, claim assistance, insurance claim process, claim submission, claim tracking, hassle-free insurance claims"
  />
</Helmet>
    <div>
      <Cog8ToothIcon className="h-20 w-20 mx-auto" />
      <Typography
        variant="h1"
        color="blue-gray"
        className="mt-7 !text-2xl md:text-3xl max-w-xl mx-auto !leading-snug"
      >
        We&apos;re currently undergoing maintenance to improve your
        experience.
      </Typography>
      <Typography className="!mt-4 md:max-w-2xl text-[18px] font-normal text-gray-500">
        Please bear with us while we make these enhancements. We&apos;ll be
        back shortly. Thank you for your patience!
      </Typography>
    </div>
  </div>
  )
}

export default Claim