import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import RiskScoreDisplay from '@/components/risk/RiskScoreDisplay';

describe('RiskScoreDisplay Component', () => {
  it('renders risk score display', () => {
    render(<RiskScoreDisplay />);
    const heading = screen.getByText(/risk assessment/i);
    expect(heading).toBeInTheDocument();
  });
});
