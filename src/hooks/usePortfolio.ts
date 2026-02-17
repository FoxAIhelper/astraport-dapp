import { useCallback, useState } from 'react';
import PortfolioService from '@/services/portfolio';
import { Portfolio, RiskScore, AIInsight } from '@/types';

export const usePortfolioData = (publicKey: string | null) => {
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPortfolio = useCallback(async () => {
    if (!publicKey) return;
    
    setLoading(true);
    setError(null);
    try {
      const data = await PortfolioService.getPortfolio(publicKey);
      setPortfolio(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch portfolio');
    } finally {
      setLoading(false);
    }
  }, [publicKey]);

  return { portfolio, loading, error, fetchPortfolio };
};

export const useRiskScore = (publicKey: string | null) => {
  const [riskScore, setRiskScore] = useState<RiskScore | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRiskScore = useCallback(async () => {
    if (!publicKey) return;
    
    setLoading(true);
    setError(null);
    try {
      const data = await PortfolioService.getRiskScore(publicKey);
      setRiskScore(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch risk score');
    } finally {
      setLoading(false);
    }
  }, [publicKey]);

  return { riskScore, loading, error, fetchRiskScore };
};

export const useInsights = (publicKey: string | null) => {
  const [insights, setInsights] = useState<AIInsight[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchInsights = useCallback(async () => {
    if (!publicKey) return;
    
    setLoading(true);
    setError(null);
    try {
      const data = await PortfolioService.getInsights(publicKey);
      setInsights(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch insights');
    } finally {
      setLoading(false);
    }
  }, [publicKey]);

  return { insights, loading, error, fetchInsights };
};
