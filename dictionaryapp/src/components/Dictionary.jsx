import React, { useState } from 'react';
import axios from 'axios';

const Dictionary = () => {
  const [word, setWord] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const fetchDefinition = async () => {
    if (!word.trim()) return;
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setResult(response.data[0]);
      setError('');
    } catch (err) {
      setResult(null);
      setError('No definition found.');
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Search for a Word</h3>
      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a word..."
          value={word}
          onChange={(e) => setWord(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && fetchDefinition()}
        />
        <button className="btn btn-primary" onClick={fetchDefinition}>
          Search
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result && (
        <div className="card shadow-sm">
          <div className="card-body">
            <h4 className="card-title">{result.word}</h4>
            {result.phonetics[0]?.text && (
              <p className="text-muted">Phonetics: {result.phonetics[0].text}</p>
            )}
            {result.meanings.map((meaning, idx) => (
              <div key={idx} className="mb-3">
                <h6>{meaning.partOfSpeech}</h6>
                <ul>
                  {meaning.definitions.map((def, i) => (
                    <li key={i}>{def.definition}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dictionary;
