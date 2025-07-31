import { render, screen } from '@testing-library/react';
import CustomersSay from '../CustomersSay';

describe('CustomersSay Component', () => {
  test('renders the testimonials heading', () => {
    render(<CustomersSay />);
    expect(screen.getByRole('heading', { name: /what our customers say/i })).toBeInTheDocument();
  });

  test('renders customer testimonials', () => {
    render(<CustomersSay />);
    expect(screen.getByText('Maria Rodriguez')).toBeInTheDocument();
    expect(screen.getByText('John Thompson')).toBeInTheDocument();
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument();
    expect(screen.getByText('Michael Johnson')).toBeInTheDocument();
  });

  test('displays customer reviews', () => {
    render(<CustomersSay />);
    expect(screen.getByText(/The food was absolutely amazing/)).toBeInTheDocument();
    expect(screen.getByText(/Best Mediterranean restaurant in Chicago/)).toBeInTheDocument();
  });

  test('shows customer locations', () => {
    render(<CustomersSay />);
    expect(screen.getAllByText('Chicago, IL').length).toBeGreaterThan(0);
    expect(screen.getByText('Evanston, IL')).toBeInTheDocument();
    expect(screen.getByText('Oak Park, IL')).toBeInTheDocument();
  });

  test('has proper accessibility structure', () => {
    render(<CustomersSay />);
    expect(screen.getByRole('region')).toBeInTheDocument();
    expect(screen.getAllByRole('article')).toHaveLength(4);
  });
});
