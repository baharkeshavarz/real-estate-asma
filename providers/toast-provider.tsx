import { ToastContainer } from "react-toastify";
import { useMediaQuery } from "@uidotdev/usehooks";
import "react-toastify/dist/ReactToastify.css";

const ToastProvider = () => {
  // Check if window is defined before using client-side hooks
  if (typeof window !== 'undefined') {
    const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
    return (
      <ToastContainer
        toastClassName="toast-message"
        position={isSmallDevice ? "bottom-left" : "top-right"}
        draggable
      />
    );
  }
  // Return null if running on the server-side
  return null;
};

export default ToastProvider;
