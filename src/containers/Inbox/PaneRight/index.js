import { useState } from 'react';
import cx from 'clsx';
import moment from 'moment';
import styles from './index.module.scss';
import { ReactComponent as StatusIndicatorSvg } from '@icons/status-indicator.svg';
import { ReactComponent as ContrastSvg } from '@icons/contrast.svg';
import { ReactComponent as MagicSvg } from '@icons/magic.svg';
import Accordion from '@components/Accordion';
import Email from '@components/Email';
import FilterDropdown from '@components/FilterDropdown';
import SortDropdown from '@components/SortDropdown';
import ShowMoreDropdown from '@components/ShowMoreDropdown';
import { dueTodayEmails, overdueEmails } from '@data/mockData';
import { SVG_DEFAULT_COLOR } from '@data/constants';

const PaneRight = () => {
  const [count] = useState(7);
  const [view, setView] = useState('inbox');

  const todayStr = moment().format('ddd MMM DD');

  return (
    <div className={styles.paneWrapper}>
      <div className={styles.paneHeader}>
        <div>
          <h4
            className={cx({ [styles.active]: view === 'inbox' })}
            onClick={() => setView('inbox')}
          >
            Today.
          </h4>
          <label>{count}</label>
          <h4
            className={cx({ [styles.active]: view === 'updates' })}
            onClick={() => setView('updates')}
          >
            Later.
          </h4>
          <StatusIndicatorSvg color={SVG_DEFAULT_COLOR} />
        </div>
        <div>
          <ContrastSvg
            className={styles.contrastIcon}
            color={SVG_DEFAULT_COLOR}
          />
          <div className={styles.magicWrapper}>
            <MagicSvg color="#4C95EB" />
            <span>2</span>
          </div>
          <FilterDropdown />
          <SortDropdown panel="right" />
          <ShowMoreDropdown />
        </div>
      </div>
      <div>
        <Accordion title={'Overdue.'} maxHeight={500}>
          {overdueEmails.map((item, index) => (
            <Email data={item} key={index} />
          ))}
        </Accordion>
        <Accordion title={todayStr} maxHeight={500}>
          {dueTodayEmails.map((item, index) => (
            <Email data={item} key={index} />
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default PaneRight;
