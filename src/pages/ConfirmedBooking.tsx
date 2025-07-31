import React from 'react';
import { Link } from 'react-router';
import { CheckCircle, Home } from 'lucide-react';

const ConfirmedBooking: React.FC = () => {
  return (
    <section className="bg-light min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow">
              <div className="card-body text-center p-5">
                <div className="mb-4">
                  <CheckCircle size={80} className="text-success mb-3" aria-hidden="true" />
                </div>

                <h1 className="h2 text-success mb-4">Booking Confirmed!</h1>

                <p className="lead mb-4">
                  Thank you for choosing Little Lemon! Your table reservation has been successfully confirmed.
                </p>

                <p className="text-muted mb-4">
                  You will receive a confirmation email shortly with all the details of your reservation.
                </p>

                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                  <Link to="/" className="btn btn-primary btn-lg" aria-label="Return to home page">
                    <Home size={20} className="me-2" aria-hidden="true" />
                    Back to Home
                  </Link>

                  <Link to="/booking" className="btn btn-outline-primary btn-lg" aria-label="Make another reservation">
                    Make Another Reservation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfirmedBooking;
