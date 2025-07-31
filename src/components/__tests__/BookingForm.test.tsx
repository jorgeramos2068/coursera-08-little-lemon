import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../BookingForm';

const mockProps = {
  availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
  formData: {
    date: '',
    time: '17:00',
    guests: 1,
    occasion: 'Birthday',
  },
  handleInputChange: jest.fn(),
  submitForm: jest.fn(),
};

describe('BookingForm Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the booking form heading', () => {
    render(<BookingForm {...mockProps} />);
    expect(screen.getByRole('heading', { name: /make a reservation/i })).toBeInTheDocument();
  });

  test('renders all form fields', () => {
    render(<BookingForm {...mockProps} />);

    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  });

  test('renders submit button', () => {
    render(<BookingForm {...mockProps} />);
    expect(screen.getByRole('button', { name: 'Submit your restaurant reservation' })).toBeInTheDocument();
  });

  test('displays all available time options', () => {
    render(<BookingForm {...mockProps} />);

    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toBeInTheDocument();

    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    expectedTimes.forEach(time => {
      expect(screen.getByRole('option', { name: time })).toBeInTheDocument();
    });
  });

  test('displays occasion options', () => {
    render(<BookingForm {...mockProps} />);

    expect(screen.getByRole('option', { name: 'Birthday' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Anniversary' })).toBeInTheDocument();
  });

  test('updates form fields when user inputs data', () => {
    render(<BookingForm {...mockProps} />);

    const dateInput = screen.getByLabelText(/choose date/i) as HTMLInputElement;
    const guestsInput = screen.getByLabelText(/number of guests/i) as HTMLInputElement;

    fireEvent.change(dateInput, { target: { value: '2024-12-25' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });

    expect(mockProps.handleInputChange).toHaveBeenCalledTimes(2);
  });

  test('has proper form validation attributes', () => {
    render(<BookingForm {...mockProps} />);

    const dateInput = screen.getByLabelText(/choose date/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);

    expect(dateInput).toHaveAttribute('required');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
  });

  test('has proper accessibility attributes', () => {
    render(<BookingForm {...mockProps} />);

    expect(screen.getByRole('form', { name: /restaurant reservation form/i })).toBeInTheDocument();

    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute('aria-describedby', 'date-help');
  });

  test('calls submitForm when form is submitted', () => {
    render(<BookingForm {...mockProps} />);

    const submitButton = screen.getByRole('button', { name: 'Submit your restaurant reservation' });
    fireEvent.click(submitButton);

    expect(mockProps.submitForm).toHaveBeenCalledWith(mockProps.formData);
  });
});
