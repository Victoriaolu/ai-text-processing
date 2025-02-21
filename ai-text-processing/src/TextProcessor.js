import React, { useState } from 'react';
import InputField from './components/InputField';
import OutputArea from './components/OutputArea';
import ActionButtons from './components/ActionButtons';
import axios from 'axios';

const TextProcessor = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [language, setLanguage] = useState('');
  const [languageDetected, setLanguageDetected] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (value) => {
    setInputText(value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleSend = async () => {
    if (inputText.trim() === "") {
      setError("Input cannot be empty.");
      return;
    }
    
    setError('');
    setLoading(true);

    // Demo: Replace these with the actual AI APIs to handle language detection, summarization, and translation
    try {
      const langResponse = await axios.post('/api/language-detection', { text: inputText });
      setLanguageDetected(langResponse.data.language);

      setOutputText(inputText); // Render the input text as output
    } catch (error) {
      setError("Error detecting language.");
    }

    setLoading(false);
  };

  const handleSummarize = async () => {
    // Call the Summarizer API here
  };

  const handleTranslate = async () => {
    // Call the Translator API here
  };

  return (
    <div>
      <InputField value={inputText} onChange={handleInputChange} onSend={handleSend} />
      <OutputArea text={outputText} languageDetected={languageDetected} error={error} />
      <ActionButtons onSummarize={handleSummarize} onTranslate={handleTranslate} />
    </div>
  );
};

export default TextProcessor;