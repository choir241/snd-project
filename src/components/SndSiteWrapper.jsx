import React, { useEffect } from 'react';
import useSndSiteResources from '../hooks/useSndSiteResources';
import '../styles/snd-site/snd-site.css';
import '../styles/snd-site/vendor.css';

const SndSiteWrapper = ({ children }) => {
  useSndSiteResources();

  useEffect(() => {
    // Set page title
    document.title = 'Supreme Nomads Detailing - Charlotte - Mobile Auto Detailing';
    
    // Set favicon
    const favicon = document.querySelector('link[rel="icon"]') || document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/png';
    favicon.href = '/favicon.png';
    if (!document.querySelector('link[rel="icon"]')) {
      document.head.appendChild(favicon);
    }

    // Set body attributes that are in the original HTML
    document.body.setAttribute('data-bs-spy', 'scroll');
    document.body.setAttribute('data-bs-target', '#header-nav');
    document.body.setAttribute('tabindex', '0');

    // Cleanup function to remove attributes when component unmounts
    return () => {
      document.body.removeAttribute('data-bs-spy');
      document.body.removeAttribute('data-bs-target');
      document.body.removeAttribute('tabindex');
    };
  }, []);

  return (
    <div className="snd-site">
      {children}
    </div>
  );
};

export default SndSiteWrapper;
