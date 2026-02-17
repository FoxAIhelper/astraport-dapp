# Project Architecture

## Overview

AstraPort DApp follows a modern Next.js architecture with clear separation of concerns and scalable component structure.

## Architecture Layers

### 1. **Presentation Layer** (`/src/components`)
- Reusable React components with TypeScript
- Organized by feature domain
- Props-based data flow
- Client-side components (`'use client'` directive)

### 2. **Business Logic Layer** (`/src/hooks`, `/src/store`)
- Custom React hooks for data fetching
- Zustand stores for global state
- Separation between UI and data logic

### 3. **Service Layer** (`/src/services`)
- API client implementations
- Stellar SDK integration
- External service communication
- Error handling and retry logic

### 4. **Data Layer** (`/src/types`, `/src/utils`)
- TypeScript type definitions
- Utility functions
- Constants and helpers
- Formatting and validation

## Component Structure

```
Feature Component
│
├─ Component.tsx (UI & JSX)
├─ useFeature.ts (Logic & State)
├─ Feature.test.tsx (Tests)
└─ index.ts (Exports)
```

## Data Flow

```
User Interaction
    ↓
Component
    ↓
Custom Hook (useStellarWallet, usePortfolioData)
    ↓
Service Layer (PortfolioService, StellarService)
    ↓
API / Stellar SDK
    ↓
Response → Store (Zustand) → Component Update
```

## State Management Strategy

### Global State (Zustand Store)
- Wallet connection status
- User account information
- Portfolio data
- Dashboard metrics

### Local State (useState)
- UI-specific state
- Form inputs
- Loading/error states
- Modal visibility

### Server State (API Services)
- Portfolio data
- Risk metrics
- AI insights
- Account information

## File Organization

### `/src/components`
- Each module gets its own folder
- Index file for clean exports
- Co-locate styles with components
- One component per file (mostly)

### `/src/hooks`
- Custom hooks for data fetching
- Custom hooks for business logic
- Avoid over-hooks syndrome
- Document complex hooks

### `/src/services`
- API clients as classes or functions
- Error handling
- Request/response transformation
- Caching strategy

### `/src/store`
- Zustand store instances
- Type definitions for state
- Actions for mutations
- Side effect handling

## Best Practices

1. **TypeScript First**
   - Strict mode enabled
   - No `any` types
   - Proper interface definitions

2. **Component Design**
   - Single Responsibility Principle
   - Props-based composition
   - Avoid prop drilling (use context/store)

3. **Error Handling**
   - Try-catch in services
   - Error state in components
   - User-friendly error messages

4. **Performance**
   - Memoize expensive components
   - Lazy load routes
   - Optimize re-renders
   - Use proper dependencies in hooks

5. **Testing**
   - Unit tests for services
   - Component tests for UI
   - Integration tests for flows
   - Mock external dependencies

## Scaling Considerations

### Adding New Features
1. Create feature folder in `/src/components`
2. Create corresponding hook if needed
3. Extend services if API calls needed
4. Add types to `/src/types`
5. Write tests

### Adding New API Endpoints
1. Create new service in `/src/services`
2. Add types in `/src/types`
3. Create corresponding hook
4. Integrate with store if global state needed
5. Add error handling

### Adding New Pages
1. Create route in `/app`
2. Create layout if needed
3. Use components from `/src/components`
4. Connect to store/hooks
5. Add to navigation

## Dependencies

- **react/next**: UI framework
- **zustand**: State management
- **stellar-sdk**: Blockchain integration
- **chart.js**: Data visualization
- **tailwind**: Styling
- **axios**: HTTP client
- **typescript**: Type safety

## Environment & Configuration

- Environment variables in `.env.local`
- Global config in `next.config.js`
- TypeScript config in `tsconfig.json`
- Tailwind config in `tailwind.config.ts`
