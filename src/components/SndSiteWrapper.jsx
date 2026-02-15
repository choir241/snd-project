import React from 'react';
import useSndSiteResources from '../hooks/useSndSiteResources';
import '../styles/snd-site/snd-site.css';
import '../styles/snd-site/vendor.css';

const SndSiteWrapper = ({ children }) => {
  useSndSiteResources();

  return (
    <div className="snd-site">
      {children}
    </div>
  );
};

export default SndSiteWrapper;
