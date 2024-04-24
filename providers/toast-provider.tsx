"use client";

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const ToastProvider = () => {
  return (
    <ToastContainer
      toastClassName="toast-message"
      position="top-right"
      draggable
    />
  )
}

export default ToastProvider
