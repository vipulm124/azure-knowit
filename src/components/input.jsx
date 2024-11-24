import React from 'react';

function CustomInput({ placeholderText, className, onChange }) {  // Use 'className' instead
  const handleChange = (event) =>{
    onChange(event.target.value)
  }
  return (
    <div>
      <input placeholder={placeholderText} className={className} onChange={handleChange} />
    </div>
  );
}

export { CustomInput };
