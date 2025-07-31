import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import { BookingFormData, UpdateTimesAction } from '../interfaces/booking';
import { fetchAPI, submitAPI } from '../helpers/booking';

const initializeTimes = (): string[] => {
  const today = new Date();
  return fetchAPI(today);
};

const updateTimes = (state: string[], action: UpdateTimesAction): string[] => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      const selectedDate = new Date(action.payload);
      return fetchAPI(selectedDate);
    default:
      return state;
  }
};

const Main: React.FC = () => {
  const navigate = useNavigate();
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

  const submitForm = (formData: BookingFormData) => {
    const success = submitAPI(formData);

    if (success) {
      navigate('/confirmed-booking');
    } else {
      alert('Failed to submit reservation. Please try again.');
    }

    console.log('Reservation submitted:', formData, 'Success:', success);
  };

  return (
    <BookingForm
      availableTimes={availableTimes}
      formData={formData}
      handleInputChange={handleInputChange}
      submitForm={submitForm}
    />
  );
};

export default Main;
