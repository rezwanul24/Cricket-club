import React from 'react';
import { ToastContainer, toast } from "react-toastify";
const ToasT = () => {
    const notify = () =>
      toast.success("You have done", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    return (
      <div>
        <button
          className="btn btn-outline-light w-100 fs-5 activity-btn mt-5"
          onClick={() => notify()}
        >
          Playing Completed
        </button>
        <ToastContainer />
      </div>
    );
};

export default ToasT;