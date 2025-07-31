import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders little lemon navigation', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const brandElement = screen.getByText(/little lemon/i);
  expect(brandElement).toBeInTheDocument();
});

test('renders welcome message on home page', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const welcomeElement = screen.getByText(/welcome to little lemon/i);
  expect(welcomeElement).toBeInTheDocument();
});
