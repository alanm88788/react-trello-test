import { useSelector } from 'react-redux';
import Split from 'react-split';
import { ToastContainer, toast } from 'react-toastify';
import cx from 'clsx';
import Pane from '@components/Pane';
import styles from './index.module.scss';
import PaneLeft from './PaneLeft';
import PaneRight from './PaneRight';
import { ReactComponent as ContrastSvg } from '@icons/contrast.svg';
import { useEffect } from 'react';

const Inbox = () => {
  const { visibleMainSidebar } = useSelector((state) => state.ui);
  useEffect(() => {
    notify();
  }, []);
  const notify = () =>
    toast(
      <div className={styles.notificationContent}>
        <div className={styles.notificationTitle}>
          <ContrastSvg />
          <span>Your Productivity</span>
        </div>
        <p className={styles.notificationHeaderLine}>
          Flip Saved you 15 minutes today
        </p>
        <span className={styles.description}>
          You took action on <strong>24 emails</strong> and your Rules took
          action on <strong>54</strong> more
        </span>
        <div className={styles.notificationBottom}>
          <span className={styles.btnGotIt}>Got it</span>
          <span className={styles.btnDetails}>See Details</span>
        </div>
      </div>,
      { position: 'bottom-right' }
    );
  return (
    <div
      className={cx(styles.inboxWrapper, {
        [styles.visibleSidebar]: !visibleMainSidebar,
      })}
    >
      <Split
        sizes={[50, 50]}
        expandToMin={false}
        gutterSize={20}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
        className={cx(styles.resizeWrapper, {
          [styles.visibleSidebar]: !visibleMainSidebar,
        })}
      >
        <div className={styles.pane}>
          <Pane>
            <PaneLeft />
          </Pane>
        </div>
        <div className={styles.pane}>
          <Pane>
            <PaneRight />
          </Pane>
        </div>
      </Split>
      <ToastContainer
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Inbox;
