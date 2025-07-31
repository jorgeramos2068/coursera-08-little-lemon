import { screen } from '@testing-library/react';
import CallToAction from '../CallToAction';
import { renderWithRouter } from '../../tests';

describe('CallToAction Component', () => {
  test('renders the main heading', () => {
    renderWithRouter(<CallToAction />);

    const heading = screen.getByRole('heading', { name: /welcome to little lemon/i });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
  });

  test('renders the Lucide icon logo with proper accessibility', () => {
    renderWithRouter(<CallToAction />);

    const logo = screen.getByLabelText(/little lemon restaurant logo/i);
    expect(logo).toBeInTheDocument();
    expect(logo.tagName).toBe('svg');
  });

  test('renders the booking page link', () => {
    renderWithRouter(<CallToAction />);

    const bookingLink = screen.getByRole('button', { name: /book a table at little lemon restaurant/i });
    expect(bookingLink).toBeInTheDocument();
    expect(bookingLink).toHaveAttribute('href', '/booking');
  });

  test('has proper semantic structure', () => {
    renderWithRouter(<CallToAction />);

    const section = screen.getByRole('region');
    expect(section).toBeInTheDocument();
    expect(section.tagName).toBe('SECTION');

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  test('renders descriptive text content', () => {
    renderWithRouter(<CallToAction />);

    expect(screen.getByText(/experience authentic mediterranean cuisine/i)).toBeInTheDocument();
    expect(screen.getByText(/fresh, locally-sourced ingredients/i)).toBeInTheDocument();
  });

  test('has accessible button label', () => {
    renderWithRouter(<CallToAction />);

    const bookingButton = screen.getByRole('button', { name: /book a table at little lemon restaurant/i });
    expect(bookingButton).toHaveAttribute('aria-label', 'Book a table at Little Lemon restaurant');
  });
});
