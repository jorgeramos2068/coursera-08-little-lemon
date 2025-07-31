import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <section className="row">
        <header className="col-12">
          <div className="jumbotron bg-primary text-white p-5 rounded">
            <h1 className="display-4">Welcome to Little Lemon</h1>
            <p className="lead">
              A Mediterranean restaurant focused on traditional recipes served with a modern twist.
            </p>
            <hr className="my-4" />
            <p>Experience the finest Mediterranean cuisine in a welcoming atmosphere.</p>
            <button className="btn btn-light btn-lg">View Menu</button>
          </div>
        </header>
      </section>

      <section className="row mt-5" aria-label="Restaurant Features">
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
    </>
  );
};

export default Home;
