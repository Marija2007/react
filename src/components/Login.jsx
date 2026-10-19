import React, {useState, useEffect} from "react";
import { DropdownWrapper } from '../components/DropdownWrapper';

const elements = [
  { value: "Facebook", name: "Facebook" },
  { value: "Instagram", name: "Instagram" },
  { value: "SnapChat", name: "Snap Chat" }
];

export const Login = () => {
  const [selected, setSelected] = useState("Facebook");

  return (
    <div id='login-section'>
      <h2>1. Login Dropdown</h2>
      <label>Izberi socijalna mreza: </label>
      <DropdownWrapper 
        options={elements} 
        value={selected} 
        onChange={(e) => setSelected(e.target.value)} 
      />
      <p>Избрано: <strong>{selected}</strong></p>
    </div>
  );
};