import React, { useEffect, useState } from 'react';
import API from '../services/api';

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    API.get('/products')
      .then((res) => setProducts(res.data))
      .catch(() => {});
  }, []);

  return (
    <main className="container-custom py-12">
      <h2 className="text-3xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length === 0 && <div className="text-gray-500">No products available.</div>}
        {products.map((p) => (
          <div key={p._id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="h-44 bg-gray-100">
              <img
                src={p.image || '/img/1.jpg'}
                alt={p.title}
                className="w-full h-44 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{p.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-emerald-600 font-bold">${p.price}</div>
                <a href={`/payment`} className="px-3 py-1 bg-emerald-600 text-white rounded">
                  Buy
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
