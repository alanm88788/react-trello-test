import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.scss';
import { openMainSidebar } from '@actions';
import { ReactComponent as PeoplesSvg } from '@icons/peoples.svg';
import { ReactComponent as FileSvg } from '@icons/file.svg';
import { ReactComponent as EmailSvg } from '@icons/email.svg';
import { ReactComponent as CalendarSvg } from '@icons/calendar.svg';
import { ReactComponent as PlusSvg } from '@images/plus.svg';
import { ReactComponent as SubMenuSvg } from '@icons/submenu.svg';
import { SVG_DEFAULT_COLOR } from '@data/constants';
import Search from '@components/Search';
import ProfileDropdown from '@components/ProfileDropdown';

const TopNav = () => {
  const dispatch = useDispatch();
  const { visibleMainSidebar } = useSelector((state) => state.ui);

  const clickToggle = () => {
    dispatch(openMainSidebar(true));
  };
  return (
    <div className={styles.topnav}>
      <section>
        {!visibleMainSidebar && (
          <div className={styles.branding}>
            <SubMenuSvg fill={SVG_DEFAULT_COLOR} onClick={clickToggle} />
            <span>flip.</span>
          </div>
        )}
        <Link to="/inbox" className={styles.pageLink}>
          <EmailSvg />
          <span>Email</span>
        </Link>
        <Link to="/calendar" className={styles.pageLink}>
          <CalendarSvg />
          <span>Calendar</span>
        </Link>
        <Link to="/files" className={styles.pageLink}>
          <FileSvg />
          <span>Files</span>
        </Link>
        <Link to="/people" className={styles.pageLink}>
          <PeoplesSvg />
          <span>People</span>
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
