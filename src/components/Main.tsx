import React from 'react';
import BookingForm from './BookingForm';
import { BookingFormData, UpdateTimesAction } from '../interfaces/booking';

const initializeTimes = (): string[] => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

const updateTimes = (state: string[], action: UpdateTimesAction): string[] => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return initializeTimes();
    default:
      return state;
  }
};

const Main: React.FC = () => {
  const [availableTimes, dispatch] = React.useReducer(updateTimes, [], initializeTimes);

  const [formData, setFormData] = React.useState<BookingFormData>({
    date: '',
    time: availableTimes[0] || '17:00',
    guests: 1,
    occasion: 'Birthday',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'date') {
      dispatch({ type: 'UPDATE_TIMES', payload: value });
    }

    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) || 1 : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    alert(
      `Reservation submitted for ${formData.guests} guest(s) on ${formData.date} at ${formData.time} for ${formData.occasion}`
    );
  };

  return (
    <BookingForm
      availableTimes={availableTimes}
      formData={formData}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default Main;
