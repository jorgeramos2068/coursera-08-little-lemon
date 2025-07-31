import React from 'react';
import CallToAction from '../components/CallToAction';

const HomePage: React.FC = () => {
  return (
    <>
      <CallToAction />

      <main className="container my-5">
        <section className="row" aria-label="Restaurant Features">
          <article className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h2 className="card-title h5">Fresh Ingredients</h2>
                <p className="card-text">We source the finest ingredients from local Mediterranean suppliers.</p>
              </div>
            </div>
          </article>
          <article className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h2 className="card-title h5">Traditional Recipes</h2>
                <p className="card-text">
                  Our recipes have been passed down through generations of Mediterranean families.
                </p>
              </div>
            </div>
          </article>
          <article className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h2 className="card-title h5">Modern Presentation</h2>
                <p className="card-text">Classic flavors presented with contemporary culinary techniques.</p>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default HomePage;
