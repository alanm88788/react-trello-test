import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';
import Collapse from '@components/Collapse';
import { ReactComponent as ArrowSvg } from '@icons/arrow-down.svg';

const Accordion = ({ title, maxHeight, children }) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <div
      className={styles.accordionWrapper}
      style={{ maxHeight: maxHeight ? `${maxHeight}px` : 'auto' }}
    >
      <div className={styles.header}>
        <label>{title}</label>
        <ArrowSvg
          onClick={() => setExpanded(!expanded)}
          className={clsx(
            { [styles.expandedIcon]: expanded },
            styles.arrowIcon
          )}
        />
      </div>
      <Collapse expanded={expanded}>{children}</Collapse>
    </div>
  );
};

export default Accordion;
