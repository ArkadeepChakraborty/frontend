import React from "react";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section text-center text-white d-flex align-items-center justify-content-center" style={{ height: "60vh", background: "url('./images/hero.jpg') center/cover no-repeat" }}>
        <div>
          <h1>Welcome to EduStream</h1>
          <p>Your journey to knowledge starts here!</p>
          <a href="/register" className="btn btn-primary btn-lg">Get Started</a>
        </div>
      </div>

      {/* Features Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Why Choose EduStream?</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card border-0 shadow">
              <img src="./images/mentorship.jpg" className="card-img-top" alt="Mentorship" />
              <div className="card-body text-center">
                <h5 className="card-title">Expert Mentors</h5>
                <p className="card-text">Learn from the best with personalized mentorship.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow">
              <img src="./images/certification.jpg" className="card-img-top" alt="Certification" />
              <div className="card-body text-center">
                <h5 className="card-title">Certification Programs</h5>
                <p className="card-text">Get industry-recognized certifications to boost your career.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow">
              <img src="./images/streams.jpg" className="card-img-top" alt="Streams" />
              <div className="card-body text-center">
                <h5 className="card-title">Diverse Streams</h5>
                <p className="card-text">Choose from a wide range of streams and specializations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stream Gallery */}
      <div className="stream-gallery bg-light py-5">
        <div className="container text-center">
          <h2>Explore Our Streams</h2>
          <div className="row mt-4">
            <div className="col-md-2">
              <img src="./images/it.jpg" alt="IT" className="img-fluid rounded" />
              <p>IT</p>
            </div>
            <div className="col-md-2">
              <img src="./images/cse.jpg" alt="CSE" className="img-fluid rounded" />
              <p>CSE</p>
            </div>
            <div className="col-md-2">
              <img src="./images/ece.jpg" alt="ECE" className="img-fluid rounded" />
              <p>ECE</p>
            </div>
            <div className="col-md-2">
              <img src="./images/me.jpg" alt="ME" className="img-fluid rounded" />
              <p>Mechanical</p>
            </div>
            <div className="col-md-2">
              <img src="./images/civil.jpg" alt="Civil" className="img-fluid rounded" />
              <p>Civil</p>
            </div>
            <div className="col-md-2">
              <img src="./images/EE.jpg" alt="EE" className="img-fluid rounded" />
              <p>EE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
