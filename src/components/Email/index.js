import styles from './index.module.scss';
import { ReactComponent as StatusIndicatorSvg } from '@icons/status-indicator.svg';
import { ReactComponent as CalendarSvg } from '@icons/calendar.svg';
import { ReactComponent as AttachmentSvg } from '@icons/attachment.svg';
import { ReactComponent as PresentationSvg } from '@icons/presentation.svg';
import EmailSelectedSvg from '@icons/email-selected.svg';
import moment from 'moment';
import Toolbar from '../Toolbar';
import Tag from '../Tag';
import {
  inboxMenuItems,
  todayMenuItems,
  SVG_DEFAULT_COLOR,
  SVG_BLUE_COLOR,
} from '../../data/constants';
import { useState } from 'react';
import clsx from 'clsx';

const Email = ({ data, selected, onClick }) => {
  const {
    subject,
    image,
    from,
    content,
    time,
    hasCalendar,
    attachment,
    count,
    updatedCount,
    presentation,
    dueDate,
    priority,
    hasNotification,
    projectTags,
    sprint,
  } = data;
  const timeStr = moment(time).format('hh:mm A');
  const dueDateStr = moment(dueDate).format('ddd MMM DD');
  const isDueToday = dueDateStr === moment().format('ddd MMM DD');
  const [showToolbar, setToolbarVisible] = useState(false);

  const getToolbarMenuItems = () => {
    //TODO: condition needs update
    if (isDueToday) {
      return inboxMenuItems;
    }
    return todayMenuItems;
  };

  return (
    <div className={styles.itemWrapper}>
      <div
        className={clsx(
          { [styles.selected]: selected },
          styles.emailContentWrapper
        )}
        onMouseOver={() => setToolbarVisible(true)}
        onMouseLeave={() => setToolbarVisible(false)}
      >
        <div className={styles.avatarWrapper} onClick={onClick}>
          {selected && (
            <img
              src={EmailSelectedSvg}
              alt="No Avatar"
              className={styles.avatarImg}
            />
          )}
          {!selected && (
            <img src={image} alt="No Avatar" className={styles.avatarImg} />
          )}
        </div>

        <div className={styles.emailContent}>
          <div>
            <StatusIndicatorSvg color={SVG_DEFAULT_COLOR} />
            <p>{subject}</p>
          </div>
          <div>
            <label className={styles.from}>
              {updatedCount && `[Bundle]`}
              {from}
            </label>
            {updatedCount && (
              <span className={styles.updates}>{updatedCount} Updates</span>
            )}
            <div className={styles.content}>
              <span>{content}</span>
            </div>
            <div
              style={{ visibility: `${showToolbar ? 'visible' : 'hidden'}` }}
            >
              <Toolbar
                data={getToolbarMenuItems()}
                isVisible={showToolbar}
              ></Toolbar>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.topStamps}>
            <span>{timeStr}</span>
            {hasCalendar && (
              <a href="/calendar">
                <CalendarSvg color={SVG_BLUE_COLOR} />
              </a>
            )}
            {attachment && <AttachmentSvg color={SVG_BLUE_COLOR} />}
            {presentation && <PresentationSvg color={SVG_BLUE_COLOR} />}
          </div>
          <div className={styles.presence}>{count && <span>{count}</span>}</div>
        </div>
      </div>
      {(dueDate || priority || hasNotification || projectTags || sprint) && (
        <div className={styles.tagsWrapper}>
          <div>
            {dueDate && (
              <Tag
                color={isDueToday ? 'today' : 'high'}
                title={isDueToday ? 'Today' : dueDateStr}
              />
            )}
            {priority && (
              <Tag color={priority.toLowerCase()} title={priority} />
            )}
          </div>
          <div>
            {projectTags && <Tag color="general" title={projectTags} />}
            {sprint && <Tag color="general" title={sprint} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Email;
