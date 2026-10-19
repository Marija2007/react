import React, { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const PasswordInput = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div id='password-section'>
      <h2>3. Lozinka so Mouse Up/Down</h2>
      
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '300px' }}>
        <input 
          type={showPassword ? "text" : "password"} 
          placeholder="Vnesi lozinka"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '8px', paddingRight: '35px' }}
        />
        <span 
          style={{ position: 'absolute', right: '10px', cursor: 'pointer', userSelect: 'none' }}
          onMouseDown={() => setShowPassword(true)}
          onMouseUp={() => setShowPassword(false)}
          onMouseLeave={() => setShowPassword(false)} 
        >
          {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
        </span>
      </div>
    </div>
  );
};