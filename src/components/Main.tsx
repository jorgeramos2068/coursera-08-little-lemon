import React from 'react';
import { useNavigate } from 'react-router';
import BookingForm from './BookingForm';
import { BookingFormData } from '../interfaces/booking';
import { submitAPI } from '../helpers/booking';
import { initializeTimes, updateTimes } from '../helpers/functions';

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
