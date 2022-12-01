
import 'bootstrap/dist/css/bootstrap.min.css';
import './item.css';
import '../utility/utility'




function Item( props) {
  console.log(props)
 const {picture, name, id , time, description} = (props.data);

  return (
    
      <div>
          <div className="card-group">
          <div className="card">
            <img src={picture} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p>{id}</p>
              <p className="card-text">{description}</p>
              <p id="itemTime">{time}</p>
              
              {/* <button onClick={ ()=> handelAddToList(item)} className='w-100 btn btn-secondary'>Add to list</button> */}
            </div>
            
          </div>
          
        </div>
      </div>
    )
  ;
}

export default Item;