import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../HomePage';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<MemoryRouter>{component}</MemoryRouter>);
};

describe('HomePage Component', () => {
  test('renders welcome message from CallToAction', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByText('Welcome to Little Lemon')).toBeInTheDocument();
  });

  test('renders CallToAction component content', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByText(/Experience authentic Mediterranean cuisine/)).toBeInTheDocument();
  });

  test('renders view menu link from CallToAction', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByRole('link', { name: /view our menu/i })).toBeInTheDocument();
  });

  test('renders feature cards', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByText('Fresh Ingredients')).toBeInTheDocument();
    expect(screen.getByText('Traditional Recipes')).toBeInTheDocument();
    expect(screen.getByText('Modern Presentation')).toBeInTheDocument();
  });

  test('has proper semantic HTML structure', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getAllByRole('article')).toHaveLength(3);
    expect(screen.getByRole('region')).toBeInTheDocument();
  });

  test('has accessible section labels', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByLabelText('Restaurant Features')).toBeInTheDocument();
  });
});
