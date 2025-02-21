import React from 'react';

const OutputArea = ({ text, languageDetected, error }) => {
  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>{text}</p>
      <p>Detected Language: {languageDetected}</p>
    </div>
  );
};

export default OutputArea;