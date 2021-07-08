import React, { useRef, useState } from 'react';
import {
  MenuItem,
  SubMenu,
  MenuHeader,
  ControlledMenu,
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import styles from './index.module.scss';
import { ReactComponent as CheckedSvg } from '@icons/checked.svg';
import { ReactComponent as UncheckedSvg } from '@icons/unchecked.svg';

const FILTER_CONTENT_TYPES = [
  {
    title: 'All',
    checked: true,
  },
  {
    title: 'Email',
    checked: false,
  },
  {
    title: 'Meeting Invite',
    checked: false,
  },
  {
    title: 'Document',
    checked: false,
  },
  {
    title: 'Presentation',
    checked: false,
  },
  {
    title: 'Spreadsheet',
    checked: false,
  },
];

const FILTER_TIME = [
  {
    title: 'Yesterday',
    checked: false,
  },
  {
    title: 'Last Week',
    checked: false,
  },
];

const FILTER_SENDER = [
  {
    title: 'Amber Jervis',
    checked: false,
  },
  {
    title: 'Danielle Pulleyn',
    checked: false,
  },
];

const FilterDropdown = () => {
  const [contentTypes, setContentTypes] = useState(FILTER_CONTENT_TYPES);
  const [filterTimes, setFilterTimes] = useState(FILTER_TIME);
  const [filterSenders, setFilterSenders] = useState(FILTER_SENDER);
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  const setContentType = (index, e) => {
    e.keepOpen = true;
    setContentTypes(
      contentTypes.map((item, i) =>
        i === index
          ? {
              ...item,
              checked: !item.checked,
            }
          : item
      )
    );
  };

  const setFilterTime = (index, e) => {
    e.keepOpen = true;
    setFilterTimes(
      filterTimes.map((item, i) =>
        i === index
          ? {
              ...item,
              checked: !item.checked,
            }
          : item
      )
    );
  };

  const setFilterSender = (index, e) => {
    e.keepOpen = true;
    setFilterSenders(
      filterSenders.map((item, i) =>
        i === index
          ? {
              ...item,
              checked: !item.checked,
            }
          : item
      )
    );
  };

  return (
    <>
      <span
        className={styles.menuButton}
        ref={ref}
        onClick={() => setOpen(true)}
      >
        Filter
      </span>
      <ControlledMenu
        arrow={true}
        anchorRef={ref}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        className={styles.menuWrapper}
      >
        <MenuHeader className={styles.menuHeader}>CONTENT TYPE</MenuHeader>
        {contentTypes.map((contentType, index) => (
          <MenuItem
            key={index}
            keepOpen
            onClick={(e) => setContentType(index, e)}
            className={styles.menuItem}
          >
            <span className={styles.menuText}>{contentType.title}</span>
            {contentType.checked ? <CheckedSvg /> : <UncheckedSvg />}
          </MenuItem>
        ))}

        <MenuHeader className={styles.menuHeader}>Time</MenuHeader>
        {filterTimes.map((time, index) => (
          <MenuItem
            key={index}
            keepOpen
            onClick={(e) => setFilterTime(index, e)}
            className={styles.menuItem}
          >
            <span className={styles.menuText}>{time.title}</span>
            {time.checked ? <CheckedSvg /> : <UncheckedSvg />}
          </MenuItem>
        ))}
        <SubMenu label="Custom" className={styles.subMenuItem}>
          <MenuItem>Custom 1</MenuItem>
          <MenuItem>Custom 1</MenuItem>
          <MenuItem>Custom 1</MenuItem>
        </SubMenu>

        <MenuHeader className={styles.menuHeader}>Sender</MenuHeader>
        {filterSenders.map((sender, index) => (
          <MenuItem
            key={index}
            keepOpen
            onClick={(e) => setFilterSender(index, e)}
            className={styles.menuItem}
          >
            <span className={styles.menuText}>{sender.title}</span>
            {sender.checked ? <CheckedSvg /> : <UncheckedSvg />}
          </MenuItem>
        ))}
        <SubMenu label="More" className={styles.subMenuItem}>
          <MenuItem>Custom 1</MenuItem>
          <MenuItem>Custom 1</MenuItem>
          <MenuItem>Custom 1</MenuItem>
        </SubMenu>
      </ControlledMenu>
    </>
  );
};

export default FilterDropdown;
