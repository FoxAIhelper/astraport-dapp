# Development Guidelines

## Code Style

### TypeScript
- Use strict mode (enabled in `tsconfig.json`)
- Explicit return types on functions
- No `any` types - use proper typing
- Interface names start with capital letter
- Use type aliases for simple types

```tsx
// ✅ Good
interface UserAccount {
  publicKey: string;
  network: 'public' | 'testnet';
}

function getAccount(): UserAccount {
  // ...
}

// ❌ Avoid
const getAccount = (): any => {
  // ...
};
```

### Components
- Functional components only
- Use `'use client'` for client components
- Props should be typed
- Extract complex logic to hooks
- Keep components single-responsibility

```tsx
// ✅ Good
interface WalletButtonProps {
  onConnect: () => Promise<void>;
  loading?: boolean;
}

export const WalletButton: React.FC<WalletButtonProps> = ({ onConnect, loading }) => {
  // ...
};

// ❌ Avoid
const WalletButton = (props) => {
  // complex logic inline
};
```

### Naming Conventions
- Components: PascalCase (`WalletConnect.tsx`)
- Hooks: camelCase with `use` prefix (`useStellarWallet.ts`)
- Constants: UPPER_SNAKE_CASE (`STELLAR_NETWORKS`)
- Private functions: `_privateFunction`
- Classes: PascalCase (`PortfolioService`)

## Git Workflow

### Branches
- `main` - Production ready
- `develop` - Integration branch
- `feature/description` - Feature development
- `fix/description` - Bug fixes
- `docs/description` - Documentation

### Commits
```bash
# Format: type(scope): description

feat(wallet): add Freighter integration
fix(dashboard): resolve chart rendering issue
docs(setup): update installation steps
refactor(services): restructure API client
test(components): add wallet tests
```

### Pull Requests
1. Clear title describing changes
2. Detailed description of what and why
3. Reference related issues with #123
4. Link relevant documentation
5. Include screenshots for UI changes

## Code Review Checklist

- [ ] Code follows style guide
- [ ] TypeScript types are correct
- [ ] Tests are included
- [ ] No console.log statements
- [ ] Proper error handling
- [ ] Comments for complex logic
- [ ] Documentation updated
- [ ] No breaking changes

## Testing

### Unit Tests
```tsx
// test component logic
describe('WalletConnect', () => {
  it('renders connect button', () => {
    render(<WalletConnect />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
```

### Service Tests
```ts
// test API services
describe('PortfolioService', () => {
  it('fetches portfolio data', async () => {
    const data = await PortfolioService.getPortfolio(mockAddress);
    expect(data).toHaveProperty('totalBalance');
  });
});
```

## Performance Tips

1. **Code Splitting**
   ```tsx
   const Dashboard = dynamic(() => import('./Dashboard'), {
     loading: () => <Skeleton />,
   });
   ```

2. **Memoization**
   ```tsx
   const MemoizedChart = React.memo(Chart);
   ```

3. **Lazy Loading**
   - Use Next.js Image component for images
   - Lazy load heavy components
   - Virtualize long lists

4. **Bundle Size**
   - Check with `npm run build`
   - Avoid large dependencies
   - Tree-shake unused code

## Debugging

### Browser DevTools
- React DevTools extension
- Redux DevTools for state
- Network tab for API calls
- Console for errors

### VS Code
- Debugger configuration in `launch.json`
- Breakpoints in editor
- Hover for type information

```json
{
  "name": "Next.js App",
  "type": "node",
  "request": "launch",
  "runtimeExecutable": "npm",
  "runtimeArgs": ["run", "dev"],
  "console": "integratedTerminal"
}
```

## Common Issues

### Issue: Type errors in components
**Solution**: Ensure props interface is properly typed and exported

### Issue: Store state not updating
**Solution**: Check that action is called correctly and component subscribes with hook

### Issue: API calls failing
**Solution**: Check environment variables, error handling, and network tab

### Issue: Components not re-rendering
**Solution**: Verify proper dependency arrays and state updates

## Resources

- [Next.js Best Practices](https://nextjs.org/docs/app/building-your-application/optimizing)
- [React Hooks Documentation](https://react.dev/reference/react)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Testing Library Best Practices](https://testing-library.com/docs/)

## Getting Help

1. Check documentation in `/docs`
2. Look at examples in `/examples`
3. Search existing GitHub issues
4. Ask in discussions
5. Contact maintainers
