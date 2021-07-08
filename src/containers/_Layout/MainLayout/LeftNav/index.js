import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { openMainSidebar } from '@actions';
import CollapseMenu from '@components/CollapseMenu';
import MenuItem from '@components/MenuItem';
import { ReactComponent as BoxSvg } from '@icons/box.svg';
import { ReactComponent as SavedSvg } from '@icons/saved.svg';
import { ReactComponent as ArchivedSvg } from '@icons/archived.svg';
import { ReactComponent as SubMenuSvg } from '@icons/submenu.svg';
import { ReactComponent as MoreSvg } from '@icons/more.svg';
import { ReactComponent as FolderSvg } from '@icons/folder.svg';
import { ReactComponent as LabelSvg } from '@icons/label.svg';
import { folders, labels } from '@data/mockData';
import styles from './index.module.scss';
import { SVG_DEFAULT_COLOR } from '@data/constants';

const menusItems = [
  { path: '/inbox', label: 'Inbox', icon: BoxSvg },
  { path: '/saved', label: 'Saved', icon: SavedSvg },
  { path: '/archived', label: 'Achived', icon: ArchivedSvg },
];

const LeftNav = () => {
  const dispatch = useDispatch();
  const { visibleMainSidebar } = useSelector((state) => state.ui);
  const { pathname } = useLocation();

  const clickToggle = () => {
    dispatch(openMainSidebar(false));
  };

  return (
    <div className={clsx(styles.leftnav, visibleMainSidebar && styles.visible)}>
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
      <MenuItem
        icon={MoreSvg}
        label="More"
        onClick={() => {
          console.log('More...');
        }}
      />
      <CollapseMenu icon={FolderSvg} label="Folders">
        {folders.map((item) => (
          <Link key={item.path} to={item.path}>
            <MenuItem
              icon={item.icon}
              label={item.label}
              selected={pathname === item.path}
              style={{ color: '#767676' }}
            />
          </Link>
        ))}
      </CollapseMenu>
      <CollapseMenu icon={LabelSvg} label="Labels">
        {labels.map((item, index) => (
          <MenuItem
            key={index}
            label={item.label}
            style={{ color: '#767676' }}
          />
        ))}
      </CollapseMenu>
    </div>
  );
};

export default LeftNav;
