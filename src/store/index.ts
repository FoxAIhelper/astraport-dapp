import { create } from 'zustand';
import { WalletAccount, Portfolio, RiskScore, AIInsight } from '@/types';

interface WalletState {
  connected: boolean;
  account: WalletAccount | null;
  portfolio: Portfolio | null;
  loading: boolean;
  error: string | null;
  connect: (account: WalletAccount) => void;
  disconnect: () => void;
  setPortfolio: (portfolio: Portfolio) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useWalletStore = create<WalletState>((set) => ({
  connected: false,
  account: null,
  portfolio: null,
  loading: false,
  error: null,
  connect: (account) => set({ connected: true, account, error: null }),
  disconnect: () => set({ connected: false, account: null, portfolio: null }),
  setPortfolio: (portfolio) => set({ portfolio }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));

interface DashboardState {
  riskScore: RiskScore | null;
  insights: AIInsight[];
  selectedAsset: string | null;
  setRiskScore: (score: RiskScore) => void;
  setInsights: (insights: AIInsight[]) => void;
  setSelectedAsset: (asset: string | null) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  riskScore: null,
  insights: [],
  selectedAsset: null,
  setRiskScore: (score) => set({ riskScore: score }),
  setInsights: (insights) => set({ insights }),
  setSelectedAsset: (asset) => set({ selectedAsset: asset }),
}));
