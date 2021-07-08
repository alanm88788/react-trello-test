import styles from './index.module.scss';

const Pane = ({ children }) => {
  return <div className={styles.pane}>{children}</div>;
};

export default Pane;
