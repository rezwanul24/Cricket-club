import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ToasT(){
  const notify = () => toast("Wow Activity Complited!");

  return (
    <div>
      <button className='w-100 mt-3 btn btn-secondary' onClick={notify}>Activity Complited</button>
      <ToastContainer />
    </div>
  );
}


export default ToasT;