import React from 'react';
import Main from '../components/Main';

const BookingPage: React.FC = () => {
  return (
    <>
      <section className="bg-light min-vh-100">
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <div className="text-center mb-5">
                <h1 className="display-4 fw-bold text-secondary mb-3">Reserve Your Table</h1>
                <p className="lead text-muted">
                  Book your dining experience at Little Lemon and enjoy authentic Mediterranean cuisine in our welcoming
                  atmosphere.
                </p>
              </div>
            </div>
          </div>

          <Main />

          <div className="row mt-5">
            <div className="col-12">
              <div className="text-center">
                <h3 className="h4 mb-3">Need Help?</h3>
                <p className="text-muted mb-3">For special requests or large parties, please call us directly.</p>
                <div className="d-flex justify-content-center gap-3">
                  <a href="tel:+1234567890" className="btn btn-outline-primary">
                    📞 Call Us
                  </a>
                  <a href="mailto:info@littlelemon.com" className="btn btn-outline-primary">
                    ✉️ Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingPage;
