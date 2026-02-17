import { mockDashboardData } from './mockData';

/**
 * Example of using the mock data in components
 * This demonstrates how the dashboard would look with sample portfolio data
 */

export function renderMockDashboard() {
  const { portfolio, riskScore, insights } = mockDashboardData;

  console.log('📊 Portfolio Overview:');
  console.log(`  Total Value: $${portfolio.totalBalance}`);
  console.log(`  Assets: ${portfolio.assets.length}`);
  console.log(`  Last Updated: ${new Date(portfolio.lastUpdated).toLocaleString()}`);

  console.log('\n⚠️  Risk Metrics:');
  console.log(`  Overall: ${riskScore.overall.toFixed(1)}/100`);
  console.log(`  Volatility: ${riskScore.volatility.toFixed(1)}/100`);
  console.log(`  Concentration: ${riskScore.concentration.toFixed(1)}/100`);
  console.log(`  Counterparty Risk: ${riskScore.counterpartyRisk.toFixed(1)}/100`);

  console.log('\n💡 AI Insights:');
  insights.forEach((insight) => {
    console.log(`  [${insight.severity.toUpperCase()}] ${insight.title}`);
    console.log(`    ${insight.description}`);
  });
}

// Example: Using mock data in a test
export function createTestPortfolioState() {
  return {
    ...mockDashboardData,
    portfolio: {
      ...mockDashboardData.portfolio,
      totalBalance: '20000.00', // Override for testing
    },
  };
}
