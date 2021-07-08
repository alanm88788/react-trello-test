import styles from './index.module.scss';
import { ReactComponent as PreviewSvg } from '@icons/preview.svg';
import { ReactComponent as TodaySvg } from '@icons/today.svg';
import { ReactComponent as LaterSvg } from '@icons/later.svg';
import { ReactComponent as DeleteSvg } from '@icons/delete.svg';
import { ReactComponent as MoreOptionsSvg } from '@icons/more.svg';
import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as SelectedSvg } from '@icons/selected.svg';
import {
  MenuItem,
  SubMenu,
  MenuHeader,
  ControlledMenu,
  MenuDivider,
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import { MENU_ITEMS, SVG_DEFAULT_COLOR } from '@data/constants';

const TOOL_BAR_MENU_ITEMS = new Map([
  [
    MENU_ITEMS.PREVIEW,
    <span>
      <PreviewSvg color={SVG_DEFAULT_COLOR} />
    </span>,
  ],
  [
    MENU_ITEMS.MOVE_TO_LATER,
    <span>
      <LaterSvg color={SVG_DEFAULT_COLOR} />
    </span>,
  ],
  [
    MENU_ITEMS.MOVE_TO_TODAY,
    <span>
      <TodaySvg color={SVG_DEFAULT_COLOR} />
    </span>,
  ],
  [
    MENU_ITEMS.DELETE,
    <span>
      <DeleteSvg color={SVG_DEFAULT_COLOR} />
    </span>,
  ],
]);

const SCHEDULE_GROUPS = [
  [
    {
      title: 'Tomorrow',
      selected: true,
    },
    {
      title: 'Next Week',
      selected: false,
    },
    {
      title: 'Custom',
      subMenu: {
        selectedValue: 'Not Set',
        values: [
          {
            title: 'Custom 1',
          },
          {
            title: 'Custom 2',
          },
          {
            title: 'Custom 3',
          },
        ],
      },
    },
  ],
  [
    {
      title: 'Priority',
      subMenu: {
        selectedValue: 'Basic',
        values: [
          {
            title: 'Priority 1',
          },
          {
            title: 'Priority 2',
          },
          {
            title: 'Priority 3',
          },
        ],
      },
    },
    {
      title: 'Reminder',
      subMenu: {
        selectedValue: 'None',
        values: [
          {
            title: 'Reminder 1',
          },
          {
            title: 'Reminder 2',
          },
          {
            title: 'Reminder 3',
          },
        ],
      },
    },
  ],

  [
    {
      title: 'Folder',
      subMenu: {
        selectedValue: 'None',
        values: [
          {
            title: 'Folder 1',
          },
          {
            title: 'Folder 2',
          },
          {
            title: 'Folder 3',
          },
        ],
      },
    },
    {
      title: 'Label',
      subMenu: {
        selectedValue: 'None',
        values: [
          {
            title: 'Label 1',
          },
          {
            title: 'Label 2',
          },
          {
            title: 'Label 3',
          },
        ],
      },
    },
  ],
];

const getToolbarPosition = (items) => {
  const noOfDefaultItems = 4;
  const widthOfItem = 40;
  return items.length > noOfDefaultItems
    ? (items.length - noOfDefaultItems) * widthOfItem
    : 0;
};

const Toolbar = ({ data, isVisible }) => {
  const [scheduleGroups, setScheduleGroups] = useState(SCHEDULE_GROUPS);
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const toolBarMenuItems = TOOL_BAR_MENU_ITEMS;

  useEffect(() => {
    if (!isVisible && isOpen) {
      setOpen(false);
    }
  }, [isVisible, isOpen]);

  const setScheduleTypeSelected = (index, e) => {
    e.keepOpen = true;
    setScheduleGroups(
      scheduleGroups.map((scheduleGroup, groupIndex) =>
        scheduleGroup.map((item, i) => {
          if (item.selected !== undefined) {
            return {
              ...item,
              selected: i === index ? true : false,
            };
          } else {
            return {
              ...item,
            };
          }
        })
      )
    );
  };

  const setSubMenuItemSelected = (
    groupIndex,
    scheduleType,
    subMenuIndex,
    e
  ) => {
    e.keepOpen = true;
    setScheduleGroups(
      scheduleGroups.map((scheduleGroup, groupCurrIndex) => {
        if (groupCurrIndex === groupIndex) {
          scheduleGroup.map((menuItem) => {
            if (menuItem.title === scheduleType.title) {
              menuItem.subMenu.values.map((subMenuItem, subMenuCurrIndex) => {
                if (subMenuCurrIndex === subMenuIndex) {
                  menuItem.subMenu.selectedValue = subMenuItem.title;
                }
                return subMenuItem;
              });
            }
            return menuItem;
          });
        }
        return scheduleGroup;
      })
    );
  };

  const getSubMenuTitle = (title, selectedValue) => (
    <React.Fragment>
      <span>{title}</span>
      <span>{selectedValue}</span>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {data && data.length > 0 ? (
        <div
          className={styles.toolbarItems}
          style={{ right: `${getToolbarPosition(data)}px` }}
        >
          {data.includes(MENU_ITEMS.PREVIEW) > 0 &&
            toolBarMenuItems.get(MENU_ITEMS.PREVIEW)}
          <div className={styles.toolbarItem}>
            {data.map(
              (item, index) =>
                item !== MENU_ITEMS.PREVIEW &&
                item !== MENU_ITEMS.MORE_OPTIONS && (
                  <React.Fragment key={index}>
                    {toolBarMenuItems.get(item)}
                  </React.Fragment>
                )
            )}
            {data.includes(MENU_ITEMS.MORE_OPTIONS) > 0 && (
              <span>
                <MoreOptionsSvg
                  ref={ref}
                  onClick={() => setOpen(true)}
                  color={SVG_DEFAULT_COLOR}
                />
              </span>
            )}
          </div>

          <ControlledMenu
            id="toolbar-menuitems"
            anchorRef={ref}
            arrow={true}
            isOpen={isOpen}
            position="anchor"
            direction="bottom"
            portal={true}
            onClose={() => setOpen(false)}
          >
            <MenuHeader>SCHEDULE</MenuHeader>
            {scheduleGroups.map((scheduleGroup, groupIndex) => {
              let result = [];
              scheduleGroup.map((scheduleType, index) => {
                const subMenu = scheduleType.subMenu;
                if (subMenu) {
                  return result.push(
                    <SubMenu
                      key={index}
                      label={getSubMenuTitle(
                        scheduleType.title,
                        subMenu.selectedValue
                      )}
                    >
                      {subMenu.values.map((subMenuItem, subMenuIndex) => (
                        <MenuItem
                          key={subMenuIndex}
                          onClick={(e) =>
                            setSubMenuItemSelected(
                              groupIndex,
                              scheduleType,
                              subMenuIndex,
                              e
                            )
                          }
                        >
                          {subMenuItem.title}
                        </MenuItem>
                      ))}
                    </SubMenu>
                  );
                } else {
                  return result.push(
                    <MenuItem
                      key={index}
                      keepOpen
                      onClick={(e) => setScheduleTypeSelected(index, e)}
                    >
                      <span>{scheduleType.title}</span>
                      <span>
                        {scheduleType.selected !== undefined &&
                        scheduleType.selected ? (
                          <SelectedSvg />
                        ) : null}
                      </span>
                    </MenuItem>
                  );
                }
              });

              if (groupIndex !== scheduleGroups.length - 1) {
                result.push(<MenuDivider />);
              } else {
                result.push(
                  <MenuItem>
                    <button id="save-button">Save</button>
                  </MenuItem>
                );
              }
              return result;
            })}
          </ControlledMenu>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Toolbar;
