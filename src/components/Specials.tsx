import React, { useState } from 'react';
import { Star, Clock, DollarSign } from 'lucide-react';

interface Special {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  prepTime: string;
  rating: number;
}

const specials: Special[] = [
  {
    id: 1,
    name: 'Greek Salad',
    price: 12.99,
    description:
      'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: '/images/greek-salad.jpg',
    prepTime: '10 min',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Bruchetta',
    price: 5.99,
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image: '/images/bruchetta.jpg',
    prepTime: '5 min',
    rating: 4.6,
  },
  {
    id: 3,
    name: 'Lemon Dessert',
    price: 5.0,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: '/images/lemon-dessert.jpg',
    prepTime: '15 min',
    rating: 4.9,
  },
];

const Specials: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-5" aria-labelledby="specials-heading">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 id="specials-heading" className="h1 mb-0">
            Specials
          </h2>
          <button className="btn btn-warning btn-lg">Online Menu</button>
        </div>

        <div className="row">
          {specials.map(special => (
            <div key={special.id} className="col-md-4 mb-4">
              <article className="card h-100 shadow-sm">
                <div className="position-relative">
                  {!imageErrors[special.id] ? (
                    <img
                      src={special.image}
                      alt={special.name}
                      className="card-img-top"
                      style={{ height: '200px', objectFit: 'cover' }}
                      onError={() => handleImageError(special.id)}
                    />
                  ) : (
                    <div
                      className="placeholder bg-secondary d-flex align-items-center justify-content-center text-white"
                      style={{ height: '200px', width: '100%' }}
                    >
                      <span className="fw-bold">{special.name}</span>
                    </div>
                  )}
                  <div className="position-absolute top-0 end-0 m-2">
                    <span className="badge bg-warning text-dark">
                      <Star size={16} fill="currentColor" className="me-1" />
                      {special.rating}
                    </span>
                  </div>
                </div>

                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h3 className="card-title h5 mb-0">{special.name}</h3>
                    <span className="text-warning fw-bold fs-5">
                      <DollarSign size={18} className="d-inline" />
                      {special.price.toFixed(2)}
                    </span>
                  </div>

                  <p className="card-text flex-grow-1 text-muted">{special.description}</p>

                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div className="d-flex align-items-center text-muted">
                      <Clock size={16} className="me-1" />
                      <small>{special.prepTime}</small>
                    </div>
                    <button className="btn btn-primary">Order Now</button>
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

export default Specials;
