import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './item.css';



function GroupExample() {

  const [items, setitems] = useState([]);
  useEffect(() => {
    fetch('cricket_data.json')
    .then(res => res.json())
    .then(data => setitems(data))
    console.log(items)
  },[])
  return (
    items.map( item => (
      <div>
          <div className="card-group">
          <div className="card">
            <img src={item.picture} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p>{item.id}</p>
              <p className="card-text">{item.description}</p>
              <button className='w-100 btn btn-secondary'>Add to list</button>
            </div>
            
          </div>
          
        </div>
      </div>
    ))
  );
}

export default GroupExample;