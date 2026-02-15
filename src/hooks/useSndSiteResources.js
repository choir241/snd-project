import { useEffect } from 'react';

const useSndSiteResources = () => {
  useEffect(() => {
    // CSS resources to load
    const cssResources = [
      {
        id: 'swiper-css',
        href: 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css',
        rel: 'stylesheet'
      },
      {
        id: 'bootstrap-css',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css',
        rel: 'stylesheet',
        integrity: 'sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ',
        crossOrigin: 'anonymous'
      },
      {
        id: 'bootstrap-datepicker-css',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css',
        rel: 'stylesheet'
      },
      {
        id: 'google-fonts',
        href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,400;6..12,600;6..12,700&family=Oswald:wght@500;600;700&display=swap',
        rel: 'stylesheet'
      }
    ];

    // JS resources to load
    const jsResources = [
      {
        id: 'jquery-js',
        src: 'https://code.jquery.com/jquery-3.6.0.min.js'
      },
      {
        id: 'bootstrap-js',
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js',
        integrity: 'sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe',
        crossOrigin: 'anonymous'
      },
      {
        id: 'swiper-js',
        src: 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js'
      },
      {
        id: 'iconify-js',
        src: 'https://cdn.jsdelivr.net/npm/iconify-icon@1.0.7/dist/iconify-icon.min.js'
      }
    ];

    // Function to load CSS
    const loadCSS = (resource) => {
      return new Promise((resolve, reject) => {
        // Check if already loaded
        if (document.getElementById(resource.id)) {
          resolve();
          return;
        }

        const link = document.createElement('link');
        link.id = resource.id;
        link.href = resource.href;
        link.rel = resource.rel;
        
        if (resource.integrity) {
          link.integrity = resource.integrity;
        }
        if (resource.crossOrigin) {
          link.crossOrigin = resource.crossOrigin;
        }

        link.onload = () => resolve();
        link.onerror = () => reject(new Error(`Failed to load CSS: ${resource.href}`));
        
        document.head.appendChild(link);
      });
    };

    // Function to load JS
    const loadJS = (resource) => {
      return new Promise((resolve, reject) => {
        // Check if already loaded
        if (document.getElementById(resource.id)) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.id = resource.id;
        script.src = resource.src;
        
        if (resource.integrity) {
          script.integrity = resource.integrity;
        }
        if (resource.crossOrigin) {
          script.crossOrigin = resource.crossOrigin;
        }

        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load JS: ${resource.src}`));
        
        document.body.appendChild(script);
      });
    };

    // Load all resources
    const loadResources = async () => {
      try {
        // Load CSS first
        for (const css of cssResources) {
          await loadCSS(css);
        }
        
        // Then load JS
        for (const js of jsResources) {
          await loadJS(js);
        }
        
        console.log('All snd-site resources loaded successfully');
      } catch (error) {
        console.error('Error loading snd-site resources:', error);
      }
    };

    loadResources();

    // Cleanup function to remove resources when component unmounts
    return () => {
      // Optional: Remove resources when leaving snd-site pages
      // This is commented out to keep resources cached for better UX
      /*
      const resourceIds = [
        ...cssResources.map(css => css.id),
        ...jsResources.map(js => js.id)
      ];
      
      resourceIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          element.remove();
        }
      });
      */
    };
  }, []); // Empty dependency array means this runs once on mount
};

export default useSndSiteResources;
