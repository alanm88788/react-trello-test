import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { openRuleSidebar } from '@actions';
import MenuItem from '@components/MenuItem';
import { ReactComponent as MagicSvg } from '@icons/magic.svg';
import { ReactComponent as ListSvg } from '@icons/list.svg';
import { ReactComponent as ExploreSvg } from '@icons/explore.svg';
import { ReactComponent as TrashSvg } from '@icons/trash.svg';
import { ReactComponent as SubMenuSvg } from '@icons/submenu.svg';
import styles from './index.module.scss';
import { SVG_DEFAULT_COLOR } from '@data/constants';

const menusItems = [
  { path: '/rules', label: 'Rules', icon: MagicSvg },
  { path: '/rules/activity', label: 'Rule Activity', icon: ListSvg },
  { path: '/rules/explore', label: 'Explore', icon: ExploreSvg },
  { path: '/rules/achived', label: 'Achived', icon: TrashSvg },
];

const LeftNav = () => {
  const dispatch = useDispatch();
  const { visibleRuleSidebar } = useSelector((state) => state.ui);
  const { pathname } = useLocation();

  const clickToggle = () => {
    dispatch(openRuleSidebar(false));
  };

  return (
    <div className={clsx(styles.leftnav, visibleRuleSidebar && styles.visible)}>
      <div className={styles.branding}>
        <span>flip.</span>
        <SubMenuSvg fill={SVG_DEFAULT_COLOR} onClick={clickToggle} />
      </div>
      {menusItems.map((item) => (
        <Link key={item.path} to={item.path}>
          <MenuItem
            icon={item.icon}
            label={item.label}
            selected={pathname === item.path}
            style={{ color: '#2b2b2b' }}
          />
        </Link>
      ))}
    </div>
  );
};

export default LeftNav;
