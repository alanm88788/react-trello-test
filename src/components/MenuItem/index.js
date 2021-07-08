import React from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';

const MenuItem = ({ icon: Icon, label, selected, children, ...props }) => {
  return (
    <div
      className={clsx(styles.menuItem, selected && styles.selected)}
      {...props}
    >
      {Icon &&
        (typeof Icon === 'string' ? <img src={Icon} alt="" /> : <Icon />)}
      <span>{label}</span>
      {children}
    </div>
  );
};

export default MenuItem;
