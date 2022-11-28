import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons'





function BasicExample() {
  return (
    <div className='container mt-5'>
      <h1 className='mx-5'><FontAwesomeIcon icon={faGamepad} /> Cricket Academy</h1>
      <h3 className='m-5'>Select today’s exercise</h3>
    </div>
  );
}

export default BasicExample;