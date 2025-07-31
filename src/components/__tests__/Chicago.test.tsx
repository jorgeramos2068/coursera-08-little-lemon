import { render, screen } from '@testing-library/react';
import Chicago from '../Chicago';

describe('Chicago Component', () => {
  test('renders the Chicago heading', () => {
    render(<Chicago />);
    expect(screen.getByRole('heading', { name: /little lemon chicago/i })).toBeInTheDocument();
  });

  test('displays the restaurant backstory', () => {
    render(<Chicago />);
    expect(screen.getByText(/Little Lemon opened in 1995/)).toBeInTheDocument();
    expect(screen.getByText(/Adrian and Mario Rossi/)).toBeInTheDocument();
  });

  test('shows restaurant features', () => {
    render(<Chicago />);
    expect(screen.getByText('Location')).toBeInTheDocument();
    expect(screen.getByText('Family Owned')).toBeInTheDocument();
    expect(screen.getByText('Award Winner')).toBeInTheDocument();
  });

  test('renders action buttons', () => {
    render(<Chicago />);
    expect(screen.getByRole('button', { name: /learn more/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /visit us/i })).toBeInTheDocument();
  });

  test('has proper accessibility structure', () => {
    render(<Chicago />);
    expect(screen.getByRole('region')).toBeInTheDocument();
  });

  test('displays founding year', () => {
    render(<Chicago />);
    expect(screen.getByText('Since 1995')).toBeInTheDocument();
  });
});
