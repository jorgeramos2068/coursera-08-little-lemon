import React from 'react';
import { Link } from 'react-router';
import { Cherry, Calendar } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-primary text-white py-5" aria-labelledby="cta-heading">
      <div className="container-fluid px-0">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="jumbotron bg-primary text-center py-5 mb-0">
              <div className="mb-4">
                <Cherry size={120} color="#FFD700" strokeWidth={2} aria-label="Little Lemon restaurant logo" />
              </div>

              <div className="container">
                <h1 id="cta-heading" className="display-4 fw-bold mb-4">
                  Welcome to Little Lemon
                </h1>
                <p className="lead mb-4 fs-5">
                  Experience authentic Mediterranean cuisine with fresh, locally-sourced ingredients. Our passionate
                  chefs create memorable dishes that celebrate tradition and innovation.
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                  <Link
                    to="/booking"
                    className="btn btn-warning btn-lg px-4"
                    role="button"
                    aria-label="Book a table at Little Lemon restaurant"
                  >
                    <Calendar size={20} className="me-2" aria-hidden="true" />
                    Book a Table
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

export default CallToAction;
