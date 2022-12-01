
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import Header from './components/Header';
import Item from './components/Item';
import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import { addTime } from "./utility/utility";



function App() {

  const [items, setitems] = useState([]);
  useEffect(() => {
    fetch('cricket_data.json')
    .then(res => res.json())
    .then(data => setitems(data))
    
  }, []);

  const [activityItem, setActivityItem] = useState(0);

  const handelAddToTime = (itemData) => {
    // console.log(itemData);
    // let newItem = [...activityItem, itemData];
    setActivityItem(itemData.time+activityItem);
    addTime(itemData.name);
  }

  return (
    
      <div className="App">
      <div className="row">
        <section className=" col-9 main">
          <div className="container">
            <Header></Header>
            <div className="item-container">
            {
              items.map(item => 
                <Item key={item.id} data={item} handelAddToTime={handelAddToTime}></Item>
                )
            }
            </div>
            
          </div>
        </section>
        <section className=" col-3  side-bar">
          <div className="container-fluid">
            <Sidebar activityItem={activityItem}></Sidebar>
          </div>
        </section>
      </div>
    </div>
    )
  ;}


export default App;
