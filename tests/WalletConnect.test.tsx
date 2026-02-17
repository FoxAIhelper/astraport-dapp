import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import WalletConnect from '@/components/wallet/WalletConnect';

describe('WalletConnect Component', () => {
  it('renders connect button when not connected', () => {
    render(<WalletConnect />);
    const button = screen.getByRole('button', { name: /connect wallet/i });
    expect(button).toBeInTheDocument();
  });
});
