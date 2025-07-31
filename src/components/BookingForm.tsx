import React from 'react';
import { BookingFormData } from '../interfaces/booking';

interface Props {
  availableTimes: string[];
  formData: BookingFormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  submitForm: (formData: BookingFormData) => void;
}

const BookingForm: React.FC<Props> = ({ availableTimes, formData, handleInputChange, submitForm }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitForm(formData);
  };
  return (
    <section className="py-5" aria-labelledby="booking-heading">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body p-4">
                <h2 id="booking-heading" className="card-title h3 mb-4 text-center">
                  Make a Reservation
                </h2>

                <form
                  onSubmit={handleSubmit}
                  style={{ display: 'grid', gap: '20px' }}
                  aria-label="Restaurant reservation form"
                >
                  <div className="mb-3">
                    <label htmlFor="res-date" className="form-label fw-semibold">
                      Choose date
                    </label>
                    <input
                      type="date"
                      id="res-date"
                      name="date"
                      className="form-control"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      aria-describedby="date-help"
                    />
                    <div id="date-help" className="form-text">
                      Please select a date for your reservation.
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="res-time" className="form-label fw-semibold">
                      Choose time
                    </label>
                    <select
                      id="res-time"
                      name="time"
                      className="form-select"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      aria-describedby="time-help"
                    >
                      {availableTimes.map(time => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                    <div id="time-help" className="form-text">
                      Select your preferred dining time.
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="guests" className="form-label fw-semibold">
                      Number of guests
                    </label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      className="form-control"
                      placeholder="1"
                      min="1"
                      max="10"
                      value={formData.guests}
                      onChange={handleInputChange}
                      required
                      aria-describedby="guests-help"
                    />
                    <div id="guests-help" className="form-text">
                      Enter the number of guests (1-10).
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="occasion" className="form-label fw-semibold">
                      Occasion
                    </label>
                    <select
                      id="occasion"
                      name="occasion"
                      className="form-select"
                      value={formData.occasion}
                      onChange={handleInputChange}
                      required
                      aria-describedby="occasion-help"
                    >
                      <option value="Birthday">Birthday</option>
                      <option value="Anniversary">Anniversary</option>
                    </select>
                    <div id="occasion-help" className="form-text">
                      Let us know what you're celebrating!
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-warning btn-lg w-100 mt-3"
                    aria-label="Submit your restaurant reservation"
                  >
                    Make Your Reservation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
