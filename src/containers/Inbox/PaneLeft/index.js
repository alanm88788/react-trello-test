import { useState } from 'react';
import cx from 'clsx';
import Accordion from '@components/Accordion';
import Email from '@components/Email';
import FilterDropdown from '@components/FilterDropdown';
import SortDropdown from '@components/SortDropdown';
import ShowMoreDropdown from '@components/ShowMoreDropdown';
import EmailActionBar from '@components/EmailActionBar';
import { ReactComponent as StatusIndicatorSvg } from '@icons/status-indicator.svg';
import { ReactComponent as RefreshSvg } from '@icons/refresh.svg';
import { newEmails, seenEmails } from '@data/mockData';
import { SVG_DEFAULT_COLOR } from '@data/constants';
import styles from './index.module.scss';

const PaneLeft = () => {
  const [count] = useState(7);
  const [view, setView] = useState('inbox');
  const [selectedEmails, setSelectedEmails] = useState([]);

  const selectEmail = (id) => () => {
    if (selectedEmails.includes(id)) {
      setSelectedEmails(selectedEmails.filter((email) => email !== id));
    } else {
      setSelectedEmails([...selectedEmails, id]);
    }
  };

  const selectAll = () => {
    const newEmailIds = newEmails.map((email) => email.id);
    const seenEmailIds = seenEmails.map((email) => email.id);
    setSelectedEmails([...newEmailIds, ...seenEmailIds]);
  };

  const clearSelected = () => {
    setSelectedEmails([]);
  };

  const handleActions = (action) => {
    switch (action) {
      case 'SELECT_ALL':
        selectAll();
        break;
      case 'CLEAR':
        clearSelected();
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.paneWrapper}>
      <div className={styles.paneHeader}>
        <div>
          <h4
            className={cx({ [styles.active]: view === 'inbox' })}
            onClick={() => setView('inbox')}
          >
            Inbox.
          </h4>
          <label>{count}</label>
          <h4
            className={cx({ [styles.active]: view === 'updates' })}
            onClick={() => setView('updates')}
          >
            Updates.
          </h4>
          <StatusIndicatorSvg color={SVG_DEFAULT_COLOR} />
        </div>
        <div>
          <RefreshSvg color={SVG_DEFAULT_COLOR} />
          <FilterDropdown />
          <SortDropdown panel="left" />
          <ShowMoreDropdown />
        </div>
      </div>
      <div>
        <Accordion title={'New.'} maxHeight={500}>
          {newEmails.map((item, index) => (
            <Email
              data={item}
              key={index}
              onClick={selectEmail(item.id)}
              selected={selectedEmails.includes(item.id)}
            />
          ))}
        </Accordion>
        <Accordion title={'Seen.'} maxHeight={500}>
          {seenEmails.map((item, index) => (
            <Email
              data={item}
              key={index}
              onClick={selectEmail(item.id)}
              selected={selectedEmails.includes(item.id)}
            />
          ))}
        </Accordion>
      </div>
      {!!selectedEmails && selectedEmails.length > 1 && (
        <EmailActionBar
          count={selectedEmails.length}
          onAction={handleActions}
        />
      )}
    </div>
  );
};

export default PaneLeft;
