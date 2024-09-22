import React, { useState, useEffect } from 'react';

const TypingEff = ({ text , speed}) => {
  const [displayedText, setDisplayedText] = useState(''); 

  useEffect(() => {
    let i = 0;

    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text , speed]);

  return (
    <h1 className='gt'>{displayedText}</h1>
  );
};

export default TypingEff;
