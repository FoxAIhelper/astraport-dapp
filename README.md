# AstraPort DApp

> **Stellar Portfolio Visualization & AI-Driven Insights Platform**

AstraPort DApp is the **frontend interface** for users. It connects to Stellar wallets, visualizes portfolios, and displays AI-driven insights powered by advanced analytics.

[![Next.js](https://img.shields.io/badge/Next.js-14+-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18+-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3+-blue?logo=tailwind-css)](https://tailwindcss.com/)

---

## 📂 Repository Structure

```
astraport-dapp/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global Tailwind styles
│   └── not-found.tsx        # 404 page
├── src/
│   ├── components/          # React components
│   │   ├── wallet/         # Wallet connection (WalletConnect)
│   │   ├── dashboard/      # Portfolio overview & charts
│   │   ├── risk/           # Risk visualization
│   │   └── insights/       # AI insights display
│   ├── hooks/              # Custom React hooks
│   │   ├── useStellarWallet.ts
│   │   ├── usePortfolio.ts
│   │   └── useDashboardData.ts
│   ├── services/           # API services & integrations
│   │   ├── stellar.ts      # Stellar SDK wrapper
│   │   └── portfolio.ts    # Portfolio API client
│   ├── store/              # Zustand state management
│   ├── types/              # TypeScript type definitions
│   └── utils/              # Utility functions
├── tests/                   # Jest tests
├── examples/                # Code examples & mock data
├── docs/                    # Documentation
│   ├── SETUP.md           # Setup & installation guide
│   └── API.md             # API integration guide
├── public/                  # Static assets
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── next.config.js          # Next.js config
├── tailwind.config.ts      # Tailwind CSS config
└── jest.config.js          # Jest testing config
```

---

## 🔑 Core Modules

### Wallet 💰
- Stellar wallet connection (Freighter integration)
- Account management
- Network selection (Testnet/Public)

### Dashboard 📊
- Portfolio overview with key metrics
- Interactive charts with Chart.js
- Asset breakdown
- Performance tracking

### Risk ⚠️
- Overall risk score calculation
- Volatility analysis
- Concentration risk metrics
- Counterparty risk assessment

### AI Insights 💡
- Portfolio recommendations
- Risk alerts
- Optimization suggestions
- Market insights

---

## 🚀 Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript 5 |
| **UI Library** | React 18 |
| **Styling** | Tailwind CSS 3 |
| **State Management** | Zustand |
| **Blockchain** | Stellar SDK 11 |
| **Charting** | Chart.js 4 + D3.js 7 |
| **Testing** | Jest + React Testing Library |
| **Code Quality** | ESLint, Prettier |

---

## ⚡ Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- A Stellar wallet (e.g., Freighter)

### Installation

```bash
# Clone repository
git clone https://github.com/Astraportt/astraport-dapp.git
cd astraport-dapp

# Install dependencies
npm install

# Set up environment
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

```env
NEXT_PUBLIC_STELLAR_NETWORK=testnet      # testnet or public
NEXT_PUBLIC_ASTRAPORT_API_URL=https://api.astraport.dev
NEXT_PUBLIC_WALLET_TIMEOUT=300000
API_KEY=your_api_key_here
```

---

## 📖 Documentation

- **[Setup Guide](docs/SETUP.md)** - Installation & wallet connection
- **[API Reference](docs/API.md)** - API endpoints & integration
- **[Contributing](CONTRIBUTING.md)** - Development guidelines
- **[Changelog](CHANGELOG.md)** - Version history

---

## 🧪 Testing

```bash
# Run tests
npm test

# Watch mode
npm run test:watch

# Coverage
npm test -- --coverage
```

---

## 🏗️ Building

```bash
# Development
npm run dev

# Production build
npm run build
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

---

## 📡 API Integration

The DApp communicates with AstraPort Core services:

```
GET /portfolio/{publicKey}    # Portfolio data
GET /risk/{publicKey}          # Risk metrics
GET /insights/{publicKey}      # AI recommendations
```

See [API Documentation](docs/API.md) for full details.

---

## 🎨 Components

### WalletConnect
Handles Stellar wallet connection and account management.

```tsx
import { WalletConnect } from '@/components/wallet';

export default function App() {
  return <WalletConnect />;
}
```

### PortfolioChart
Interactive portfolio performance visualization.

```tsx
import { PortfolioChart } from '@/components/dashboard';

export default function Dashboard() {
  return <PortfolioChart />;
}
```

### RiskScoreDisplay
Real-time risk assessment metrics.

```tsx
import { RiskScoreDisplay } from '@/components/risk';

export default function RiskPanel() {
  return <RiskScoreDisplay />;
}
```

### InsightsList
AI-powered portfolio recommendations.

```tsx
import { InsightsList } from '@/components/insights';

export default function Insights() {
  return <InsightsList />;
}
```

---

## 🪝 Custom Hooks

### useStellarWallet
```tsx
const { connected, account, connectWallet, disconnectWallet } = useStellarWallet();
```

### useDashboardData
```tsx
const { portfolio, riskScore, insights, loading, errors } = useDashboardData();
```

### usePortfolioData
```tsx
const { portfolio, loading, error, fetchPortfolio } = usePortfolioData(publicKey);
```

---

## 📊 Example Data

See [examples/](examples/) for mock data and integration examples:

- `mockData.ts` - Sample portfolio, risk scores, and insights
- `usageDashboard.ts` - Dashboard usage examples
- `walletIntegration.ts` - Wallet connection examples

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'feat: add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## 📋 Development Checklist

- ✅ TypeScript strict mode
- ✅ Component testing setup
- ✅ API service layer
- ✅ State management (Zustand)
- ✅ Error handling
- ✅ Loading states
- ✅ Responsive design (Tailwind CSS)
- ✅ Environment configuration
- ✅ Documentation
- ✅ Examples & mock data

---

## 🗺️ Roadmap

### Phase 1 (Current)
- ✅ Project scaffold
- ✅ Component structure
- ✅ API integration layer
- ✅ Testing setup

### Phase 2
- [ ] Real wallet integration (Freighter)
- [ ] Historical data tracking
- [ ] Advanced charting (D3.js)
- [ ] Transaction history

### Phase 3
- [ ] Portfolio rebalancing tools
- [ ] Custom alerts
- [ ] Multi-wallet support
- [ ] Export functionality

### Phase 4
- [ ] Mobile application
- [ ] DeFi protocol integration
- [ ] Predictive analytics
- [ ] Community features

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙋 Support

- **Issues**: [GitHub Issues](https://github.com/Astraportt/astraport-dapp/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Astraportt/astraport-dapp/discussions)
- **Email**: support@astraport.dev

---

## 🔗 Useful Links

- [Stellar Documentation](https://developers.stellar.org/)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Chart.js](https://www.chartjs.org/)

---

**Built with ❤️ for the Stellar community**
