import { ReactComponent as LogoSvg } from '@images/logo.svg';
import styles from './index.module.scss';

const Logo = () => {
  return <LogoSvg width="50" className={styles.logo} />;
};

export default Logo;
