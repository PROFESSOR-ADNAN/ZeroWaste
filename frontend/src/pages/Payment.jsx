import React, { useState } from 'react';
import API from '../services/api';

export default function Payment() {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await API.post('/payments', {
        amount: Number(amount),
        method: 'manual',
      });
      alert('Payment status: ' + res.data.status);
      setAmount('');
    } catch (err) {
      alert('Payment failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container-custom py-12">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Make a Payment</h2>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Amount (USD)</label>
            <input
              type="number"
              min="1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-200"
              required
            />
          </div>
          <div className="flex justify-end">
            <button disabled={loading} className="px-4 py-2 bg-emerald-600 text-white rounded">
              {loading ? 'Processing…' : 'Pay'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
