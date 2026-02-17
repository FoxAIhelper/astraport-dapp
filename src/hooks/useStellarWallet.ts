import { useCallback } from 'react';
import { useWalletStore } from '@/store';

export const useStellarWallet = () => {
  const { connected, account, disconnect, setLoading, setError } = useWalletStore();

  const connectWallet = useCallback(async () => {
    setLoading(true);
    try {
      // TODO: Implement actual wallet connection logic
      // This will depend on the wallet provider (e.g., Freighter for Stellar)
      setError(null);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to connect wallet');
    } finally {
      setLoading(false);
    }
  }, [setLoading, setError]);

  const disconnectWallet = useCallback(() => {
    disconnect();
  }, [disconnect]);

  return {
    connected,
    account,
    connectWallet,
    disconnectWallet,
  };
};

export default useStellarWallet;
