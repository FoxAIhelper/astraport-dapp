'use client';

import React, { useState } from 'react';
import { useWalletStore } from '@/store';

export const WalletConnect: React.FC = () => {
  const { connected, account, disconnect } = useWalletStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleConnect = async () => {
    setLoading(true);
    setError(null);
    try {
      // TODO: Implement actual wallet connection
      // This would integrate with Freighter or other Stellar wallets
      console.log('Connecting wallet...');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Connection failed');
    } finally {
      setLoading(false);
    }
  };

  const handleDisconnect = () => {
    disconnect();
  };

  if (connected && account) {
    return (
      <div className="flex items-center gap-3">
        <div className="text-sm">
          <p className="font-semibold">{account.publicKey.substring(0, 8)}...</p>
          <p className="text-gray-500 text-xs">{account.network}</p>
        </div>
        <button
          onClick={handleDisconnect}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        onClick={handleConnect}
        disabled={loading}
        className="px-4 py-2 bg-stellar-600 text-white rounded-lg hover:bg-stellar-700 disabled:opacity-50"
      >
        {loading ? 'Connecting...' : 'Connect Wallet'}
      </button>
    </div>
  );
};

export default WalletConnect;
