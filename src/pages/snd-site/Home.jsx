import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SndSiteWrapper from '../../components/SndSiteWrapper';

const Home = () => {
  useEffect(() => {
    // Initialize Swiper when component mounts and scripts are loaded
    const initSwiper = () => {
      if (window.Swiper) {
        new window.Swiper('.project-swiper', {
          slidesPerView: 'auto',
          spaceBetween: 30,
          navigation: {
            nextEl: '.icon-arrow-right',
          },
        });
      }
    };

    // Wait for scripts to load (they're loaded by SndSiteWrapper)
    const checkAndInitSwiper = () => {
      if (window.Swiper) {
        initSwiper();
      } else {
        // If Swiper is not loaded yet, wait a bit and try again
        setTimeout(checkAndInitSwiper, 100);
      }
    };

    checkAndInitSwiper();
  }, []);

  const openFacebook = (event) => {
    event.preventDefault();
    window.open('https://www.facebook.com/Supremenomads/', '_blank');
  };

  const scrollToQuickLinks = (event) => {
    event.preventDefault();
    const element = document.getElementById('quick-links');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
                    className="nav-link text-white text-uppercase active mx-2 px-3 mb-2 mb-lg-0 active"
                    aria-current="page"
                    to="/snd-site/home"
                  >
                    home
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
                    className="nav-link text-white text-uppercase mx-2 px-1 mb-2 mb-lg-0"
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
      <section id="hero" className="homepage">
        {/* Background Video */}
        <video className="hero-video" autoPlay muted loop playsInline poster="https://res.cloudinary.com/dnsc73sla/image/upload/c_fill,g_auto,w_1920,h_1080,f_auto,q_auto,dpr_auto/hero-home-thumbnail_vss0vf.png">
          <source
            src="https://res.cloudinary.com/dnsc73sla/video/upload/v1754100999/SN_Export_lm5zjy.mp4"
            type="video/mp4"
          />
        </video>

        {/* Text Container */}
        <div className="hero-container">
          <div className="row justify-content-center">
            <div className="hero-text-div col-12 col-md-10 text-center px-3 px-sm-5">
              <p className="hero-text">
                At <span className="sndName">Supreme Nomads Detailing</span>, our top
                priority is you.
              </p>
              <p className="hero-text mb-4">
                We strive for quality service, punctuality, and clear
                communication every time we see you.
              </p>
              <a href="#quick-links" onClick={scrollToQuickLinks}>
                <button type="button" className="btn mainbtn btn-outline-primary">
                  <iconify-icon
                    icon="tabler:arrow-down"
                    className="arrow-icon"
                  ></iconify-icon>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section id="quick-links">
        <div style={{ overflow: 'hidden' }}>
          <div className="container-fluid border-bottom" data-aos="zoom-out">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 padding-medium pe-lg-5 border-end">
                  <h2 className="display-4 text-center">Quick Links</h2>
                </div>
                <div className="col-md-6 padding-medium-2 ps-md-5 d-grid gap-3">
                  <Link
                    to="/snd-site/booking"
                    className="btn btn-primary w-100 book-now-btn-links"
                  >
                    Book Now
                    <iconify-icon
                      icon="tabler:arrow-right"
                      className="arrow-icon"
                    ></iconify-icon>
                  </Link>
                  <Link to="/snd-site/academy" className="btn btn-primary wt-100">
                    What is Detailing?
                    <iconify-icon
                      icon="tabler:arrow-right"
                      className="arrow-icon"
                    ></iconify-icon>
                  </Link>
                  <Link to="/snd-site/about" className="btn btn-primary wt-100">
                    How do we Operate?
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
      </section>

      {/* Gallery */}
      <section
        id="project"
        className="py-5"
        style={{ backgroundImage: 'url(/images/project-img.jpg)' }}
      >
        <div style={{ overflow: 'hidden' }}>
          <div data-aos="zoom-out">
            <div className="container position-relative d-sm-flex py-5 mt-5 mb-2">
              <div>
                <p className="header-top mb-3 text-center text-sm-start">Gallery</p>
                <h2 className="text-white display-4 text-center text-sm-start">
                  Latest Projects
                </h2>
              </div>

              <div
                className="swiper-arrow position-static position-md-absolute end-0 mt-3 mt-md-5 w-100 d-flex justify-content-center pe-3"
              >
                <div>
                  <iconify-icon
                    icon="teenyicons:arrow-left-solid"
                    className="icon-arrow-left me-3"
                  ></iconify-icon>
                  <iconify-icon
                    icon="teenyicons:arrow-right-solid"
                    className="icon-arrow-right"
                  ></iconify-icon>
                </div>
              </div>
            </div>

            <div className="container-fluid">
              <div className="swiper project-swiper mb-4">
                <div className="swiper-wrapper">
                  {/* Slide 1 */}
                  <div className="swiper-slide">
                    <div className="item">
                      <a
                        href="https://res.cloudinary.com/dnsc73sla/image/upload/f_auto,q_auto//v1754182746/lp1_x8d33y.png"
                        title="Audi R8"
                        className="image-link"
                      >
                        <img
                          className="portfolio-img img-fluid"
                          src="https://res.cloudinary.com/dnsc73sla/image/upload/c_limit,h_480,f_auto,q_auto/v1754182746/lp1_x8d33y.png"
                          alt="Audi R8"
                        />
                        <div
                          className="description position-absolute top-50 start-50 translate-middle text-center p-3"
                        >
                          <h3 className="text-white">Audi R8</h3>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* Slide 2 */}
                  <div className="swiper-slide">
                    <div className="item">
                      <a
                        href="https://res.cloudinary.com/dnsc73sla/image/upload/f_auto,q_auto/v1754182972/lp3_xmn6rm.png"
                        title="Mercedes GLC 300"
                        className="image-link"
                      >
                        <img
                          className="portfolio-img img-fluid"
                          src="https://res.cloudinary.com/dnsc73sla/image/upload/c_limit,h_480,f_auto,q_auto/v1754182972/lp3_xmn6rm.png"
                          alt="Mercedes GLC 300"
                        />
                        <div
                          className="description position-absolute top-50 start-50 translate-middle text-center p-3"
                        >
                          <h3 className="text-white">Mercedes GLC 300</h3>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* Slide 3 */}
                  <div className="swiper-slide">
                    <div className="item">
                      <a
                        href="https://res.cloudinary.com/dnsc73sla/image/upload/f_auto,q_auto/v1754182837/lp2_pyi66n.png"
                        title="Honda Civic Si"
                        className="image-link"
                      >
                        <img
                          className="portfolio-img img-fluid"
                          src="https://res.cloudinary.com/dnsc73sla/image/upload/c_limit,h_480,f_auto,q_auto/v1754182837/lp2_pyi66n.png"
                          alt="Honda Civic Si"
                        />
                        <div
                          className="description position-absolute top-50 start-50 translate-middle text-center p-3"
                        >
                          <h3 className="text-white">Honda Civic Si</h3>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* Slide 4 */}
                  <div className="swiper-slide">
                    <div className="item">
                      <a
                        href="https://res.cloudinary.com/dnsc73sla/image/upload/f_auto,q_auto/v1754359599/lp8_fxd3br.png"
                        title="Mercedes G Wagon"
                        className="image-link"
                      >
                        <img
                          className="portfolio-img img-fluid"
                          src="https://res.cloudinary.com/dnsc73sla/image/upload/c_limit,h_480,f_auto,q_auto/v1754359599/lp8_fxd3br.png"
                          alt="Mercedes G Wagon"
                        />
                        <div
                          className="description position-absolute top-50 start-50 translate-middle text-center p-3"
                        >
                          <h3 className="text-white">Mercedes G Wagon</h3>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* Slide 5 */}
                  <div className="swiper-slide">
                    <div className="item">
                      <a
                        href="https://res.cloudinary.com/dnsc73sla/image/upload/f_auto,q_auto/v1754364681/lp5_arc7pw.png"
                        title="BMW X3"
                        className="image-link"
                      >
                        <img
                          className="portfolio-img img-fluid"
                          src="https://res.cloudinary.com/dnsc73sla/image/upload/c_limit,h_480,f_auto,q_auto/v1754364681/lp5_arc7pw.png"
                          alt="BMW X3"
                        />
                        <div
                          className="description position-absolute top-50 start-50 translate-middle text-center p-3"
                        >
                          <h3 className="text-white">BMW X3</h3>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* Slide 6 */}
                  <div className="swiper-slide">
                    <div className="item">
                      <a
                        href="https://res.cloudinary.com/dnsc73sla/image/upload/f_auto,q_auto/v1754359771/lp6_f23yy3.png"
                        title="Tesla CyberTruck"
                        className="image-link"
                      >
                        <img
                          className="portfolio-img img-fluid"
                          src="https://res.cloudinary.com/dnsc73sla/image/upload/c_limit,h_480,f_auto,q_auto/v1754359771/lp6_f23yy3.png"
                          alt="Tesla CyberTruck"
                        />
                        <div
                          className="description position-absolute top-50 start-50 translate-middle text-center p-3"
                        >
                          <h3 className="text-white">Tesla CyberTruck</h3>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* Slide 7 */}
                  <div className="swiper-slide">
                    <div className="item">
                      <a
                        href="https://res.cloudinary.com/dnsc73sla/image/upload/f_auto,q_auto/v1754360713/lp7_poqcgw.png"
                        title="Toyota Camry XSE"
                        className="image-link"
                      >
                        <img
                          className="portfolio-img img-fluid"
                          src="https://res.cloudinary.com/dnsc73sla/image/upload/c_limit,h_480,f_auto,q_auto/v1754360713/lp7_poqcgw.png"
                          alt="Toyota Camry XSE"
                        />
                        <div
                          className="description position-absolute top-50 start-50 translate-middle text-center p-3"
                        >
                          <h3 className="text-white">Toyota Camry XSE</h3>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* Slide 8 */}
                  <div className="swiper-slide">
                    <div className="item">
                      <a
                        href="https://res.cloudinary.com/dnsc73sla/image/upload/f_auto,q_auto/v1754358509/lp4_obmatv.png"
                        title="Dodge Hornet"
                        className="image-link"
                      >
                        <img
                          className="portfolio-img img-fluid"
                          src="https://res.cloudinary.com/dnsc73sla/image/upload/c_limit,h_480,f_auto,q_auto/v1754358509/lp4_obmatv.png"
                          alt="Dodge Hornet"
                        />
                        <div
                          className="description position-absolute top-50 start-50 translate-middle text-center p-3"
                        >
                          <h3 className="text-white">Dodge Hornet</h3>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* Slide 9 */}
                  <div className="swiper-slide">
                    <div className="item">
                      <a
                        href="https://res.cloudinary.com/dnsc73sla/image/upload/f_auto,q_auto/v1754357528/lp4_zycevv.png"
                        title="Honda Accord"
                        className="image-link"
                      >
                        <img
                          className="portfolio-img img-fluid"
                          src="https://res.cloudinary.com/dnsc73sla/image/upload/c_limit,h_480,f_auto,q_auto/v1754357528/lp4_zycevv.png"
                          alt="Honda Accord"
                        />
                        <div
                          className="description position-absolute top-50 start-50 translate-middle text-center p-3"
                        >
                          <h3 className="text-white">Honda Accord</h3>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center pb-5 mb-5">
              <Link to="/snd-site/gallery" className="btn btn-primary mt-5">
                See More
                <iconify-icon
                  icon="tabler:arrow-right"
                  className="arrow-icon"
                ></iconify-icon>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detailing Plan - I'll include a simplified version for brevity */}
      <section id="detailingPrice" className="my-5">
        <div style={{ overflow: 'hidden' }}>
          <div className="container py-5" data-aos="zoom-out">
            <h2 className="display-4 mb-5 text-center text-md-start">
              Detailing Packages
            </h2>
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
              <div
                className="tab-pane fade show active"
                id="regular-tab-pane"
                role="tabpanel"
                aria-labelledby="regular-tab"
                tabIndex="0"
              >
                <div className="row pt-4">
                  <div className="col-lg-3 pb-4">
                    <div className="py-5 plan-post text-center">
                      <p className="header-top">Premium</p>
                      <h2 className="display-5">$300</h2>
                      <div className="price-option mt-3">
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          <span>6 Month Ceramic Wax<sup className="sup-line">1</sup></span>
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          Iron Removal Treatment
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          Clay Treatment
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          Wheel Surfaces, Barrel, & Tire Clean
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          Tire Dressing
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          Foam Bath and Hand Wash
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          Shampoo and Conditioner
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          Headliner Spot Cleaning
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          Seats & Carpets Sanitized
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          UV Protect & Sanitize Dash/Vents/Trims/Panels
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          Deep Interior & Trunk Vacuum
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          Windows and Door Jams Cleaned
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          <span>Rain-X<span className="sup-reg">®</span> Window Treatment</span>
                        </p>
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
                  
                  {/* Additional pricing cards would go here - simplified for brevity */}
                  <div className="col-lg-3 pb-4">
                    <div className="py-5 plan-post text-center">
                      <p className="header-top">Exterior</p>
                      <h2 className="display-5">$160</h2>
                      <div className="price-option mt-3">
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          <span>6 Month Ceramic Wax<sup className="sup-line">1</sup></span>
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          Iron Removal Treatment
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          Clay Treatment
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          Wheel Surface, Barrel & Tire Wash
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          Tire Dressing
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          Foam Bath & Hand Wash
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          Windows & Door Jams Cleaned
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          <span>Rain-X<span className="sup-reg">®</span> Window Treatment</span>
                        </p>
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
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          Shampoo & Conditioner
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          Headliner Spot Cleaning
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          Steam Interior Surfaces
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          Seats & Carpets Sanitized
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          UV Protect and Sanitize Dash/Vents/Trims/Panels
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          Deep Interior & Trunk Vacuum
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          Windows and Door Jams Cleaned
                        </p>
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
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          <span>Basic Wax Coating<sup className="sup-line">1</sup></span>
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          Wheel Surface and Tire Wash
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          Tire Dressing
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          Foam Bath & Hand Wash
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          Seats & Carpets Sanitized
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          Dash/Vents/Trims/Panels Wipe Down
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          Interior Vacuum
                        </p>
                        <p>
                          <iconify-icon
                            icon="mdi:square-medium"
                            className="bullet-icon price-tick"
                          ></iconify-icon>
                          Windows Only
                        </p>
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
            
            {/* Disclaimer */}
            <div className="px-3 pb-5">
              <p className="disclaimer">
                <sup className="sup-line">1</sup> Wax protection longevity varies
                based on vehicle condition, storage, and maintenance.
                Pre-existing paint damage or aftermarket paint may also affect
                the wax's lifespan. For optimal results, regular care and
                garaging are recommended.
              </p>
            </div>
            <div className="allServicesDiv text-center">
              <Link to="/snd-site/services" className="btn btn-primary mt-3">
                View All Services
                <iconify-icon
                  icon="tabler:arrow-right"
                  className="arrow-icon"
                ></iconify-icon>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
                      <iconify-icon
                        icon="mdi:phone"
                        style={{ verticalAlign: 'middle', marginRight: '6px' }}
                      ></iconify-icon>
                      704-561-1927
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
                      <iconify-icon
                        icon="mdi:email"
                        style={{ verticalAlign: 'middle', marginRight: '6px' }}
                      ></iconify-icon>
                      info@supremenomads.com
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-list mb-3">
                    <div className="d-flex justify-content-center align-items-center">
                      <a
                        href="https://www.tiktok.com/@supremenomads704"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <iconify-icon
                          className="social-icon-footer pe-4"
                          icon="ri:tiktok-fill"
                        ></iconify-icon>
                      </a>
                      <a
                        href="https://www.instagram.com/supremenomads"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <iconify-icon
                          className="social-icon-footer pe-4"
                          icon="mdi:instagram"
                        ></iconify-icon>
                      </a>
                      <a
                        href="https://www.facebook.com/Supremenomads/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={openFacebook}
                      >
                        <iconify-icon
                          className="social-icon-footer pe-4"
                          icon="mdi:facebook"
                        ></iconify-icon>
                      </a>
                      <a
                        href="https://www.yelp.com/biz/supreme-nomads-detailing-charlotte"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <iconify-icon
                          className="social-icon-footer pe-4"
                          icon="mdi:yelp"
                        ></iconify-icon>
                      </a>
                      <a
                        href="https://www.youtube.com/@SupremeNomads"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <iconify-icon
                          className="social-icon-footer"
                          icon="mdi:youtube"
                        ></iconify-icon>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-list mb-3">
                    <p>
                      Icons by
                      <a
                        href="https://icons8.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Icons8
                      </a>
                    </p>
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
          <footer
            className="d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center py-2 border-top"
          >
            <p className="mb-1 mb-md-0 footer-copy">
              © 2022 - 2025 | All Rights Reserved
            </p>
            <p className="mb-0 footer-copy">Supreme Nomads Detailing LLC</p>
          </footer>
        </div>
      </section>
    </SndSiteWrapper>
  );
};

export default Home;
