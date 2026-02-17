import StellarSdk from 'stellar-sdk';

const STELLAR_NETWORK = process.env.NEXT_PUBLIC_STELLAR_NETWORK || 'testnet';
const NETWORK_PASSPHRASE = STELLAR_NETWORK === 'public' 
  ? StellarSdk.Networks.PUBLIC_NETWORK_PASSPHRASE 
  : StellarSdk.Networks.TESTNET_NETWORK_PASSPHRASE;

export class StellarService {
  static getNetworkPassphrase(): string {
    return NETWORK_PASSPHRASE;
  }

  static isValidPublicKey(key: string): boolean {
    // Stellar public keys start with 'G' and are 56 characters long
    return /^G[A-Z2-7]{55}$/.test(key);
  }

  static validateAccount(publicKey: string): boolean {
    return this.isValidPublicKey(publicKey);
  }

  static async fetchAccountDetails(publicKey: string) {
    try {
      // This would connect to a Stellar horizon server
      // For now, returning mock data structure
      if (!this.isValidPublicKey(publicKey)) {
        throw new Error('Invalid public key');
      }

      // TODO: Connect to actual horizon server based on STELLAR_NETWORK
      return {
        publicKey,
        accountSequence: '0',
        balances: [],
      };
    } catch (error) {
      throw new Error(`Failed to fetch account: ${error}`);
    }
  }
}

export default StellarService;
