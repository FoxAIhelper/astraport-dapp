/**
 * Constants used across the application
 */

export const STELLAR_NETWORKS = {
  PUBLIC: 'public',
  TESTNET: 'testnet',
} as const;

export const RISK_THRESHOLDS = {
  LOW: 33,
  MEDIUM: 66,
  HIGH: 100,
} as const;

export const ASSET_TYPES = {
  NATIVE: 'native',
  ALPHACHAR4: 'credit_alphanum4',
  ALPHACHAR12: 'credit_alphanum12',
} as const;

export const API_ENDPOINTS = {
  PORTFOLIO: '/portfolio',
  RISK: '/risk',
  INSIGHTS: '/insights',
} as const;

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
} as const;

export const CACHE_DURATION = {
  PORTFOLIO: 5 * 60 * 1000, // 5 minutes
  RISK: 10 * 60 * 1000, // 10 minutes
  INSIGHTS: 15 * 60 * 1000, // 15 minutes
} as const;
