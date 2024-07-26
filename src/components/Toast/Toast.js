import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};


function Toast({message, option, handleDismiss}) {
  const style_class = styles[option]
  const ToastIcon = ICONS_BY_VARIANT[option]

  console.log("Toast Rerender")
  return (
    <div className={`${styles.toast} ${style_class}`}>
      <div className={styles.iconContainer}>
        <ToastIcon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{option}</VisuallyHidden>
        {message}
      </p>
      <button className={styles.closeButton} onClick={handleDismiss} aria-label='Dismiss message' aria-live="off">
        <X size={24} />
      </button>
    </div>
  );
}

export default React.memo(Toast);
