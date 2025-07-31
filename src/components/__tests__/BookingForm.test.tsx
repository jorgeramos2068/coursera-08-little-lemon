import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../BookingForm';

describe('BookingForm Component', () => {
  test('renders the booking form heading', () => {
    render(<BookingForm />);
    expect(screen.getByRole('heading', { name: /make a reservation/i })).toBeInTheDocument();
  });

  test('renders all form fields', () => {
    render(<BookingForm />);

    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  });

  test('renders submit button', () => {
    render(<BookingForm />);
    expect(screen.getByRole('button', { name: /make your reservation/i })).toBeInTheDocument();
  });

  test('displays all available time options', () => {
    render(<BookingForm />);

    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toBeInTheDocument();

    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    expectedTimes.forEach(time => {
      expect(screen.getByRole('option', { name: time })).toBeInTheDocument();
    });
  });

  test('displays occasion options', () => {
    render(<BookingForm />);

    expect(screen.getByRole('option', { name: 'Birthday' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Anniversary' })).toBeInTheDocument();
  });

  test('updates form fields when user inputs data', () => {
    render(<BookingForm />);

    const dateInput = screen.getByLabelText(/choose date/i) as HTMLInputElement;
    const guestsInput = screen.getByLabelText(/number of guests/i) as HTMLInputElement;

    fireEvent.change(dateInput, { target: { value: '2024-12-25' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });

    expect(dateInput.value).toBe('2024-12-25');
    expect(guestsInput.value).toBe('4');
  });

  test('has proper form validation attributes', () => {
    render(<BookingForm />);

    const dateInput = screen.getByLabelText(/choose date/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);

    expect(dateInput).toHaveAttribute('required');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
  });

  test('has proper accessibility attributes', () => {
    render(<BookingForm />);

    expect(screen.getByRole('form', { name: /restaurant reservation form/i })).toBeInTheDocument();

    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute('aria-describedby', 'date-help');
  });
});
