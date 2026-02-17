# API Integration Guide

## AstraPort Core API

The DApp communicates with AstraPort Core microservices for portfolio data and analytics.

## Authentication

Include API key in request headers:
```
Authorization: Bearer {API_KEY}
```

## Endpoints

### Portfolio Endpoints

#### Get Portfolio
```
GET /api/portfolio/{publicKey}
Response:
{
  "totalBalance": "10000.00",
  "baseCurrency": "USD",
  "assets": [
    {
      "code": "USDC",
      "issuer": "GA5ZSEJYB37JRC5AVCIA5MOP4MS5O74UD7SDESBQSMBBBFNSTQWKAAS",
      "balance": "5000",
      "native": false
    }
  ],
  "lastUpdated": 1677600000
}
```

### Risk Endpoints

#### Get Risk Score
```
GET /api/risk/{publicKey}
Response:
{
  "overall": 45.2,
  "volatility": 32.1,
  "concentration": 55.8,
  "counterpartyRisk": 38.5
}
```

### Insights Endpoints

#### Get AI Insights
```
GET /api/insights/{publicKey}
Response:
[
  {
    "id": "insight-001",
    "title": "High Concentration Risk",
    "description": "Your portfolio is heavily concentrated in USDC",
    "severity": "high",
    "action": "Diversify",
    "timestamp": 1677600000
  }
]
```

## Error Handling

All endpoints return standard error responses:
```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message"
  }
}
```

Common error codes:
- `INVALID_PUBLIC_KEY` - Invalid Stellar public key
- `ACCOUNT_NOT_FOUND` - Account not found on network
- `API_ERROR` - Internal API error

## Rate Limiting

- 1000 requests per minute per IP
- 10000 requests per day per API key

## Webhooks (Future)

Real-time updates for portfolio changes and risk alerts.
