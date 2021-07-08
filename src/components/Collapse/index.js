import React, { useRef, useState, useEffect } from 'react';
import styles from './index.module.scss';

const Collapse = ({ expanded, children }) => {
  const contentRef = useRef();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(contentRef.current ? contentRef.current.clientHeight : 0);
  }, [expanded]);

  return (
    <div
      className={styles.collapse}
      style={{ height: `${expanded ? height : 0}px` }}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  );
};

export default Collapse;
