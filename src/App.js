// import logo from './logo.svg';
// import './App.css';
import * as React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './views/Home/Home';
import Blogs from './views/Blogs/Blogs';
import Services from './views/Services/Services';
import AboutUs from './views/AboutUs/AboutUs';
import ContactUs from './views/ContactUs/ContactUs';
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';

import HeaderFooterContent from './components/Common/HeaderFooterContent';

function App() {
return (
  <div className="App container-fluid m-0 p-0">    
      {/* <Navbar /> */}
      <HeaderFooterContent navbar={true} />
      <div className='body'>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Services />} path="/services" />
          <Route element={<Blogs />} path="/blogs" />
          <Route element={<AboutUs />} path="/aboutus" />
          <Route element={<ContactUs />} path="/contactus" />
        </Routes>
      </div>      
      {/* <Footer />       */}
      <HeaderFooterContent navbar={false} />
    </div>
  );
}

export default App;
