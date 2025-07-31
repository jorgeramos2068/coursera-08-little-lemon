import { screen } from '@testing-library/react';
import BookingPage from '../BookingPage';
import { renderWithRouter } from '../../tests';

describe('BookingPage Component', () => {
  test('renders the page heading', () => {
    renderWithRouter(<BookingPage />);
    expect(screen.getByRole('heading', { name: /reserve your table/i })).toBeInTheDocument();
  });

  test('renders the page description', () => {
    renderWithRouter(<BookingPage />);
    expect(screen.getByText(/book your dining experience at little lemon/i)).toBeInTheDocument();
  });

  test('renders the BookingForm component', () => {
    renderWithRouter(<BookingPage />);
    expect(screen.getByRole('heading', { name: /make a reservation/i })).toBeInTheDocument();
  });

  test('renders help section', () => {
    renderWithRouter(<BookingPage />);
    expect(screen.getByRole('heading', { name: /need help/i })).toBeInTheDocument();
  });

  test('renders contact links', () => {
    renderWithRouter(<BookingPage />);
    expect(screen.getByRole('link', { name: /call us/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /email us/i })).toBeInTheDocument();
  });

  test('contact links have proper attributes', () => {
    renderWithRouter(<BookingPage />);

    const phoneLink = screen.getByRole('link', { name: /call us/i });
    const emailLink = screen.getByRole('link', { name: /email us/i });

    expect(phoneLink).toHaveAttribute('href', 'tel:+1234567890');
    expect(emailLink).toHaveAttribute('href', 'mailto:info@littlelemon.com');
  });

  test('has proper semantic structure', () => {
    renderWithRouter(<BookingPage />);
    expect(screen.getByRole('region')).toBeInTheDocument();
  });
});
