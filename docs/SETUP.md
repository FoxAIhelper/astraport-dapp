# Frontend Setup & Wallet Connection Guide

## Overview
AstraPort DApp is a Next.js application that connects to Stellar wallets and provides portfolio visualization with AI-driven insights.

## Prerequisites
- Node.js 18+
- npm or yarn
- A Stellar wallet (e.g., Freighter browser extension)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/AstraPort/astraport-dapp.git
cd astraport-dapp
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Update `.env.local` with your API endpoints and configuration.

## Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Wallet Connection

### Freighter Integration
The app integrates with Freighter, a Stellar wallet browser extension.

1. Install Freighter from the browser extension store
2. Create or import a Stellar account
3. Return to the app and click "Connect Wallet"
4. Approve the connection in Freighter

### Stellar Network
- Development: Testnet (default)
- Production: Public Network

Switch networks in your wallet settings.

## Building for Production

```bash
npm run build
npm start
```

## Testing

```bash
npm test
npm run test:watch
```

## API Integration

The app communicates with AstraPort Core via REST APIs:

- `/portfolio/{publicKey}` - Get portfolio data
- `/risk/{publicKey}` - Get risk metrics
- `/insights/{publicKey}` - Get AI recommendations

See [PortfolioService](../src/services/portfolio.ts) for implementation details.

## Project Structure

```
src/
├── components/          # React components
│   ├── wallet/         # Wallet connection components
│   ├── dashboard/      # Portfolio dashboard
│   ├── risk/           # Risk visualization
│   └── insights/       # AI insights display
├── services/           # API services
├── hooks/              # Custom React hooks
├── store/              # Zustand state management
├── types/              # TypeScript types
└── utils/              # Utility functions
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## Support

For issues and questions, please open a GitHub issue.
