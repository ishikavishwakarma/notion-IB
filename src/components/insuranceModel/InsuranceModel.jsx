import React from "react";
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button } from "@material-tailwind/react";

const InsuranceModel = ({ open, handleOpen }) => {
  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>Its a simple dialog.</DialogHeader>
      <DialogBody>
        The key to more success is to have a lot of pillows. Put it this way, it
        took me twenty-five years to get these plants, twenty-five years of
        blood, sweat, and tears, and I'm never giving up; I'm just getting started.
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
