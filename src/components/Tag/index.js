import styles from './index.module.scss';
import cx from 'clsx';

const Tag = ({ color, title }) => {
  return <div className={cx(styles[color], styles.tag)}>{title}</div>;
};

export default Tag;
