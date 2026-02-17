export interface WalletAccount {
  publicKey: string;
  accountId: string;
  network: 'public' | 'testnet';
}

export interface Asset {
  code: string;
  issuer: string;
  balance: string;
  native: boolean;
}

export interface Portfolio {
  totalBalance: string;
  baseCurrency: string;
  assets: Asset[];
  lastUpdated: number;
}

export interface RiskScore {
  overall: number;
  volatility: number;
  concentration: number;
  counterpartyRisk: number;
}

export interface AIInsight {
  id: string;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
  action?: string;
  timestamp: number;
}

export interface DashboardData {
  portfolio: Portfolio;
  riskScore: RiskScore;
  insights: AIInsight[];
}

export interface ChartDataPoint {
  date: string;
  value: number;
}
