import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toastStack, setToastStack] = React.useState([]);

  const removeToast = React.useCallback( (toastId) => {
    let currentToastStack = [...toastStack];
    const removeToastIndex = currentToastStack.findIndex( (element) => element.id === toastId);
    currentToastStack.splice(removeToastIndex, 1);
    setToastStack(currentToastStack); 
  }, [toastStack])

  const removeAllToasts = React.useCallback( () => setToastStack([]) );

  const addToast = React.useCallback( (message, option) => {
    
    const id = crypto.randomUUID();
    let currentToastStack = [...toastStack];
    console.log(currentToastStack);
    currentToastStack.push(
      {
        message, 
        option,
        id
      }
    );
    setToastStack(currentToastStack);
    console.log(currentToastStack);
  }, [toastStack])

  const value = React.useMemo( () => { 
    return {toastStack , addToast, removeToast, removeAllToasts}; 
  }, [toastStack]);

  return <ToastContext.Provider value={ value }>
    {children}
  </ToastContext.Provider>
}

export default ToastProvider;
