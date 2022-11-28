
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'


function App() {
  return (
    <div className="App">
      <div className="row">
        <section className=" col-9 main">
          <div className="container">
            <Header></Header>
          </div>
        </section>
        <section className=" col-3 bg-primary side-bar">
          <div className="container-fluid">
            
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
