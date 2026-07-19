import hero from "../assets/hero.png";

function Hero() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        <div className="col-md-6">
          <h1 className="display-4 fw-bold">
            Customer Registry
          </h1>

          <p className="lead">
            Welcome to the Customer Registry and Complaint Management System.
          </p>

          <button className="btn btn-primary btn-lg">
            Raise Complaint
          </button>
        </div>

        <div className="col-md-6 text-center">
          <img
            src={hero}
            alt="Hero"
            className="img-fluid"
          />
        </div>

      </div>
    </div>
  );
}

export default Hero;