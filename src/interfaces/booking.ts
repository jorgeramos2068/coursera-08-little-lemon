export interface BookingFormData {
  date: string;
  time: string;
  guests: number;
  occasion: string;
}

export interface UpdateTimesAction {
  type: 'UPDATE_TIMES';
  payload: string;
}
