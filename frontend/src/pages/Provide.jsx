import React, { useState } from 'react';

const Provide = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    address: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data:', formData);
    // Add your API call here
  };

  return (
    <div className="bg-light min-vh-100">
      {/* Header/Navbar */}
      <header>
        <nav id="navbar_top">
          <div className="collapse bg-dark" id="navbarHeader">
            <div className="container">
              <div className="row">
                <div className="col-sm-8 col-md-7 py-4">
                  <h4 className="text-white">ZeroWaste</h4>
                  <p className="text-muted">
                    Add some information about the album below, the author, or any other background
                    context. Make it a few sentences long so folks can pick up some informative
                    tidbits.
                  </p>
                </div>
                <div className="col-sm-4 offset-md-1 py-4">
                  <h4 className="text-white">Contact</h4>
                  <ul className="list-unstyled">
                    <li className="my-1">
                      <img
                        className="d-bl mx-2"
                        src="/img/email-logo.png"
                        alt="Email"
                        width="30"
                        height="30"
                      />
                      <a href="#" className="text-white">
                        Email
                      </a>
                    </li>
                    <li className="my-1">
                      <img
                        className="d-bl mx-2"
                        src="/img/facebook-logo.png"
                        alt="Facebook"
                        width="30"
                        height="30"
                      />
                      <a href="#" className="text-white">
                        Facebook
                      </a>
                    </li>
                    <li className="my-1">
                      <img
                        className="d-bl mx-2"
                        src="/img/telegram-logo.png"
                        alt="Telegram"
                        width="30"
                        height="30"
                      />
                      <a href="https://t.me/FokaKommunity" className="text-white">
                        Telegram
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container">
              <a href="#" className="navbar-brand d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="me-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
                <strong>ZeroWaste</strong>
              </a>

              <ul className="navbar-nav ms-auto">
                <form className="form-inline">
                  <a href="/login" className="btn btn-info my-2 mx-2 my-sm-0 rounded-2">
                    Login
                  </a>
                  <a href="/donation" className="btn btn-primary my-2 mx-2 my-sm-0 rounded-2">
                    Donation
                  </a>
                </form>
              </ul>

              <button
                className="navbar-toggler btn btn-outline-secondary btn-square-md rounded-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarHeader"
                aria-controls="navbarHeader"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Form */}
      <div className="container my-5 col-md-10 bg-white">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="row md-3" style={{ justifyContent: 'center' }}>
            <div className="col-md-6 order-md-1 my-2">
              <h4 className="mb-5">Register to provide, and be verified.</h4>

              <div className="row">
                <div className="mb-2">
                  <label className="form-label">Organization Name</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <img
                          className="d-block mx-auto"
                          src="/img/userIcon.png"
                          alt="User"
                          width="30"
                          height="30"
                        />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control rounded-0"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Organization name"
                      required
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <label className="form-label">Phone</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <img
                          className="d-block mx-auto"
                          src="/img/phone-icon.jpg"
                          alt="Phone"
                          width="30"
                          height="30"
                        />
                        <span className="input-group-prepend">+251</span>
                      </span>
                    </div>
                    <input
                      type="tel"
                      className="form-control rounded-0"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      maxLength="9"
                      placeholder="910101010"
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Kebele</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <img
                          className="d-block mx-auto"
                          src="/img/People.jpg"
                          alt="People"
                          width="30"
                          height="30"
                        />
                      </span>
                    </div>
                    <input
                      type="number"
                      className="form-control"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Kebele number"
                      min="1"
                      max="9"
                      required
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <label htmlFor="myFile">Attach Organization License Here</label>
                  <div className="input-group mbs">
                    <input
                      type="file"
                      name="image"
                      id="myFile"
                      className="form-control rounded-0"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <hr className="mb-2" />

              <div className="custom-control custom-checkbox">
                <div className="row md-3" style={{ justifyContent: 'center' }}>
                  <button
                    type="submit"
                    className="btn btn-outline-primary btn-sm btn-block my-2 rounded-0"
                  >
                    <span className="button__text">Register</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Footer */}
      <div className="bg-white py-3">
        <footer className="py-3 mb-2">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link px-2 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link px-2 text-muted">
                About
              </a>
            </li>
          </ul>
          <p className="text-center text-muted">© 2022 Company, Inc</p>
        </footer>
      </div>

      {/* Bootstrap removed: no CDN script */}
    </div>
  );
};

export default Provide;
