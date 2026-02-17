/**
 * Example of connecting to Stellar wallet
 * This shows how to implement wallet connection in the future
 */

// Example Freighter integration
export async function connectFreighterWallet() {
  try {
    // Check if Freighter is installed
    if (!window.freighter) {
      throw new Error('Freighter wallet not installed');
    }

    // Request public key
    const publicKey = await window.freighter.requestPublicKey();

    // Verify network
    const network = await window.freighter.getNetwork();

    console.log('Connected to:', publicKey);
    console.log('Network:', network);

    return {
      publicKey,
      network: network === 'TESTNET_NETWORK_PASSPHRASE' ? 'testnet' : 'public',
    };
  } catch (error) {
    console.error('Failed to connect wallet:', error);
    throw error;
  }
}

// Example of signing a transaction
export async function signTransaction(xdr: string) {
  try {
    if (!window.freighter) {
      throw new Error('Freighter wallet not installed');
    }

    const signedXDR = await window.freighter.signTransaction(xdr);
    return signedXDR;
  } catch (error) {
    console.error('Failed to sign transaction:', error);
    throw error;
  }
}

// TypeScript declarations for Freighter
declare global {
  interface Window {
    freighter?: {
      requestPublicKey(): Promise<string>;
      getNetwork(): Promise<string>;
      signTransaction(xdr: string): Promise<string>;
    };
  }
}

export {};
