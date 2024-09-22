import React, { useEffect, useState, useRef } from 'react';
import Education from './Education';
import './Home.css';
import './float.css';
import details from '../details.json';
import TypingEff from '../typingEff'; 
import image1 from './images/CSS.png';
import image2 from './images/HTML-5-01.png';
import image3 from './images/Java-01.png';
import image4 from './images/JavaScript-01.png';
import image5 from './images/MySQL-01.png';
import image6 from './images/Node-JS-01.png';
import image7 from './images/Python-01.png';
import image8 from './images/React-01.png';
import image9 from './images/mangoDB.png';

const Intro = () => {
  const [imagePositions, setImagePositions] = useState([]);
  const [containerWidth, setContainerWidth] = useState(0); 
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const { offsetWidth, offsetHeight } = container;
    setContainerWidth(offsetWidth);

    const positions = [];
    const usedPositions = new Set();

    const imageWidth = offsetWidth > 600 ? 80 : 55;
    const imageHeight = imageWidth;

    while (positions.length < 9) {
      const top = Math.random() * (offsetHeight - imageHeight) + 'px';
      const left = Math.random() * (offsetWidth - imageWidth) + 'px';
      const positionKey = `${top}-${left}`;

      let overlap = false;
      for (let pos of positions) {
        const posTop = parseFloat(pos.top);
        const posLeft = parseFloat(pos.left);
        if (
          Math.abs(parseFloat(top) - posTop) < imageHeight &&
          Math.abs(parseFloat(left) - posLeft) < imageWidth
        ) {
          overlap = true;
          break;
        }
      }

      if (!overlap && !usedPositions.has(positionKey)) {
        positions.push({ top, left });
        usedPositions.add(positionKey);
      }
    }

    setImagePositions(positions);
  }, []);

  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

  return (
    <div className='p-5 m-4 h-auto'>
      <div 
        className='floating-images-container relative' 
        ref={containerRef} 
        style={{ 
          position: 'relative', 
          minHeight: '350px',
          height: 'auto',
          width: '100%', 
          maxWidth: '800px',
          margin: '0 auto',
          padding: '10px',
          overflow: 'hidden',
          borderRadius: '15px',
        }}
      >
        {images.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`floating-${index}`} 
            className='floating-image absolute'
            style={{ 
              top: imagePositions[index]?.top, 
              left: imagePositions[index]?.left, 
              width: containerWidth > 600 ? '80px' : '55px',
              height: containerWidth > 600 ? '80px' : '55px', 
              objectFit: 'contain',
              animation: `float ${index % 2 === 0 ? 5 : 7}s ease-in-out infinite`,
            }}
          />
        ))}
        
        <div
  className='absolute inset-0 z-10 flex items-center justify-center p-5 sm:p-10'
  style={{
    color: 'white',
    background: 'rgba(0, 0, 0, 0.4)',
    borderRadius: '12px',
    boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.2)',
  }}
>
  {details.map((detail) => (
    <div
      key={detail.key}
      className='p-5 rounded-3xl grid grid-cols-1'
      style={{
        zIndex: 10,
        color: 'white',
        padding: '10px', // Reduced padding for mobile
        backdropFilter: 'blur(1px)',
        borderRadius: '15px',
      }}
    >
      <div className='h-auto'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold' style={{ color: '#ff0b72' }}>
          <TypingEff text={detail.name} speed="100" />
        </h1>
      </div>
      <div>
        <p className='text-sm sm:text-lg md:text-xl mt-3 font-medium' style={{ color: '#f2c7ff' }}>
          <TypingEff text={detail.objective} speed="15" />
        </p>
      </div>
    </div>
  ))}
</div>

      </div>
      <h1 className='text-3xl mb-4 mt-14 text-[#04ff96]'>
        EDUCATIONS</h1>
      <Education />
    </div>
  );
};

export default Intro;
