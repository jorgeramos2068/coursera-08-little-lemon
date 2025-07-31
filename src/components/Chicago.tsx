import React from 'react';
import { MapPin, Users, Award } from 'lucide-react';
import { createImageErrorHandler } from '../helpers/functions';

const Chicago: React.FC = () => {
  const [imageErrors, setImageErrors] = React.useState({
    interior: false,
    chef: false,
    brothers: false,
  });

  const handleImageError = createImageErrorHandler(setImageErrors);

  return (
    <section className="py-5" aria-labelledby="chicago-heading">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 id="chicago-heading" className="h1 mb-4">
              Little Lemon Chicago
            </h2>

            <p className="lead mb-4">
              Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario Rossi, who moved to the United
              States to pursue their shared dream of owning a restaurant.
            </p>

            <p className="mb-4">
              They brought with them family recipes that had been passed down through generations, along with a passion
              for fresh, high-quality ingredients and the warm hospitality of the Mediterranean.
            </p>

            <div className="row mb-4">
              <div className="col-md-4 mb-3">
                <div className="d-flex align-items-center">
                  <div className="bg-warning text-dark rounded-circle p-2 me-3">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="h6 mb-0 fw-bold">Location</h3>
                    <small className="text-muted">Chicago, IL</small>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <div className="d-flex align-items-center">
                  <div className="bg-warning text-dark rounded-circle p-2 me-3">
                    <Users size={20} />
                  </div>
                  <div>
                    <h3 className="h6 mb-0 fw-bold">Family Owned</h3>
                    <small className="text-muted">Since 1995</small>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <div className="d-flex align-items-center">
                  <div className="bg-warning text-dark rounded-circle p-2 me-3">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="h6 mb-0 fw-bold">Award Winner</h3>
                    <small className="text-muted">Best Mediterranean</small>
                  </div>
                </div>
              </div>
            </div>

            <p className="mb-4">
              What started as a small neighborhood restaurant has grown into a beloved Chicago institution, known for
              our authentic Mediterranean cuisine, warm atmosphere, and commitment to using only the freshest
              ingredients sourced locally whenever possible.
            </p>

            <div className="d-flex gap-3">
              <button className="btn btn-primary btn-lg">Learn More</button>
              <button className="btn btn-outline-primary btn-lg">Visit Us</button>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row">
              <div className="col-6 mb-3">
                {!imageErrors.interior ? (
                  <img
                    src="/images/restaurant-interior.jpg"
                    alt="Little Lemon restaurant interior"
                    className="img-fluid rounded shadow-sm"
                    style={{ height: '200px', width: '100%', objectFit: 'cover' }}
                    onError={() => handleImageError('interior')}
                  />
                ) : (
                  <div
                    className="placeholder bg-secondary rounded shadow-sm d-flex align-items-center justify-content-center text-white"
                    style={{ height: '200px', width: '100%' }}
                  >
                    <span className="fw-bold">Interior</span>
                  </div>
                )}
              </div>
              <div className="col-6 mb-3">
                {!imageErrors.chef ? (
                  <img
                    src="/images/chef-cooking.jpg"
                    alt="Chef preparing Mediterranean dishes"
                    className="img-fluid rounded shadow-sm"
                    style={{ height: '200px', width: '100%', objectFit: 'cover' }}
                    onError={() => handleImageError('chef')}
                  />
                ) : (
                  <div
                    className="placeholder bg-secondary rounded shadow-sm d-flex align-items-center justify-content-center text-white"
                    style={{ height: '200px', width: '100%' }}
                  >
                    <span className="fw-bold">Chef</span>
                  </div>
                )}
              </div>
              <div className="col-12">
                {!imageErrors.brothers ? (
                  <img
                    src="/images/brothers-mario-adrian.jpg"
                    alt="Mario and Adrian Rossi, founders of Little Lemon"
                    className="img-fluid rounded shadow-sm"
                    style={{ height: '250px', width: '100%', objectFit: 'cover' }}
                    onError={() => handleImageError('brothers')}
                  />
                ) : (
                  <div
                    className="placeholder bg-secondary rounded shadow-sm d-flex align-items-center justify-content-center text-white"
                    style={{ height: '250px', width: '100%' }}
                  >
                    <span className="fw-bold">Mario & Adrian Rossi</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chicago;
