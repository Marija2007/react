import React from 'react';

export const DropdownWrapper = ({ options, value, onChange, className }) => {
  return (
    <select value={value} onChange={onChange} className={className}>
      {options.map((option, i) => {
        return (
          <option key={i} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};