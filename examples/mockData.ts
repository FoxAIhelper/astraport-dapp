// Mock Portfolio Data
export const mockPortfolio = {
  totalBalance: '15840.52',
  baseCurrency: 'USD',
  assets: [
    {
      code: 'native',
      issuer: '',
      balance: '1000.00',
      native: true,
    },
    {
      code: 'USDC',
      issuer: 'GA5ZSEJYB37JRC5AVCIA5MOP4MS5O74UD7SDESBQSMBBFNSTQWKAAS',
      balance: '8500.00',
      native: false,
    },
    {
      code: 'EUROC',
      issuer: 'GBBD47UZQ5DQQFTQ5U4XFJPKHUD5P2MQND3ZJJWUCHQMETKAZH43MQ',
      balance: '6340.52',
      native: false,
    },
  ],
  lastUpdated: Date.now(),
};

// Mock Risk Score
export const mockRiskScore = {
  overall: 42.5,
  volatility: 35.2,
  concentration: 48.7,
  counterpartyRisk: 39.1,
};

// Mock Insights
export const mockInsights = [
  {
    id: 'insight-001',
    title: 'Portfolio Concentration Alert',
    description: 'USDC represents 53.6% of your portfolio. Consider diversifying to reduce concentration risk.',
    severity: 'medium',
    action: 'View diversification options',
    timestamp: Date.now() - 3600000,
  },
  {
    id: 'insight-002',
    title: 'Optimal Rebalancing Opportunity',
    description: 'Market conditions suggest rebalancing your EUR exposure to take advantage of current rates.',
    severity: 'low',
    action: 'See rebalancing strategy',
    timestamp: Date.now() - 7200000,
  },
  {
    id: 'insight-003',
    title: 'Counterparty Risk Update',
    description: 'New audit results for asset issuer: GBBD47UZ... show improved security measures.',
    severity: 'low',
    action: 'View audit report',
    timestamp: Date.now() - 86400000,
  },
];

// Mock Dashboard Data
export const mockDashboardData = {
  portfolio: mockPortfolio,
  riskScore: mockRiskScore,
  insights: mockInsights,
};
