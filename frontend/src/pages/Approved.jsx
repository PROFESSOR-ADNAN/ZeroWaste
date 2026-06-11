import React, { useState } from 'react';

export default function Approved() {
  const [formData, setFormData] = useState({ amount: '', type: '', terms: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Approved:', formData);
    alert('Submission received — thank you!');
  };

  return (
    <div className="container-custom py-12">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold mb-4">Approval Request</h2>
        <p className="text-gray-600 mb-6">Provide details about the material you are approving.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Amount (kg)</label>
            <input
              name="amount"
              type="number"
              min="1"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Type</label>
            <div className="flex gap-4 mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="type"
                  value="Food"
                  checked={formData.type === 'Food'}
                  onChange={handleChange}
                  required
                />
                <span className="ml-2">Food</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="type"
                  value="Compost"
                  checked={formData.type === 'Compost'}
                  onChange={handleChange}
                  required
                />
                <span className="ml-2">Compost</span>
              </label>
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              required
            />
            <label className="ml-2 text-sm text-gray-600">
              I agree to the{' '}
              <a href="#" className="text-emerald-600">
                terms
              </a>
            </label>
          </div>

          <div className="flex justify-end">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
