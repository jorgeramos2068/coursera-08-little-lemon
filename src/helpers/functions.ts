import React from 'react';
import { UpdateTimesAction } from '../interfaces/booking';
import { fetchAPI } from './booking';

// Booking functions
export const initializeTimes = (): string[] => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state: string[], action: UpdateTimesAction): string[] => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      const selectedDate = new Date(action.payload);
      return fetchAPI(selectedDate);
    default:
      return state;
  }
};

// Image error handling functions
export const createImageErrorHandler = <T extends Record<string, boolean>>(
  setImageErrors: React.Dispatch<React.SetStateAction<T>>
) => {
  return (imageKey: keyof T) => {
    setImageErrors(prev => ({ ...prev, [imageKey]: true }));
  };
};

export const createNumberImageErrorHandler = (
  setImageErrors: React.Dispatch<React.SetStateAction<{ [key: number]: boolean }>>
) => {
  return (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };
};
