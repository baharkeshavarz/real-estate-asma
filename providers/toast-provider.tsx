"use client"

import { ToastContainer } from "react-toastify"
import { useMediaQuery } from "@uidotdev/usehooks";
import "react-toastify/dist/ReactToastify.css"

const ToastProvider = () => {
  const isSmallDevice  = useMediaQuery("only screen and (max-width : 768px)");
  return (
    <ToastContainer
      toastClassName="toast-message"
      position={isSmallDevice  ? "bottom-left" : "top-right"}
      draggable
    />
  )
}

export default ToastProvider
