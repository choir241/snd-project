import React from 'react';
import { Link } from 'react-router-dom';
import SndSiteWrapper from '../../components/SndSiteWrapper';

const Services = () => {
  const openFacebook = (event) => {
    event.preventDefault();
    window.open('https://www.facebook.com/Supremenomads/', '_blank');
  };

  return (
    <SndSiteWrapper>
      {/* Nav */}
      <nav className="navbar fixed-top navbar-expand-xl container-fluid p-sm-3 p-2">
        {/* Logo */}
        <div className="container-fluid">
          <Link className="navbar-brand" to="/snd-site/home">
            <img src="/images/horizontal-logo.png" alt="logo" />
          </Link>

          {/* Mobile Layout */}
          <div className="d-flex align-items-center gap-3 d-xl-none">
            <a href="tel:+17045611927" className="text-white pt-2">
              <iconify-icon
                icon="ic:baseline-call"
                className="call-icon"
                style={{ fontSize: '1.5rem' }}
              ></iconify-icon>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <iconify-icon
                icon="system-uicons:menu-hamburger"
                className="hamburger-menu"
              ></iconify-icon>
            </button>
          </div>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header my-2 mx-3">
              <img
                src="/images/logo-gold-text.svg"
                alt="Supreme Nomads Detailing Logo"
                className="hamburger-logo"
              />
              <button
                type="button"
                className="btn-close btn-close-white text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              {/* Routes */}
              <ul
                className="navbar-nav align-items-center justify-content-end justify-content-xxl-center flex-grow-1"
              >
                <li className="nav-item">
                  <Link
                    className="nav-link text-white text-uppercase mx-2 px-1 mb-2 mb-lg-0"
                    to="/snd-site/home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-white text-uppercase mx-2 px-1 mb-2 mb-lg-0"
                    to="/snd-site/gallery"
                  >
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-white text-uppercase mx-2 px-1 mb-2 mb-lg-0 active"
                    to="/snd-site/services"
                  >
                    Our Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-white text-uppercase mx-2 px-1 mb-2 mb-lg-0"
                    to="/snd-site/about"
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-white text-uppercase mx-2 px-1 mb-2 mb-lg-0"
                    to="/snd-site/academy"
                  >
                    Academy
                  </Link>
                </li>
              </ul>

              {/* Socials */}
              <div
                className="d-flex mt-lg-0 align-items-center justify-content-center offcanvas-body social-div"
              >
                <ul className="d-flex flex-row gap-2 list-unstyled mb-0 social-ul">
                  <li className="nav-item">
                    <a
                      className="nav-link d-flex align-items-center"
                      href="tel:+17045611927"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <iconify-icon
                        icon="ic:baseline-call"
                        className="social-icon text-white"
                      ></iconify-icon>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link d-flex align-items-center"
                      href="https://www.tiktok.com/@supremenomads704"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <iconify-icon
                        icon="ri:tiktok-fill"
                        className="social-icon text-white"
                      ></iconify-icon>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link d-flex align-items-center"
                      href="https://www.instagram.com/supremenomads"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <iconify-icon
                        icon="ri:instagram-line"
                        className="social-icon text-white"
                      ></iconify-icon>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link d-flex align-items-center"
                      href="https://www.facebook.com/Supremenomads/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={openFacebook}
                    >
                      <iconify-icon
                        icon="ri:facebook-fill"
                        className="social-icon text-white"
                      ></iconify-icon>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link d-flex align-items-center"
                      href="https://www.yelp.com/biz/supreme-nomads-detailing-charlotte"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <iconify-icon
                        icon="mdi:yelp"
                        className="social-icon text-white"
                      ></iconify-icon>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link d-flex align-items-center"
                      href="https://www.youtube.com/@SupremeNomads"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <iconify-icon
                        icon="ri:youtube-fill"
                        className="social-icon text-white"
                      ></iconify-icon>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Book Now */}
              <div className="book-now-div">
                <Link
                  to="/snd-site/booking"
                  className="btn btn-primary book-now-btn w-100 w-xl-auto ms-0 ms-xl-3"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-section hero-services">
        <div className="container py-5 hero-content">
          <div className="row py-5">
            <div
              className="d-flex flex-wrap flex-column justify-content-center align-items-center my-5 py-5 text-white"
            >
              <h2 className="page-title display-3 mt-5 text-white">Our Services</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Detailing Plan */}
      <section id="detailingPrice" className="my-5">
        <div style={{ overflow: 'hidden' }}>
          <div className="container py-5" data-aos="zoom-out">
            <h2 className="display-4 mb-5">Detailing Packages</h2>

            <ul className="nav nav-tabs my-3" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link me-4 px-4 py-1 mb-2 active"
                  id="regular-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#regular-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="regular-tab-pane"
                  aria-selected="true"
                >
                  Sedan/Coupé
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link me-4 px-4 py-1 mb-2"
                  id="medium-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#medium-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="medium-tab-pane"
                  aria-selected="false"
                >
                  2 Row Suv/Small Truck
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link me-4 px-4 py-1 mb-2"
                  id="van-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#van-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="van-tab-pane"
                  aria-selected="false"
                >
                  3 Row Suv/Large Truck
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              {/* Sedan/Coupé Tab */}
              <div
                className="tab-pane fade show active"
                id="regular-tab-pane"
                role="tabpanel"
                aria-labelledby="regular-tab"
                tabIndex="0"
              >
                <div className="row py-4">
                  <div className="col-lg-3 pb-4">
                    <div className="py-5 plan-post text-center">
                      <p className="header-top">Premium</p>
                      <h2 className="display-5">$300</h2>
                      <div className="price-option mt-3">
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon>
                        <span>6 Month Ceramic Wax<sup className="sup-line"><a href="#disclaimers">1</a></sup></span></p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Iron Removal Treatment</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon>Clay Treatment</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon>Wheel Surfaces, Barrel, & Tire Clean</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Tire Dressing</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Foam Bath and Hand Wash</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Shampoo and Conditioner</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Headliner Spot Cleaning</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Seats & Carpets Sanitized</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> UV Protect & Sanitize Dash/Vents/Trims/Panels</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Deep Interior & Trunk Vacuum</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Windows and Door Jams Cleaned</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon><span>Rain-X<span className="sup-reg">®</span> Window Treatment</span></p>
                      </div>
                      <Link
                        to="/snd-site/booking"
                        className="btn btn-primary mt-3 px-4 py-3 mx-2 book-now-btn-links"
                      >
                        Book now
                        <iconify-icon
                          icon="tabler:arrow-right"
                          className="arrow-icon"
                        ></iconify-icon>
                      </Link>
                    </div>
                  </div>
                  {/* Exterior package */}
                  <div className="col-lg-3 pb-4">
                    <div className="py-5 plan-post text-center">
                      <p className="header-top">Exterior</p>
                      <h2 className="display-5">$160</h2>
                      <div className="price-option mt-3">
                        <p>
                          <iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon>
                          <span>6 Month Ceramic Wax<sup className="sup-line"><a href="#disclaimers">1</a></sup></span>
                        </p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Iron Removal Treatment</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Clay Treatment</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Wheel Surface, Barrel & Tire Wash</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Tire Dressing</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Foam Bath & Hand Wash</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Windows & Door Jams Cleaned</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon><span>Rain-X<span className="sup-reg">®</span> Window Treatment</span></p>
                      </div>
                      <Link
                        to="/snd-site/booking"
                        className="btn btn-primary mt-3 px-4 py-3 mx-2 book-now-btn-links"
                      >
                        Book now
                        <iconify-icon
                          icon="tabler:arrow-right"
                          className="arrow-icon"
                        ></iconify-icon>
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-3 pb-4">
                    <div className="py-5 plan-post text-center">
                      <p className="header-top">Interior</p>
                      <h2 className="display-5">$160</h2>
                      <div className="price-option mt-3">
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Shampoo & Conditioner</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Headliner Spot Cleaning</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Steam Interior Surfaces</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Seats & Carpets Sanitized</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> UV Protect and Sanitize Dash/Vents/Trims/Panels</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Deep Interior & Trunk Vacuum</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Windows and Door Jams Cleaned</p>
                      </div>
                      <Link
                        to="/snd-site/booking"
                        className="btn btn-primary mt-3 px-4 py-3 mx-2 book-now-btn-links"
                      >
                        Book now
                        <iconify-icon
                          icon="tabler:arrow-right"
                          className="arrow-icon"
                        ></iconify-icon>
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-3 pb-4">
                    <div className="py-5 plan-post text-center">
                      <p className="header-top">Express</p>
                      <h2 className="display-5">$125</h2>
                      <div className="price-option mt-3">
                        <p>
                          <iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon>
                          <span>Basic Wax Coating<sup className="sup-line"><a href="#disclaimers">1</a></sup></span>
                        </p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Wheel Surface and Tire Wash</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Tire Dressing</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Foam Bath & Hand Wash</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Seats & Carpets Sanitized</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Dash/Vents/Trims/Panels Wipe Down</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Interior Vacuum</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Windows Only</p>
                      </div>
                      <Link
                        to="/snd-site/booking"
                        className="btn btn-primary mt-3 px-4 py-3 mx-2 book-now-btn-links"
                      >
                        Book now
                        <iconify-icon
                          icon="tabler:arrow-right"
                          className="arrow-icon"
                        ></iconify-icon>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2 Row Suv/Small Truck Tab */}
              <div
                className="tab-pane fade"
                id="medium-tab-pane"
                role="tabpanel"
                aria-labelledby="medium-tab"
                tabIndex="0"
              >
                <div className="row py-4">
                  <div className="col-lg-3 pb-4">
                    <div className="py-5 plan-post text-center">
                      <p className="header-top">Premium</p>
                      <h2 className="display-5">$350</h2>
                      <div className="price-option mt-3">
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon>
                        <span>6 Month Ceramic Wax<sup className="sup-line"><a href="#disclaimers">1</a></sup></span></p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Iron Removal Treatment</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon>Clay Treatment</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon>Wheel Surfaces, Barrel, & Tire Clean</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Tire Dressing</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Foam Bath and Hand Wash</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Shampoo and Conditioner</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Headliner Spot Cleaning</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Seats & Carpets Sanitized</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> UV Protect & Sanitize Dash/Vents/Trims/Panels</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Deep Interior & Trunk Vacuum</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Windows and Door Jams Cleaned</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon><span>Rain-X<span className="sup-reg">®</span> Window Treatment</span></p>
                      </div>
                      <Link
                        to="/snd-site/booking"
                        className="btn btn-primary mt-3 px-4 py-3 mx-2 book-now-btn-links"
                      >
                        Book now
                        <iconify-icon
                          icon="tabler:arrow-right"
                          className="arrow-icon"
                        ></iconify-icon>
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-3 pb-4">
                    <div className="py-5 plan-post text-center">
                      <p className="header-top">Exterior</p>
                      <h2 className="display-5">$180</h2>
                      <div className="price-option mt-3">
                        <p>
                          <iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon>
                          <span>6 Month Ceramic Wax<sup className="sup-line"><a href="#disclaimers">1</a></sup></span>
                        </p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Iron Removal Treatment</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Clay Treatment</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Wheel Surface, Barrel & Tire Wash</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Tire Dressing</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Foam Bath & Hand Wash</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Windows & Door Jams Cleaned</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon><span>Rain-X<span className="sup-reg">®</span> Window Treatment</span></p>
                      </div>
                      <Link
                        to="/snd-site/booking"
                        className="btn btn-primary mt-3 px-4 py-3 mx-2 book-now-btn-links"
                      >
                        Book now
                        <iconify-icon
                          icon="tabler:arrow-right"
                          className="arrow-icon"
                        ></iconify-icon>
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-3 pb-4">
                    <div className="py-5 plan-post text-center">
                      <p className="header-top">Interior</p>
                      <h2 className="display-5">$180</h2>
                      <div className="price-option mt-3">
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Shampoo & Conditioner</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Headliner Spot Cleaning</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Steam Interior Surfaces</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Seats & Carpets Sanitized</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> UV Protect and Sanitize Dash/Vents/Trims/Panels</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Deep Interior & Trunk Vacuum</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Windows and Door Jams Cleaned</p>
                      </div>
                      <Link
                        to="/snd-site/booking"
                        className="btn btn-primary mt-3 px-4 py-3 mx-2 book-now-btn-links"
                      >
                        Book now
                        <iconify-icon
                          icon="tabler:arrow-right"
                          className="arrow-icon"
                        ></iconify-icon>
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-3 pb-4">
                    <div className="py-5 plan-post text-center">
                      <p className="header-top">Express</p>
                      <h2 className="display-5">$150</h2>
                      <div className="price-option mt-3">
                        <p>
                          <iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon>
                          <span>Basic Wax Coating<sup className="sup-line"><a href="#disclaimers">1</a></sup></span>
                        </p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Wheel Surface and Tire Wash</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Tire Dressing</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Foam Bath & Hand Wash</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Seats & Carpets Sanitized</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Dash/Vents/Trims/Panels Wipe Down</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Interior Vacuum</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Windows Only</p>
                      </div>
                      <Link
                        to="/snd-site/booking"
                        className="btn btn-primary mt-3 px-4 py-3 mx-2 book-now-btn-links"
                      >
                        Book now
                        <iconify-icon
                          icon="tabler:arrow-right"
                          className="arrow-icon"
                        ></iconify-icon>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3 Row Suv/Large Truck Tab */}
              <div
                className="tab-pane fade"
                id="van-tab-pane"
                role="tabpanel"
                aria-labelledby="van-tab"
                tabIndex="0"
              >
                <div className="row py-4">
                  <div className="col-lg-3 pb-4">
                    <div className="py-5 plan-post text-center">
                      <p className="header-top">Premium</p>
                      <h2 className="display-5">$400</h2>
                      <div className="price-option mt-3">
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon>
                        <span>6 Month Ceramic Wax<sup className="sup-line"><a href="#disclaimers">1</a></sup></span></p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Iron Removal Treatment</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon>Clay Treatment</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon>Wheel Surfaces, Barrel, & Tire Clean</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Tire Dressing</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Foam Bath and Hand Wash</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Shampoo and Conditioner</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Headliner Spot Cleaning</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Seats & Carpets Sanitized</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> UV Protect & Sanitize Dash/Vents/Trims/Panels</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Deep Interior & Trunk Vacuum</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Windows and Door Jams Cleaned</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon><span>Rain-X<span className="sup-reg">®</span> Window Treatment</span></p>
                      </div>
                      <Link
                        to="/snd-site/booking"
                        className="btn btn-primary mt-3 px-4 py-3 mx-2 book-now-btn-links"
                      >
                        Book now
                        <iconify-icon
                          icon="tabler:arrow-right"
                          className="arrow-icon"
                        ></iconify-icon>
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-3 pb-4">
                    <div className="py-5 plan-post text-center">
                      <p className="header-top">Exterior</p>
                      <h2 className="display-5">$200</h2>
                      <div className="price-option mt-3">
                        <p>
                          <iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon>
                          <span>6 Month Ceramic Wax<sup className="sup-line"><a href="#disclaimers">1</a></sup></span>
                        </p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Iron Removal Treatment</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Clay Treatment</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Wheel Surface, Barrel & Tire Wash</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Tire Dressing</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Foam Bath & Hand Wash</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Windows & Door Jams Cleaned</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon><span>Rain-X<span className="sup-reg">®</span> Window Treatment</span></p>
                      </div>
                      <Link
                        to="/snd-site/booking"
                        className="btn btn-primary mt-3 px-4 py-3 mx-2 book-now-btn-links"
                      >
                        Book now
                        <iconify-icon
                          icon="tabler:arrow-right"
                          className="arrow-icon"
                        ></iconify-icon>
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-3 pb-4">
                    <div className="py-5 plan-post text-center">
                      <p className="header-top">Interior</p>
                      <h2 className="display-5">$200</h2>
                      <div className="price-option mt-3">
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Shampoo & Conditioner</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Headliner Spot Cleaning</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Steam Interior Surfaces</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Seats & Carpets Sanitized</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> UV Protect and Sanitize Dash/Vents/Trims/Panels</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Deep Interior & Trunk Vacuum</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Windows and Door Jams Cleaned</p>
                      </div>
                      <Link
                        to="/snd-site/booking"
                        className="btn btn-primary mt-3 px-4 py-3 mx-2 book-now-btn-links"
                      >
                        Book now
                        <iconify-icon
                          icon="tabler:arrow-right"
                          className="arrow-icon"
                        ></iconify-icon>
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-3 pb-4">
                    <div className="py-5 plan-post text-center">
                      <p className="header-top">Express</p>
                      <h2 className="display-5">$175</h2>
                      <div className="price-option mt-3">
                        <p>
                          <iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon>
                          <span>Basic Wax Coating<sup className="sup-line"><a href="#disclaimers">1</a></sup></span>
                        </p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Wheel Surface and Tire Wash</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Tire Dressing</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Foam Bath & Hand Wash</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Seats & Carpets Sanitized</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Dash/Vents/Trims/Panels Wipe Down</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Interior Vacuum</p>
                        <p><iconify-icon icon="mdi:square-medium" className="bullet-icon price-tick"></iconify-icon> Windows Only</p>
                      </div>
                      <Link
                        to="/snd-site/booking"
                        className="btn btn-primary mt-3 px-4 py-3 mx-2 book-now-btn-links"
                      >
                        Book now
                        <iconify-icon
                          icon="tabler:arrow-right"
                          className="arrow-icon"
                        ></iconify-icon>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimers */}
      <section id="disclaimers" className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="disclaimer">
                <h4>Disclaimers:</h4>
                <p>1. Ceramic coating durability depends on proper maintenance, environmental factors, and vehicle usage. Results may vary.</p>
                <p>2. Prices may vary based on vehicle condition, size, and additional services requested.</p>
                <p>3. Additional charges may apply for excessive pet hair, heavy staining, or vehicles requiring extra time and materials.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section id="footer">
        <div className="container footer-containerG mt-5 mt-md-0 pt-2">
          <div>
            <img 
              src="https://res.cloudinary.com/dnsc73sla/image/upload/v1752006942/logo-gold-horse-name_dmbkjk.svg" 
              alt="Supreme Nomands Logo" 
              className="footer-logo mx-auto d-block mt-5"
            />
          </div>
         
          {/* Main Footer */}
          <footer className="row py-3">
          
            {/* Contact Us */}
            <div className="col-12 col-lg-4 mb-4 mb-lg-0 text-center">
              <h5 className="fs-5 mt-3 mt-lg-0 mb-3">Mobile Detailing Unit</h5>
              <div className="row row-cols-1 g-0">
                <div className="col">
                  <div className="footer-list mb-3">
                    <h6 className="mobile footer-heading2">We Come To You!</h6>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-list mb-3">
                    <a 
                      href="tel:+1704-561-1927" 
                      className="nav-link text-uppercase p-0" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <iconify-icon icon="mdi:phone" style={{ verticalAlign: 'middle', marginRight: '6px' }}></iconify-icon>704-561-1927
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-list mb-3">
                    <a 
                      href="mailto:info@supremenomads.com" 
                      className="nav-link text-uppercase p-0 footer-em" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <iconify-icon icon="mdi:email" style={{ verticalAlign: 'middle', marginRight: '6px' }}></iconify-icon>info@supremenomads.com
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-list mb-3">
                    <div className="d-flex justify-content-center align-items-center">
                      <a href="https://www.tiktok.com/@supremenomads704" target="_blank" rel="noopener noreferrer">
                        <iconify-icon className="social-icon-footer pe-4" icon="ri:tiktok-fill"></iconify-icon>
                      </a>
                      <a href="https://www.instagram.com/supremenomads" target="_blank" rel="noopener noreferrer">
                        <iconify-icon className="social-icon-footer pe-4" icon="mdi:instagram"></iconify-icon>
                      </a>
                      <a href="https://www.facebook.com/Supremenomads/" target="_blank" rel="noopener noreferrer" onClick={openFacebook}>
                        <iconify-icon className="social-icon-footer pe-4" icon="mdi:facebook"></iconify-icon>
                      </a>
                      <a href="https://www.yelp.com/biz/supreme-nomads-detailing-charlotte" target="_blank" rel="noopener noreferrer">
                        <iconify-icon className="social-icon-footer pe-4" icon="mdi:yelp"></iconify-icon>
                      </a>
                      <a href="https://www.youtube.com/@SupremeNomads" target="_blank" rel="noopener noreferrer">
                        <iconify-icon className="social-icon-footer" icon="mdi:youtube"></iconify-icon>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-list mb-3">
                    <p>Icons by <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">Icons8</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cities */}
            <div className="col-12 col-lg-4 mb-4 mb-lg-0 text-center">
              <h5 className="fs-5 mt-3 mt-lg-0 mb-3">We Serve</h5>
              <div className="row row-cols-1 row-cols-lg-2 g-0">
                <div className="col">
                  <div className="footer-list mb-3">
                    <a href="#" className="nav-link text-uppercase p-0">Charlotte</a>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-list mb-3">
                    <a href="#" className="nav-link text-uppercase p-0">Concord</a>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-list mb-3">
                    <a href="#" className="nav-link text-uppercase p-0">Harrisburg</a>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-list mb-3">
                    <a href="#" className="nav-link text-uppercase p-0">Huntersville</a>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-list mb-3">
                    <a href="#" className="nav-link text-uppercase p-0">Matthews</a>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-list mb-3">
                    <a href="#" className="nav-link text-uppercase p-0">Waxhaw</a>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-list mb-3">
                    <a href="#" className="nav-link text-uppercase p-0">Lake Norman</a>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-list mb-3">
                    <a href="#" className="nav-link text-uppercase p-0">Fort Mill, SC</a>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-list mb-3">
                    <a href="#" className="nav-link text-uppercase p-0">Indian Land, SC</a>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-list mb-3">
                    <a href="#" className="nav-link text-uppercase p-0">Rock Hill, SC</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-12 col-lg-4 mb-4 mb-lg-0 text-center">
              <h5 className="fs-5 mt-3 mt-lg-0 mb-3">Quick Links</h5>
              <div className="row row-cols-1 g-0">
                <div className="col">
                  <div className="footer-list mb-3">
                    <Link to="/snd-site/home" className="nav-link text-uppercase p-0">Home</Link>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-list mb-3">
                    <Link to="/snd-site/gallery" className="nav-link text-uppercase p-0">Gallery</Link>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-list mb-3">
                    <Link to="/snd-site/services" className="nav-link text-uppercase p-0">Our Services</Link>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-list mb-3">
                    <Link to="/snd-site/about" className="nav-link text-uppercase p-0">About Us</Link>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-list mb-3">
                    <Link to="/snd-site/academy" className="nav-link text-uppercase p-0">Academy</Link>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>

        {/* Copyright */}
        <div className="container">
          <footer className="d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center py-2 border-top">
            <p className="mb-1 mb-md-0 footer-copy">© 2022 - 2025 | All Rights Reserved</p>
            <p className="mb-0 footer-copy">Supreme Nomads Detailing LLC</p>
          </footer>
        </div>
      </section>
    </SndSiteWrapper>
  );
};

export default Services;
