import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <div className="jumbotron bg-primary text-white p-5 rounded">
            <h1 className="display-4">Welcome to Little Lemon</h1>
            <p className="lead">
              A Mediterranean restaurant focused on traditional recipes served with a modern twist.
            </p>
            <hr className="my-4" />
            <p>
              Experience the finest Mediterranean cuisine in a welcoming atmosphere.
            </p>
            <button className="btn btn-light btn-lg" >
              View Menu
            </button>
          </div>
        </div>
      </div>
      
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Fresh Ingredients</h5>
              <p className="card-text">
                We source the finest ingredients from local Mediterranean suppliers.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Traditional Recipes</h5>
              <p className="card-text">
                Our recipes have been passed down through generations of Mediterranean families.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Modern Presentation</h5>
              <p className="card-text">
                Classic flavors presented with contemporary culinary techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
