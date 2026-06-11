import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Donate from './pages/Donate';
import Products from './pages/Products';
import Admin from './pages/Admin';
import Payment from './pages/Payment';
import Provide from './pages/Provide';
import Seller from './pages/Seller';
import Approved from './pages/Approved';

export default function App() {
  return (
    <div>
      <Nav />
      <div className="container-custom">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/products" element={<Products />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/provide" element={<Provide />} />
          <Route path="/seller" element={<Seller />} />
          <Route path="/approved" element={<Approved />} />
        </Routes>
      </div>
    </div>
  );
}
