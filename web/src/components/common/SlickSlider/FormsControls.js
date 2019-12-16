import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormsControls.module.css';

export const DentArtInput = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
      <div>
        <input {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

DentArtInput.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
};
