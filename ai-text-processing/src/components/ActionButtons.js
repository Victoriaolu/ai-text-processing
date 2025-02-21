import React from 'react';

const ActionButtons = ({ onSummarize, onTranslate }) => {
  return (
    <div>
      <button onClick={onSummarize}>Summarize</button>
      <select onChange={onTranslate}>
        <option value="en">English</option>
        <option value="pt">Portuguese</option>
        <option value="es">Spanish</option>
        <option value="ru">Russian</option>
        <option value="tr">Turkish</option>
        <option value="fr">French</option>
      </select>
      <button>Translate</button>
    </div>
  );
};

export default ActionButtons;