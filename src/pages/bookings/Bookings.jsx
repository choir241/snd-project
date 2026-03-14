import CollapsedPackageList from "../../components/CollapsedPackage/CollapsedPackageList";
import Cart from "../../components/Cart/Cart";
import "./Booking.css";
import Footer from "../../components/Footer";
import CartButtonsSection from "../../components/Cart/CartButtonsSection";
import { useEffect } from "react";

export default function Bookings() {

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
    <div id="bookings">
            {/* Hero */}
      <section className="hero-section hero-about">
        <div className="hero-overlay"></div>
        <div className="container py-5 hero-content">
          <div className="row py-5">
            <div className="d-flex flex-wrap flex-column justify-content-center align-items-center my-5 py-5 text-white">
              <h2 className="page-title display-3 mt-5 text-white">Bookings</h2>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white" id="root">
        <div className="mb-0 flex w-screen max-h-screen-svh min-h-screen-svh h-full overflow-hidden relative">
          <div className="flex flex-col flex-grow overflow-y-auto">

            <div className="flex justify-center flex-grow w-full max-w-lg mx-auto">
              {/* Package list */}
              <CollapsedPackageList />

              <aside className="transition-opacity delay-150 duration-500 ease-in-out opacity-100 hidden md-lg:block md-lg:px-4 max-w-cart-sidebar min-w-cart-sidebar ">
                <div className="sticky top-2">
                  {/* Service Cart */}
                  <Cart />

                  <CartButtonsSection />
                </div>
              </aside>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
