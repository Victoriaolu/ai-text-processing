import React from 'react';

const InputField = ({ value, onChange, onSend }) => {
  return (
    <div>
      <textarea 
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
        rows="5" 
        placeholder="Type your text here..."
        aria-label="Input text area"
      />
      <button onClick={onSend} aria-label="Send">
        <span role="img" aria-label="send">📤</span>
      </button>
    </div>
  );
};

export default InputField;