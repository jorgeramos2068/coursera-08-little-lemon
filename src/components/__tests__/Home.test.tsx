import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../Home';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<MemoryRouter>{component}</MemoryRouter>);
};

describe('Home Component', () => {
  test('renders welcome message', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText('Welcome to Little Lemon')).toBeInTheDocument();
  });

  test('renders restaurant description', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText(/Mediterranean restaurant focused on traditional recipes/)).toBeInTheDocument();
  });

  test('renders view menu button', () => {
    renderWithRouter(<Home />);
    expect(screen.getByRole('button', { name: /view menu/i })).toBeInTheDocument();
  });

  test('renders feature cards', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText('Fresh Ingredients')).toBeInTheDocument();
    expect(screen.getByText('Traditional Recipes')).toBeInTheDocument();
    expect(screen.getByText('Modern Presentation')).toBeInTheDocument();
  });

  test('has proper semantic HTML structure', () => {
    renderWithRouter(<Home />);
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getAllByRole('article')).toHaveLength(3);
  });

  test('has accessible section labels', () => {
    renderWithRouter(<Home />);
    expect(screen.getByLabelText('Restaurant Features')).toBeInTheDocument();
  });
});
