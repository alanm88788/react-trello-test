import React, { useRef, useState } from 'react';
import {
  MenuItem,
  MenuHeader,
  ControlledMenu,
  MenuDivider,
  MenuButton,
} from '@szhsin/react-menu';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './index.module.scss';
import { ReactComponent as CheckedSvg } from '@icons/sort-check.svg';
import { ReactComponent as MagicSvg } from '@icons/magic.svg';
import { ReactComponent as AccountSvg } from '@icons/account.svg';
import { ReactComponent as SettingsSvg } from '@icons/settings.svg';
import { userProfiles } from '@data//mockData';
import { useHistory } from 'react-router-dom';

const ProfileDropdown = () => {
  const history = useHistory();
  const [userProfile, setUserProfile] = useState(userProfiles[0]);
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const usersProfiles = userProfiles;
  const notify = () =>
    toast(<div className={styles.notificationContainer}>Signed Out</div>, {
      position: 'bottom-right',
      autoClose: false,
    });

  return (
    <>
      <img
        src={userProfile.image}
        alt="no avatar"
        className={styles.menuButton}
        ref={ref}
        onClick={() => setOpen(true)}
      />
      <ControlledMenu
        className={styles.menuWrapper}
        arrow={true}
        anchorRef={ref}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      >
        <MenuHeader className={styles.menuHeader}>SORT</MenuHeader>
        {usersProfiles.map((user, index) => (
          <MenuItem
            key={index}
            onClick={(e) => setUserProfile(user)}
            className={styles.menuItem}
          >
            <div className={styles.profile}>
              <img src={user.image} alt="no avatar" />
              <div>
                <p className={styles.name}>{user.name}</p>
                <p className={styles.email}>{user.email}</p>
              </div>
            </div>
            {user.id === userProfile.id && <CheckedSvg />}
          </MenuItem>
        ))}
        <MenuDivider />
        <MenuItem>
          <div className={styles.rules} onClick={() => history.push('/rules')}>
            <MagicSvg />
            <span>Rules</span>
          </div>
        </MenuItem>
        <MenuDivider />
        <MenuItem>
          <div className={styles.settings}>
            <AccountSvg />
            <span>Manage Account</span>
          </div>
        </MenuItem>
        <MenuItem>
          <div className={styles.settings}>
            <SettingsSvg />
            <span>Preferences</span>
          </div>
        </MenuItem>
        <MenuItem>
          <MenuButton onClick={notify} className={styles.btnSignOut}>
            Sign Out
          </MenuButton>
        </MenuItem>
      </ControlledMenu>
    </>
  );
};

export default ProfileDropdown;
