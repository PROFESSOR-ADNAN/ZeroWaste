import React, { useState } from 'react';
import API from '../services/api';

export default function Donate() {
  const [type, setType] = useState('Food');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await API.post('/donations', { type, description });
      setDescription('');
      setType('Food');
      alert('Donation submitted — thank you!');
    } catch (err) {
      alert('Error submitting donation');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="container-custom py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div
            className="md:w-1/2 bg-emerald-600 text-white p-8 flex items-center justify-center"
            style={{
              backgroundImage: `url('/img/Donor.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="bg-black/40 p-6 rounded">
              <h3 className="text-2xl font-bold">Give Back Locally</h3>
              <p className="mt-2">Offer food, materials or resources to nearby organizations.</p>
            </div>
          </div>
          <div className="md:w-1/2 p-8">
            <h2 className="text-2xl font-semibold mb-4">Make a Donation</h2>
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Donation Type</label>
                <select
                  name="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="mt-1 block w-full max-w-sm rounded-md border-gray-200"
                >
                  <option>Food</option>
                  <option>Cloth</option>
                  <option>Fuel</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={5}
                  className="mt-1 block w-full rounded-md border-gray-200"
                  placeholder="Details, pickup notes, location..."
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  We will contact you about pickup arrangements.
                </span>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-500"
                >
                  {submitting ? 'Submitting…' : 'Submit Donation'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
