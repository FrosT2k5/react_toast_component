import React from 'react';

function useEscapeKey( callbackFunction ) {

  React.useEffect(() => {
    function handleEscape(event) {
      if (event.code == "Escape") {
        callbackFunction();
      }
    };
    
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    }
  })
  
  return null;
}

export default useEscapeKey;
