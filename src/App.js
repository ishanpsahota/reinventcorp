// import logo from './logo.svg';
// import './App.css';

import { Routes, Route } from 'react-router-dom';

import Home from './views/Home/Home';
import Blogs from './views/Blogs/Blogs';
import Services from './views/Services/Services';
import AboutUs from './views/AboutUs/AboutUs';
import ContactUs from './views/ContactUs/ContactUs';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Services />} path="/services" />
          <Route element={<Blogs />} path="/blogs" />
          <Route element={<AboutUs />} path="/aboutus" />
          <Route element={<ContactUs />} path="/contactus" />
        </Routes>
        <Footer />
      </div>      
    </div>
  );
}

export default App;
