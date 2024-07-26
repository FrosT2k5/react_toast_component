import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';
import useEscapeKey from '../../hooks/use-escape-key/useEscapeKey';

function ToastShelf() {
  console.log("ToastShelf rerender")
  const { removeToast, removeAllToasts } = React.useContext(ToastContext);

  const { toastStack } = React.useContext(ToastContext);
  useEscapeKey( removeAllToasts );

  return (
    <ol className={styles.wrapper} role="region" aria-live="polite" aria-label="Notification">
      {toastStack.map( (currentToast, index) => (
         <li className={styles.toastWrapper} key={index}>
          <Toast message={currentToast.message} option={currentToast.option} handleDismiss={() => removeToast(currentToast.id)}>
          </Toast>
        </li>)
      )}
    </ol>
  );
}

export default React.memo(ToastShelf);
