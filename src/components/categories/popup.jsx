import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyComponent = () => {
  const notify = () => {
    toast.success('Hello, this is a toast message!');
  };

  return (
    <div>
      <button className="btn-addCart"onClick={notify}>Check Out</button>
      <ToastContainer />
    </div>
  );
};

export default MyComponent;
