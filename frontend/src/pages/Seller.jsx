import React, { useState } from 'react';

const Seller = () => {
  const [formData, setFormData] = useState({
    amount: '',
    date: '',
    type: '',
    term: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Seller form data:', formData);
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
                    context.
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
                  <a href="/logout" className="btn btn-primary my-2 mx-2 my-sm-0 rounded-2">
                    Log out
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
      <div className="container bg-light mb-5 py-4">
        <form onSubmit={handleSubmit}>
          <div className="row" style={{ justifyContent: 'center' }}>
            <div className="col-md-6 order-md-1 my-5">
              <h4 className="mb-3">Enter your information</h4>

              <div className="row">
                <div className="mb-3 col-md-6">
                  <label htmlFor="amount">Amount</label>
                  <input
                    type="number"
                    className="form-control"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="Amount in kg"
                    min="1"
                    required
                  />
                </div>

                <div className="mb-3 col-md-6">
                  <label htmlFor="date">Date</label>
                  <input
                    type="number"
                    className="form-control"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    placeholder="Date"
                    min="1"
                    max="30"
                    required
                  />
                </div>

                <hr className="mb-4" />

                <div className="col-md-2">
                  <h4 className="custom-control mb-3">Type</h4>
                </div>

                <div className="custom-control custom-checkbox col-md-3 my-2">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="food"
                    name="type"
                    value="Food"
                    checked={formData.type === 'Food'}
                    onChange={handleChange}
                    required
                  />
                  <label className="custom-control-label" htmlFor="food">
                    Leftover Food
                  </label>

                  <div className="custom-control custom-checkbox">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="compost"
                      name="type"
                      value="Compost"
                      checked={formData.type === 'Compost'}
                      onChange={handleChange}
                      required
                    />
                    <label className="custom-control-label" htmlFor="compost">
                      Compost
                    </label>
                  </div>
                </div>

                <hr className="mb-4" />

                <div className="custom-control custom-checkbox mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="save-info"
                    name="term"
                    checked={formData.term}
                    onChange={handleChange}
                    required
                  />
                  <label className="custom-control-label" htmlFor="save-info">
                    by checking this box you agree to the <a href="#"> terms and conditions</a>
                  </label>
                </div>

                <button className="btn btn-outline-primary btn-sm btn-block" type="submit">
                  Submit
                </button>
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
    </div>
  );
};

export default Seller;
