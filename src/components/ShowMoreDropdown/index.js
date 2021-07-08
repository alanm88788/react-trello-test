import React, { useRef, useState } from 'react';
import { MenuItem, MenuHeader, ControlledMenu } from '@szhsin/react-menu';
import styles from './index.module.scss';
import { ReactComponent as EnvelopedEmailSvg } from '@icons/enveloped-email.svg';
import { ReactComponent as CalendarSvg } from '@icons/calendar.svg';
import { ReactComponent as DocumentSvg } from '@icons/file.svg';
import { ReactComponent as PresentationSvg } from '@icons/presentation.svg';
import { ReactComponent as SpreadsheetSvg } from '@icons/spreadsheet.svg';
import { ReactComponent as MoreSvg } from '@icons/more.svg';

const SHOW_MORE_ITEMS = [
  {
    id: 1,
    icon: EnvelopedEmailSvg,
    title: 'Email',
  },
  {
    id: 2,
    icon: CalendarSvg,
    title: 'Calendar',
  },
  {
    id: 3,
    icon: DocumentSvg,
    title: 'Document',
  },
  {
    id: 4,
    icon: PresentationSvg,
    title: 'Presentation',
  },
  {
    id: 5,
    icon: SpreadsheetSvg,
    title: 'Spreadsheet',
  },
];

const ShowMoreDropdown = ({ panel }) => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const showMoreItems = SHOW_MORE_ITEMS;

  return (
    <>
      <MoreSvg
        className={styles.menuButton}
        ref={ref}
        onClick={() => setOpen(true)}
      />
      <ControlledMenu
        arrow={true}
        anchorRef={ref}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        className={styles.menuWrapper}
      >
        <MenuHeader className={styles.menuHeader}>SORT</MenuHeader>
        {showMoreItems.map((item, index) => (
          <MenuItem key={index} keepOpen className={styles.menuItem}>
            <div className={styles.left}>
              <item.icon />
              <span className={styles.menuText}>{item.title}</span>
            </div>
            <div className={styles.left}>+ {index}</div>
          </MenuItem>
        ))}
      </ControlledMenu>
    </>
  );
};

export default ShowMoreDropdown;
