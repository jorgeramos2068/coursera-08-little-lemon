import { screen } from '@testing-library/react';
import HomePage from '../HomePage';
import { renderWithRouter } from '../../tests';

describe('HomePage Component', () => {
  test('renders welcome message from CallToAction', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByText('Welcome to Little Lemon')).toBeInTheDocument();
  });

  test('renders CallToAction component content', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByText(/Experience authentic Mediterranean cuisine/)).toBeInTheDocument();
  });

  test('renders booking button from CallToAction', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByRole('button', { name: /book a table at little lemon restaurant/i })).toBeInTheDocument();
  });

  test('renders Specials section', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByText('Specials')).toBeInTheDocument();
    expect(screen.getByText('Greek Salad')).toBeInTheDocument();
    expect(screen.getByText('Bruchetta')).toBeInTheDocument();
    expect(screen.getByText('Lemon Dessert')).toBeInTheDocument();
  });

  test('renders CustomersSay section', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByText('What Our Customers Say')).toBeInTheDocument();
    expect(screen.getByText('Maria Rodriguez')).toBeInTheDocument();
  });

  test('renders Chicago section', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByText('Little Lemon Chicago')).toBeInTheDocument();
    expect(screen.getByText(/Little Lemon opened in 1995/)).toBeInTheDocument();
  });

  test('has proper semantic HTML structure', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getAllByRole('region').length).toBeGreaterThan(0);
  });
});
