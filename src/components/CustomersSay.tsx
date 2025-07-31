import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../helpers/data';
import { createNumberImageErrorHandler } from '../helpers/functions';

const CustomersSay: React.FC = () => {
  const [imageErrors, setImageErrors] = React.useState<{ [key: number]: boolean }>({});

  const handleImageError = createNumberImageErrorHandler(setImageErrors);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        fill={index < rating ? '#FFD700' : 'none'}
        stroke={index < rating ? '#FFD700' : '#ddd'}
      />
    ));
  };

  return (
    <section className="bg-light py-5" aria-labelledby="testimonials-heading">
      <div className="container">
        <h2 id="testimonials-heading" className="h1 text-center mb-5">
          What Our Customers Say
        </h2>

        <div className="row">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="col-lg-6 mb-4">
              <article className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <Quote size={24} className="text-warning me-2" />
                    <div className="d-flex">{renderStars(testimonial.rating)}</div>
                  </div>

                  <blockquote className="mb-4">
                    <p className="fst-italic text-muted mb-0">"{testimonial.review}"</p>
                  </blockquote>

                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      {!imageErrors[testimonial.id] ? (
                        <img
                          src={testimonial.image}
                          alt={`${testimonial.name} profile`}
                          className="rounded-circle"
                          width="50"
                          height="50"
                          style={{ objectFit: 'cover' }}
                          onError={() => handleImageError(testimonial.id)}
                        />
                      ) : (
                        <div
                          className="placeholder bg-secondary rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                          style={{ width: '50px', height: '50px', minWidth: '50px' }}
                        >
                          {testimonial.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="h6 mb-0 fw-bold">{testimonial.name}</h3>
                      <small className="text-muted">{testimonial.location}</small>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomersSay;
