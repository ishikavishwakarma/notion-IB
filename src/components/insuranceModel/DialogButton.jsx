import React from "react";
import { Button } from "@material-tailwind/react";

const DialogButton = ({ handleOpen }) => {
  return (
    <Button onClick={handleOpen} variant="gradient">
    Open Dialog
  </Button>
  )
}

export default DialogButton