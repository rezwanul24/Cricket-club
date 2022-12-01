import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    return (
        <div>
            <div className='row mt-5'>
              <img className='profile-photo col-3 mt-2' src="https://res.cloudinary.com/dmhq6htq4/image/upload/v1669774301/profile_of_youtube_rvofma.png" alt="" srcset="" />
              <div className='col-9'>
                <h3>Rezwanul Haque</h3>
                <p><FontAwesomeIcon icon={faLocation} /> Jamalpur, Bangladesh</p>
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col-4'>
                <h3>50 <span>kg</span></h3>
                <p>Weight</p>
              </div>
              <div className='col-4'>
                <h3>5.5</h3>
                <p>Height</p>
              </div>
              <div className='col-4'>
                <h3>25 <span>yrs</span></h3>
                <p>Age</p>
              </div>
            </div>
            <h3>Add a break</h3>
            <div className='d-flex  mt-3'>
              <p className='b-time rounded-circle d-flex justify-content-center mx-2'>2m</p>
              <p className='b-time rounded-circle d-flex justify-content-center mx-2'>5m</p>
              <p className='b-time rounded-circle d-flex justify-content-center mx-2'>10m</p>
              <p className='b-time rounded-circle d-flex justify-content-center mx-2'>15m</p>
              <p className='b-time rounded-circle d-flex justify-content-center mx-2'>20m</p>
            </div>
            <h3 className='mt-3'>Exercise Details</h3>
            <div>
              <input className='mt-3 form-control' type="text" name="" placeholder='Exercise time' id="" />
              <input className='mt-3 form-control' type="text" name="" placeholder='Break time' id="" />
            </div>
            <button className='w-100 mt-3 btn btn-secondary' type="submit">Activity compilited</button>
        </div>
    );
};

export default Sidebar;