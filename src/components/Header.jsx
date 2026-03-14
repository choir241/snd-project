import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../public/images/horizontal-logo.png";
import "../pages/snd-site/css/vendor.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/snd-site/css/style.css";

export default function Header() {
    const location = useLocation();

    const openFacebook = (event) => {
        event.preventDefault();
        window.open("https://www.facebook.com/Supremenomads/", "_blank");
    };

    const isActiveLink = (path) => {
        return location.pathname === path ? "active" : "";
    };
    // Load Iconify and Bootstrap
    useEffect(() => {
        // Load external CSS
        const swiperCSS = document.createElement("link");
        swiperCSS.rel = "stylesheet";
        swiperCSS.href =
            "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css";
        document.head.appendChild(swiperCSS);

        // AOS CSS
        const aosCSS = document.createElement("link");
        aosCSS.rel = "stylesheet";
        aosCSS.href = "https://unpkg.com/aos@2.3.1/dist/aos.css";
        document.head.appendChild(aosCSS);

        // Google Fonts
        const preconnect1 = document.createElement("link");
        preconnect1.rel = "preconnect";
        preconnect1.href = "https://fonts.googleapis.com";
        document.head.appendChild(preconnect1);

        const preconnect2 = document.createElement("link");
        preconnect2.rel = "preconnect";
        preconnect2.href = "https://fonts.gstatic.com";
        preconnect2.crossOrigin = "";
        document.head.appendChild(preconnect2);

        const googleFonts = document.createElement("link");
        googleFonts.rel = "stylesheet";
        googleFonts.href =
            "https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,400;6..12,600;6..12,700&family=Oswald:wght@500;600;700&display=swap";
        document.head.appendChild(googleFonts);

        // Load jQuery first (required for many scripts)
        const jqueryScript = document.createElement("script");
        jqueryScript.src = "https://code.jquery.com/jquery-1.11.0.min.js";
        jqueryScript.async = true;
        document.body.appendChild(jqueryScript);

        // Load Bootstrap JS
        const bootstrapScript = document.createElement("script");
        bootstrapScript.src =
            "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
        bootstrapScript.async = true;
        document.body.appendChild(bootstrapScript);

        // Load Swiper JS
        const swiperScript = document.createElement("script");
        swiperScript.src =
            "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js";
        swiperScript.async = true;
        document.body.appendChild(swiperScript);

        // Load AOS JS
        const aosScript = document.createElement("script");
        aosScript.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
        aosScript.async = true;
        document.body.appendChild(aosScript);

        // Load Iconify
        const iconifyScript = document.createElement("script");
        iconifyScript.src =
            "https://cdn.jsdelivr.net/npm/iconify-icon@1.0.7/dist/iconify-icon.min.js";
        iconifyScript.async = true;
        document.body.appendChild(iconifyScript);

        // Load local scripts
        const modernizrScript = document.createElement("script");
        modernizrScript.src = "/snd-site/js/modernizr.js";
        modernizrScript.async = true;
        document.body.appendChild(modernizrScript);

        const pluginsScript = document.createElement("script");
        pluginsScript.src = "/snd-site/js/plugins.js";
        pluginsScript.async = true;
        document.body.appendChild(pluginsScript);

        const scriptScript = document.createElement("script");
        scriptScript.src = "/snd-site/js/script.js";
        scriptScript.async = true;
        document.body.appendChild(scriptScript);

        // Initialize AOS
        setTimeout(() => {
            if (window.AOS) {
                window.AOS.init({
                    duration: 1000,
                    once: true,
                });
            }
        }, 1000);

        // Cleanup
        return () => {
            try {
                document.head.removeChild(swiperCSS);
                document.head.removeChild(aosCSS);
                document.head.removeChild(preconnect1);
                document.head.removeChild(preconnect2);
                document.head.removeChild(googleFonts);
                document.body.removeChild(jqueryScript);
                document.body.removeChild(bootstrapScript);
                document.body.removeChild(swiperScript);
                document.body.removeChild(aosScript);
                document.body.removeChild(iconifyScript);
                document.body.removeChild(modernizrScript);
                document.body.removeChild(pluginsScript);
                document.body.removeChild(scriptScript);
            } catch (e) {
                // Ignore cleanup errors
            }
        };
    }, []);

    return (
        <nav className="navbar bg-dark navbar-expand-xl container-fluid p-sm-3 p-2">
            {/* Logo */}
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="logo" />
                </Link>

                {/* Mobile Layout */}
                <div className="d-flex align-items-center gap-3 d-xl-none">
                    <a href="tel:+17045611927" className="text-white pt-2">
                        <iconify-icon
                            icon="ic:baseline-call"
                            className="call-icon"
                            style={{ fontSize: "1.5rem" }}
                        />
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
                        />
                    </button>
                </div>
                <div
                    className="offcanvas offcanvas-end"
                    tabIndex={-1}
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                >
                    <div className="offcanvas-header my-2 mx-3">
                        <img
                            src="/images/logo-gold-text.svg"
                            alt="Supreme Nomads Detailing Logo"
                            className="hamburger-logo"
                        />
                    </div>
                    <div className="offcanvas-body">
                        {/* Routes */}
                        <ul className="navbar-nav align-items-center justify-content-end justify-content-xxl-center flex-grow-1">
                            <li className="nav-item">
                                <Link
                                    className={`nav-link text-white text-uppercase mx-2 px-1 mb-2 mb-lg-0 ${isActiveLink("/")}`}
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link text-white text-uppercase mx-2 px-1 mb-2 mb-lg-0 ${isActiveLink("/snd-site/gallery")}`}
                                    to="/snd-site/gallery"
                                >
                                    Gallery
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link text-white text-uppercase mx-2 px-1 mb-2 mb-lg-0 ${isActiveLink("/snd-site/services")}`}
                                    to="/snd-site/services"
                                >
                                    Our Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link text-white text-uppercase mx-2 px-1 mb-2 mb-lg-0 ${isActiveLink("/snd-site/about")}`}
                                    to="/snd-site/about"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link text-white text-uppercase mx-2 px-1 mb-2 mb-lg-0 ${isActiveLink("/snd-site/academy")}`}
                                    to="/snd-site/academy"
                                >
                                    Academy
                                </Link>
                            </li>
                            {/* Socials */}
                            <div className="d-flex mt-lg-0 align-items-center justify-content-center offcanvas-body social-div">
                                <ul className="d-flex flex-row gap-2 list-unstyled mb-0 social-ul">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link d-flex align-items-center p-0 m-0"
                                            href="tel:+17045611927"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <iconify-icon
                                                icon="ic:baseline-call"
                                                className="social-icon text-white"
                                            />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link d-flex align-items-center m-0 p-0"
                                            href="https://www.tiktok.com/@supremenomads704"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <iconify-icon
                                                icon="ri:tiktok-fill"
                                                className="social-icon text-white"
                                            />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link d-flex align-items-center p-0 m-0"
                                            href="https://www.instagram.com/supremenomads"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <iconify-icon
                                                icon="ri:instagram-line"
                                                className="social-icon text-white"
                                            />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link d-flex align-items-center p-0 m-0"
                                            href="https://www.facebook.com/Supremenomads/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={openFacebook}
                                        >
                                            <iconify-icon
                                                icon="ri:facebook-fill"
                                                className="social-icon text-white"
                                            />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link d-flex align-items-center p-0 m-0"
                                            href="https://www.yelp.com/biz/supreme-nomads-detailing-charlotte"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <iconify-icon
                                                icon="mdi:yelp"
                                                className="social-icon text-white"
                                            />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link d-flex align-items-center p-0 m-0"
                                            href="https://www.youtube.com/@SupremeNomads"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <iconify-icon
                                                icon="ri:youtube-fill"
                                                className="social-icon text-white"
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* Book Now */}
                            <div className="book-now-div">
                                <Link
                                    to="/bookings"
                                    className="btn btn-primary book-now-btn w-100 w-xl-auto ms-0 ms-xl-3"
                                >
                                    Book Now
                                </Link>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    )
}