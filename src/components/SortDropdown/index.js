import React, { useRef, useState } from 'react';
import { MenuItem, MenuHeader, ControlledMenu } from '@szhsin/react-menu';
import styles from './index.module.scss';
import { ReactComponent as CheckedSvg } from '@icons/sort-check.svg';

const SORT_CONTENT_LEFT = [
  {
    id: 1,
    title: 'Due Date',
  },
  {
    id: 2,
    title: 'Priority',
  },
  {
    id: 3,
    title: 'Alphabetically by Sender, A-Z',
  },
  {
    id: 4,
    title: 'Alphabetically by Sender, Z-A',
  },
  {
    id: 5,
    title: 'Scientifically',
  },
];

const SORT_CONTENT_RIGHT = [
  {
    id: 1,
    title: 'Latest',
  },
  {
    id: 2,
    title: 'Oldest',
  },
  {
    id: 3,
    title: 'Alphabetically by Sender, A-Z',
  },
  {
    id: 4,
    title: 'Alphabetically by Sender, Z-A',
  },
  {
    id: 5,
    title: 'Scientifically',
  },
];

const SortDropdown = ({ panel }) => {
  const [sortBy, setSortBy] = useState(1);
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const sortItems = panel === 'left' ? SORT_CONTENT_LEFT : SORT_CONTENT_RIGHT;

  return (
    <>
      <span
        className={styles.menuButton}
        ref={ref}
        onClick={() => setOpen(true)}
      >
        Sort
      </span>
      <ControlledMenu
        arrow={true}
        anchorRef={ref}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        className={styles.menuWrapper}
      >
        <MenuHeader className={styles.menuHeader}>SORT</MenuHeader>
        {sortItems.map((item, index) => (
          <MenuItem
            key={index}
            keepOpen
            onClick={(e) => setSortBy(item.id)}
            className={styles.menuItem}
          >
            <span className={styles.menuText}>{item.title}</span>
            {item.id === sortBy && <CheckedSvg />}
          </MenuItem>
        ))}
      </ControlledMenu>
    </>
  );
};

export default SortDropdown;
