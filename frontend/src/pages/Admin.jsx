import React, { useEffect, useState } from 'react';
import API from '../services/api';

export default function Admin() {
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    API.get('/donations')
      .then((res) => setDonations(res.data))
      .catch(() => {});
  }, []);

  return (
    <main className="container-custom py-12">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Recent Donations</h3>
          {donations.length === 0 && <div className="text-gray-500">No donations yet.</div>}
          <ul className="space-y-3">
            {donations.map((d) => (
              <li key={d._id} className="flex items-center justify-between border p-3 rounded">
                <div>
                  <div className="font-medium">{d.type}</div>
                  <div className="text-sm text-gray-600">Donor: {d.donor?.name || 'Anonymous'}</div>
                </div>
                <div className="text-sm text-gray-700">{d.status}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Stats</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-emerald-50 rounded">
              <div className="text-2xl font-bold">{donations.length}</div>
              <div className="text-sm text-gray-600">Total Donations</div>
            </div>
            <div className="p-4 bg-emerald-50 rounded">
              <div className="text-2xl font-bold">—</div>
              <div className="text-sm text-gray-600">Other stat</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
