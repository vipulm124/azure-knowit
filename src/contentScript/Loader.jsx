import React, { useState, useEffect } from 'react';
import './content.css'

// Loader component
const Loader = () => (
  <div id="loader" className='loader'></div>
);

const styles = {
  loader: {
    
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #3498db',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 2s linear infinite',
  },
};

export default Loader;
