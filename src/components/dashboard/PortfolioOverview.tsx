'use client';

import React from 'react';
import { useDashboardStore } from '@/store';

export const PortfolioOverview: React.FC = () => {
  const { riskScore } = useDashboardStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-600 font-semibold mb-2">Total Value</h3>
        <p className="text-3xl font-bold">$0.00</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-600 font-semibold mb-2">24h Change</h3>
        <p className="text-2xl font-bold text-green-500">+0.00%</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-600 font-semibold mb-2">Risk Score</h3>
        <p className="text-3xl font-bold text-yellow-600">
          {riskScore?.overall ?? '-'}
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-600 font-semibold mb-2">Assets</h3>
        <p className="text-3xl font-bold">0</p>
      </div>
    </div>
  );
};

export default PortfolioOverview;
