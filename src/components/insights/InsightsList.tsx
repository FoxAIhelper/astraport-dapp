'use client';

import React from 'react';
import { useDashboardStore } from '@/store';
import { AIInsight } from '@/types';

const SeverityBadge: React.FC<{ severity: AIInsight['severity'] }> = ({ severity }) => {
  const colors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${colors[severity]}`}>
      {severity.toUpperCase()}
    </span>
  );
};

export const InsightsList: React.FC = () => {
  const { insights } = useDashboardStore();

  if (insights.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-gray-500">No insights available at this time</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-6">AI Insights & Recommendations</h2>
      
      <div className="space-y-4">
        {insights.map((insight) => (
          <div key={insight.id} className="border-l-4 border-stellar-600 pl-4 py-2">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-lg">{insight.title}</h3>
              <SeverityBadge severity={insight.severity} />
            </div>
            <p className="text-gray-600 mb-2">{insight.description}</p>
            {insight.action && (
              <button className="text-stellar-600 hover:text-stellar-700 font-semibold text-sm">
                {insight.action} →
              </button>
            )}
            <p className="text-gray-400 text-xs mt-2">
              {new Date(insight.timestamp).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightsList;
