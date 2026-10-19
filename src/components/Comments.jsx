import React, { useState, useEffect } from 'react';
import { FaCommentDots } from 'react-icons/fa';

export const Comments = () => {
  const [singleLine, setSingleLine] = useState("");
  const [multiLine, setMultiLine] = useState("");
  const [showTextarea, setShowTextarea] = useState(false);

  return (
    <div id='comments-section'>
      <h2>2. Comments</h2>
      
      <input 
        type="text" 
        placeholder="Napisi komentar..." 
        value={singleLine}
        onChange={(e) => setSingleLine(e.target.value)}
      />
      
      <button 
        onClick={() => setShowTextarea(!showTextarea)}
      >
        <FaCommentDots /> 
        {showTextarea ? "Zatvori go komentarot" : "Otvori go komentarot"}
      </button>

      {showTextarea && (
        <div style={{ marginTop: '10px' }}>
          <textarea 
            placeholder="Napisi podolg komentar..." 
            value={multiLine}
            onChange={(e) => setMultiLine(e.target.value)}
            rows={4}
            style={{ width: '300px', padding: '8px' }}
          />
        </div>
      )}
    </div>
  );
};