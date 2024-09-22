import React, { useState } from 'react';
import './footer.css'
import git from './footer_image/github.png';
import gitHover from './footer_image/hovergithub.png';
import insta from './footer_image/instagram.png';
import instaHover from './footer_image/hoverinstagram.png';
import linke from './footer_image/linkedin.png';
import linkeHover from './footer_image/hoverlinkedin.png';

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <footer 
      className="bg-gray-900 text-white text-center py-4"
      style={{ width: '100%', bottom: 0 }}
    >
      <div className="flex justify-center items-center space-x-6 mb-3">
        <a 
          href="https://github.com/Thirumalai-Tech-Developer" 
          target="_blank" 
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredIcon('github')}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <img 
            src={hoveredIcon === 'github' ? gitHover : git} 
            alt="GitHub" 
            className="h-8 w-8 hover:scale-110 transition-transform duration-200" 
          />
        </a>

        <a 
          href="https://www.instagram.com/gt__king__0007" 
          target="_blank" 
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredIcon('instagram')}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <img 
            src={hoveredIcon === 'instagram' ? instaHover : insta} 
            alt="Instagram" 
            className="h-8 w-8 hover:scale-110 transition-transform duration-200" 
          />
        </a>
        <a 
          href="https://www.linkedin.com/in/thirumalai-g007" 
          target="_blank" 
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredIcon('linkedin')}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <img 
            src={hoveredIcon === 'linkedin' ? linkeHover : linke} 
            alt="LinkedIn" 
            className="h-8 w-8 hover:scale-110 transition-transform duration-200" 
          />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Thirumalai G. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
