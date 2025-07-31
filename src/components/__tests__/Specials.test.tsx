import { render, screen } from '@testing-library/react';
import Specials from '../Specials';

describe('Specials Component', () => {
  test('renders the specials heading', () => {
    render(<Specials />);
    expect(screen.getByRole('heading', { name: /specials/i })).toBeInTheDocument();
  });

  test('renders all three specials', () => {
    render(<Specials />);
    expect(screen.getByText('Greek Salad')).toBeInTheDocument();
    expect(screen.getByText('Bruchetta')).toBeInTheDocument();
    expect(screen.getByText('Lemon Dessert')).toBeInTheDocument();
  });

  test('displays prices correctly', () => {
    render(<Specials />);
    expect(screen.getByText('12.99')).toBeInTheDocument();
    expect(screen.getByText('5.99')).toBeInTheDocument();
    expect(screen.getByText('5.00')).toBeInTheDocument();
  });

  test('renders order buttons for each special', () => {
    render(<Specials />);
    const orderButtons = screen.getAllByText('Order Now');
    expect(orderButtons).toHaveLength(3);
  });

  test('has proper accessibility structure', () => {
    render(<Specials />);
    expect(screen.getByRole('region')).toBeInTheDocument();
    expect(screen.getAllByRole('article')).toHaveLength(3);
  });
});
