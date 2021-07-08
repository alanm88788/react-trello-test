import React from 'react';
import styles from './index.module.scss';

const ToggleSwitch = ({ id, name, checked, onChange }) => {
  function handleKeyPress(e) {
    if (e.keyCode !== 32) return;

    e.preventDefault();
    onChange(!checked);
  }

  return (
    <div className={styles.toggleSwitch}>
      <input
        type="checkbox"
        name={name}
        className={styles.toggleSwitchCheckbox}
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {id ? (
        <label
          className={styles.toggleSwitchLabel}
          tabIndex={1}
          onKeyDown={(e) => handleKeyPress(e)}
          htmlFor={id}
        >
          <span className={styles.toggleSwitchInner} tabIndex={-1} />
          <span className={styles.toggleSwitchSwitch} tabIndex={-1} />
        </label>
      ) : null}
    </div>
  );
};

export default ToggleSwitch;
