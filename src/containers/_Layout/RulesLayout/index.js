import LeftNav from './LeftNav';
import TopNav from './TopNav';
import styles from './index.module.scss';

const RulesPage = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <LeftNav />
      <div className={styles.content}>
        <TopNav />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};

export default RulesPage;
