import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CallToAction from '../CallToAction';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('CallToAction Component', () => {
  test('renders the main heading', () => {
    renderWithRouter(<CallToAction />);

    const heading = screen.getByRole('heading', { name: /welcome to little lemon/i });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
  });

  test('renders the SVG logo with proper accessibility', () => {
    renderWithRouter(<CallToAction />);

    const logo = screen.getByRole('img', { name: /little lemon restaurant logo/i });
    expect(logo).toBeInTheDocument();
    expect(logo.tagName).toBe('svg');
  });

  test('renders the home page link', () => {
    renderWithRouter(<CallToAction />);

    const homeLink = screen.getByRole('link', { name: /go to little lemon home page/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });

  test('renders the menu link', () => {
    renderWithRouter(<CallToAction />);

    const menuLink = screen.getByRole('link', { name: /view our menu/i });
    expect(menuLink).toBeInTheDocument();
    expect(menuLink).toHaveAttribute('href', '/menu');
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

  test('has accessible button labels', () => {
    renderWithRouter(<CallToAction />);

    const homeButton = screen.getByRole('link', { name: /go to little lemon home page/i });
    const menuButton = screen.getByRole('link', { name: /view our menu/i });

    expect(homeButton).toHaveAttribute('aria-label', 'Go to Little Lemon home page');
    expect(menuButton).toHaveAttribute('aria-label', 'View our menu');
  });
});
