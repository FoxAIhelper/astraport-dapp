# AstraPort DApp Contributing Guide

## Getting Started

1. Fork the repository
2. Clone your fork
3. Create a feature branch: `git checkout -b feature/your-feature`
4. Install dependencies: `npm install`
5. Create a `.env.local` file with required variables

## Code Standards

- **Language**: TypeScript (strict mode)
- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Testing**: Jest + React Testing Library

## Commit Guidelines

Use conventional commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance

Example: `feat: add portfolio rebalancing widget`

## Pull Request Process

1. Update tests
2. Update documentation
3. Add entry to CHANGELOG.md
4. Ensure all tests pass: `npm test`
5. Run type checking: `npm run type-check`
6. Submit PR with clear description

## Development Workflow

```bash
# Start dev server
npm run dev

# Run tests
npm test

# Type checking
npm run type-check

# Build for production
npm run build
```

## File Structure

Keep components modular and organized:
```
src/components/feature/
├── Feature.tsx          # Main component
├── Feature.test.tsx     # Tests
├── useFeature.ts        # Custom hook (if needed)
└── index.ts             # Exports
```

## Code Review

All PRs require:
- At least one approval
- All tests passing
- No lint errors
- Documentation updated

## Questions?

Open an issue or discuss in the Discord channel.
