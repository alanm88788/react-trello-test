import styles from './index.module.scss';
import { ReactComponent as StarSvg } from '@icons/star.svg';
import { ReactComponent as TimerSvg } from '@icons/timer.svg';
import { ReactComponent as TrashSvg } from '@icons/trash.svg';
import { ReactComponent as BookmarkSvg } from '@icons/bookmark.svg';
import { ReactComponent as EyeSvg } from '@icons/eye.svg';
import { ReactComponent as ChainSvg } from '@icons/chain.svg';
import { ReactComponent as FolderSvg } from '@icons/folder.svg';
import { ReactComponent as MoreSvg } from '@icons/more.svg';

const EmailActionBar = ({ count, onAction }) => {
  return (
    <div className={styles.notificationContent}>
      <span className={styles.selected}>{count} selected.</span>
      <StarSvg />
      <TimerSvg />
      <TrashSvg />
      <BookmarkSvg />
      <EyeSvg />
      <ChainSvg />
      <FolderSvg />
      <MoreSvg />
      <span className={styles.selectAll} onClick={() => onAction('SELECT_ALL')}>
        Select All
      </span>
      <span className={styles.selectAll} onClick={() => onAction('CLEAR')}>
        Clear
      </span>
    </div>
  );
};

export default EmailActionBar;
