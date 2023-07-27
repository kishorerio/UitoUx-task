import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/nav';
import NavBar2 from './components/Navbar2';
import Home from './components/home';
import AboutUs from './components/about';
import logo from './source-images/logo.png';
import carLogo from './source-images/svg/car.svg';
import slide1 from "./source-images/slide-1.jpeg";
// import ContactUs from './components/ContactUs';
// import StoreLocation from './components/StoreLocation';
// import TrackOrder from './components/TrackOrder';
// import Blog from './components/Blog';
import "./components/NavBar.css";
import "./components/Navbar2";
import './components/style.css';
import brand1 from "./source-images/brand-1.png";
import brand2 from "./source-images/brand-2.png";
import brand3 from "./source-images/brand-3.png";
import brand4 from "./source-images/brand-4.png";
import brand5 from "./source-images/brand-5.png";
import brand6 from "./source-images/brand-6.png";
import brand7 from "./source-images/brand-7.png";
import brand8 from "./source-images/brand-8.png";
import brand9 from "./source-images/brand-9.png";
import brand10 from "./source-images/brand-10.png";
import brand11 from "./source-images/brand-11.png";
import brand12 from "./source-images/brand-12.png";
import brand13 from "./source-images/brand-13.png";
import brand14 from "./source-images/brand-14.png";
import brand15 from "./source-images/brand-15.png";
import brand16 from "./source-images/brand-16.png";
import product1 from "./source-images/product-1.jpeg";
import product2 from "./source-images/product-2.jpeg";
import product3 from "./source-images/product-3.jpeg";
import product4 from "./source-images/product-4.jpeg";
import product5 from "./source-images/product-5.jpeg";


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <img
          src={logo}
          alt="logo"
          className="navbar-image"
        />
        <img src={carLogo} alt='logo' className='car-logo'/> 
     <div className="navbar-dropdown">    
        <select>
          <option value="">Select Vehicle</option>
          <option value="car">Car</option>
          <option value="bike">Bike</option>
          <option value="truck">Truck</option>
         
          {/* Add more vehicle options as needed */}
        </select>
          <input type="text" placeholder="Enter keyboard or a Part Number" />
      </div>
    <div className='dropdown-container'>
      Compare:1 &nbsp;&nbsp;
      Currency:
      <select className='curr-lang'>
        <option value="US">US</option>
        <option value="RS">RS</option>
      </select>
      &nbsp;&nbsp;
      Language:
      <select className='curr-lang'>
        <option value="Eng">Eng</option>
        <option value="Tam">Tam</option>
        <option value="Tam">mal</option>
        <option value="Tam">hindi</option>
      </select>
    </div>
        <Switch>
        <Route path="/" component={Home} />
          <Route path="/about" component={AboutUs} />
          {/* <Route path="/contact" component={ContactUs} />
          <Route path="/store" component={StoreLocation} />
          <Route path="/track" component={TrackOrder} />
          <Route path="/blog" component={Blog} /> */}
        </Switch>
      </div>

      <NavBar2 />

      <div className='img-letter'>
        <h1> <span className='discount'> 30% OFF</span> <br/> When Buying Parts<br/> With Insallation </h1>
        <p> Insallation of parts in the Services of <br/> our partness</p>
        <button className="shop-now-button">Shop Now</button>
      </div>
        <img src={slide1} alt='slideImg'/> <br></br>
        <img src={brand1} alt='brand1' className='margin' href=''></img>
        <img src={brand2} alt='brand2' className='margin' href=''></img>
        <img src={brand3} alt='brand3' className='margin' href=''></img>
        <img src={brand4} alt='brand4' className='margin' href=''></img>
        <img src={brand5} alt='brand5' className='margin' href=''></img>
        <img src={brand6} alt='brand6' className='margin' href=''></img>
        <img src={brand7} alt='brand7' className='margin' href=''></img>
        <img src={brand8} alt='brand8' className='margin' href=''></img><br></br>
        <img src={brand9} alt='brand9' className='margin' href=''></img>
        <img src={brand10} alt='brand10' className='margin' href=''></img>
        <img src={brand11} alt='brand11' className='margin' href=''></img>
        <img src={brand12} alt='brand12' className='margin' href=''></img>
        <img src={brand13} alt='brand13' className='margin' href=''></img>
        <img src={brand14} alt='brand14' className='margin' href=''></img>
        <img src={brand15} alt='brand15' className='margin' href=''></img>
        <img src={brand16} alt='brand16' className='margin' href=''></img>
        <br></br>
        <h2>Freature products</h2><br></br>
        <div className="image-card">
          <img src={product1} alt='product1' className="card-image" />
           <div className="card-content">
            <h3>Glossy gray19'Aluminium Wheel AR-19</h3>
           <p></p>
         </div>
        </div>
        <div className="image-card">
          <img src={product2} alt='product2' className="card-image" />
           <div className="card-content">
            <h3>Glossy gray19'Aluminium Wheel AR-19</h3>
           <p></p>
         </div>
        </div>
        <div className="image-card">
          <img src={product3} alt='product2' className="card-image" />
           <div className="card-content">
            <h3>Glossy gray19'Aluminium Wheel AR-19</h3>
           <p></p>
         </div>
        </div>
        <div className="image-card">
          <img src={product4} alt='product2' className="card-image" />
           <div className="card-content">
            <h3>Glossy gray19'Aluminium Wheel AR-19</h3>
           <p></p>
         </div>
        </div>
        <div className="image-card">
          <img src={product5} alt='product2' className="card-image" />
           <div className="card-content">
            <h3>Glossy gray19'Aluminium Wheel AR-19</h3>
           <p></p>
         </div>
        </div>
    </Router>
  );
}

export default App;
