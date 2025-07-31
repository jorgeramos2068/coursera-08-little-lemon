import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-primary text-white py-5" aria-labelledby="cta-heading">
      <div className="container-fluid px-0">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="jumbotron bg-primary text-center py-5 mb-0">
              <div className="mb-4">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Little Lemon restaurant logo"
                  role="img"
                >
                  <ellipse cx="100" cy="100" rx="60" ry="80" fill="#FFD700" stroke="#FFA500" strokeWidth="3" />
                  <path d="M70 60 Q100 70 130 60" stroke="#FFA500" strokeWidth="2" fill="none" />
                  <path d="M65 90 Q100 100 135 90" stroke="#FFA500" strokeWidth="2" fill="none" />
                  <path d="M70 120 Q100 130 130 120" stroke="#FFA500" strokeWidth="2" fill="none" />
                  <path d="M75 150 Q100 160 125 150" stroke="#FFA500" strokeWidth="2" fill="none" />
                  <ellipse cx="100" cy="40" rx="8" ry="20" fill="#228B22" transform="rotate(-10 100 40)" />
                  <path d="M100 30 Q105 35 100 40 Q95 35 100 30" fill="#32CD32" />
                </svg>
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
                    to="/"
                    className="btn btn-warning btn-lg px-4 me-md-2"
                    role="button"
                    aria-label="Go to Little Lemon home page"
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-house-door me-2"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                    </svg>
                    Visit Our Home
                  </Link>
                  <Link
                    to="/menu"
                    className="btn btn-outline-light btn-lg px-4"
                    role="button"
                    aria-label="View our menu"
                  >
                    View Menu
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
