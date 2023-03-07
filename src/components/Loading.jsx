import React from 'react';
import loading from '../loading.svg';

function Loading() {
  return (
    <div className="loading">
      <img 
        src={loading}
        width="100%"
        alt="Carregando..."
      />
    </div>
  )
}

export default Loading;