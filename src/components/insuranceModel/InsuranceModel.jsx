import React, { useState } from "react";
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button,Typography } from "@material-tailwind/react";
import { RxCross2 } from 'react-icons/rx';
import Tabs from "./ProductTabs";
const InsuranceModel = ({ open, handleOpen }) => {
  const [category, setCategory] = useState('generalInsurance');

  const handleCategory = (cat) => {
    setCategory(cat);
  };

  return (
    <Dialog open={open} size={"lg"} handler={handleOpen}>
      <DialogHeader>
        <div className="flex items-center justify-between w-full">
          <h1 className="text-lg font-semibold">More Products</h1>
          <span
            onClick={handleOpen}
            className="p-2 font-bold rounded-full bg-orange-100 text-lg cursor-pointer">
            <RxCross2 />
          </span>
        </div>
      </DialogHeader >
      <DialogBody className="h-[32rem] ">
      <Tabs/>
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={handleOpen}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  )
}

export default InsuranceModel
