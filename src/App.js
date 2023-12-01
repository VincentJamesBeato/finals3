// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Start from "./Start";
import Home from "./component/Home";
import Update from "./component/Update";
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="bg-light" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/bb.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      height: '100vh',
  }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>
                                    <img src={process.env.PUBLIC_URL + '/c4.png'} class="d-block position-absolute cloud2 rounded" alt="..." height="150"/>
                                    <img src={process.env.PUBLIC_URL + '/c4.png'} class="d-block position-absolute cloud1 rounded" alt="..." height="150"/>
                                    <img src={process.env.PUBLIC_URL + '/c4.png'} class="d-block position-absolute cloud3 rounded" alt="..." height="150"/>
                                    <img src={process.env.PUBLIC_URL + '/c4.png'} class="d-block position-absolute cloud4 rounded" alt="..." height="150"/>
                                      
                                    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
                                      <h1 style={{ fontSize: 180, fontFamily: 'Ephesis, sans-serif' }}>My Journal</h1>
                                      <div className="d-flex justify-content-center align-items-center">
                                        <div className="btn btn-outline-primary"><Start /></div>
                                      </div>
                                    </div>
                                  </div>} />
          <Route path='/home' element={<Home />} />
          <Route path='/update/:id' element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
