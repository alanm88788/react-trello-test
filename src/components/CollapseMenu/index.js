import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';
import MenuItem from '../MenuItem';
import Collapse from '@components/Collapse';
import { ReactComponent as ArrowSvg } from '@icons/arrow-down.svg';

const CollapseMenu = ({ icon, label, children }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={styles.collapseWrapper}>
      <MenuItem
        icon={icon}
        label={label}
        onClick={() => setExpanded(!expanded)}
      >
        <ArrowSvg
          className={clsx(
            { [styles.expandedIcon]: expanded },
            styles.arrowIcon
          )}
        />
      </MenuItem>
      <Collapse expanded={expanded}>{children}</Collapse>
    </div>
  );
};

export default CollapseMenu;
