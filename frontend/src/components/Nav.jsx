import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const token = localStorage.getItem('token');
  return (
    <header className="bg-white shadow-sm">
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/img/YourLogo.jpg" alt="logo" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-bold text-xl">Zero Waste</span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link to="/" className="text-gray-700 hover:text-emerald-600">
            Home
          </Link>
          <Link to="/donate" className="text-gray-700 hover:text-emerald-600">
            Donate
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-emerald-600">
            Buy
          </Link>
          {token ? (
            <Link to="/admin" className="text-gray-700 hover:text-emerald-600">
              Dashboard
            </Link>
          ) : (
            <Link to="/login" className="text-gray-700 hover:text-emerald-600">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
