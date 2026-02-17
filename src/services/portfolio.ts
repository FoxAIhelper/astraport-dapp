import axios from 'axios';
import { Portfolio, RiskScore, AIInsight } from '@/types';

const API_BASE = process.env.NEXT_PUBLIC_ASTRAPORT_API_URL || 'http://localhost:3001';

const apiClient = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
});

export class PortfolioService {
  static async getPortfolio(publicKey: string): Promise<Portfolio> {
    try {
      const { data } = await apiClient.get(`/portfolio/${publicKey}`);
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch portfolio: ${error}`);
    }
  }

  static async getRiskScore(publicKey: string): Promise<RiskScore> {
    try {
      const { data } = await apiClient.get(`/risk/${publicKey}`);
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch risk score: ${error}`);
    }
  }

  static async getInsights(publicKey: string): Promise<AIInsight[]> {
    try {
      const { data } = await apiClient.get(`/insights/${publicKey}`);
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch insights: ${error}`);
    }
  }
}

export default PortfolioService;
