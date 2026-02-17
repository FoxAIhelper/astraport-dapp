import { useEffect } from 'react';
import { usePortfolioData, useRiskScore, useInsights } from './usePortfolio';
import { useWalletStore, useDashboardStore } from '@/store';

/**
 * Custom hook that fetches and syncs all dashboard data
 */
export const useDashboardData = () => {
  const { account } = useWalletStore();
  const { setRiskScore, setInsights } = useDashboardStore();

  const publicKey = account?.publicKey || null;

  const { portfolio, error: portfolioError, fetchPortfolio } = usePortfolioData(publicKey);
  const { riskScore, error: riskError, fetchRiskScore } = useRiskScore(publicKey);
  const { insights, error: insightsError, fetchInsights } = useInsights(publicKey);

  useEffect(() => {
    if (publicKey) {
      fetchPortfolio();
      fetchRiskScore();
      fetchInsights();
    }
  }, [publicKey, fetchPortfolio, fetchRiskScore, fetchInsights]);

  // Sync to global store
  useEffect(() => {
    if (riskScore) setRiskScore(riskScore);
  }, [riskScore, setRiskScore]);

  useEffect(() => {
    if (insights.length > 0) setInsights(insights);
  }, [insights, setInsights]);

  return {
    portfolio,
    riskScore,
    insights,
    errors: {
      portfolio: portfolioError,
      risk: riskError,
      insights: insightsError,
    },
    loading: {
      portfolio: !portfolio,
      risk: !riskScore,
      insights: insights.length === 0,
    },
  };
};

export default useDashboardData;
