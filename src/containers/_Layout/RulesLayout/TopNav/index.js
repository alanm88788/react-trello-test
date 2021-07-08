import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.scss';
import { openRuleSidebar } from '@actions';
import { ReactComponent as PlusSvg } from '@images/plus.svg';
import { ReactComponent as SubMenuSvg } from '@icons/submenu.svg';
import { ReactComponent as ArrowSvg } from '@icons/arrow-down.svg';
import { SVG_DEFAULT_COLOR } from '@data/constants';
import Search from '@components/Search';
import ProfileDropdown from '@components/ProfileDropdown';

const TopNav = () => {
  const dispatch = useDispatch();
  const { visibleRuleSidebar } = useSelector((state) => state.ui);

  const clickToggle = () => {
    dispatch(openRuleSidebar(true));
  };
  return (
    <div className={styles.topnav}>
      <section>
        {!visibleRuleSidebar && (
          <div className={styles.branding}>
            <SubMenuSvg fill={SVG_DEFAULT_COLOR} onClick={clickToggle} />
            <span>flip.</span>
          </div>
        )}
        <Link to="/inbox" className={styles.pageLink}>
          <ArrowSvg />
          <span>Back to Inbox</span>
        </Link>
      </section>
      <section>
        <Search />
        <PlusSvg className={styles.avatarIcon} />
        <ProfileDropdown />
      </section>
    </div>
  );
};

export default TopNav;
