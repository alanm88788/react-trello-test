import { useState } from 'react';
import ToggleSwitch from '../ToggleSwitch';
import { ReactComponent as BarsSvg } from '@icons/bars.svg';
import { ReactComponent as MoreSvg } from '@icons/more.svg';
import { ReactComponent as OpenedEmailSvg } from '@icons/opened-email.svg';
import styles from './index.module.scss';

const RuleItem = ({ data }) => {
  const { id, from, type, placeIn, markAsRead, subject, image, labels } = data;
  let [checked, setChecked] = useState(true);

  const onToggle = (checked) => {
    setChecked(checked);
  };
  return (
    <div className={styles.itemWrapper}>
      <div className={styles.row}>
        <div className={styles.left}>
          <span className={styles.headTxt}>When</span>
          {from && (
            <div className={styles.ruleBlock}>
              <img src={image} alt="no avatar" />
              <span className={styles.type}>{type}:</span>
              <span className={styles.content}>{from}</span>
            </div>
          )}
          {subject && (
            <div className={styles.ruleBlock}>
              <span className={styles.type}>Subject:</span>
              <span className={styles.content}>{subject}</span>
            </div>
          )}
        </div>
        <ToggleSwitch id={id} checked={checked} onChange={onToggle} />
      </div>
      <div className={styles.row}>
        <div className={styles.left}>
          <span className={styles.headTxt}>Do</span>
          {placeIn && (
            <div className={styles.ruleBlock}>
              <BarsSvg className={styles.svgIcon} />
              <span className={styles.type}>Place in:</span>
              <span className={styles.content}>{placeIn}</span>
            </div>
          )}
          {markAsRead && (
            <div className={styles.ruleBlock}>
              <OpenedEmailSvg className={styles.svgIcon} />
              <span className={styles.content}>Mark as Read</span>
            </div>
          )}
          {labels && labels.length > 0 && (
            <div className={styles.ruleBlock}>
              <span className={styles.type}>Add label:</span>
              {labels.map((label) => (
                <span className={styles.label}>{label}</span>
              ))}
            </div>
          )}
        </div>
        <MoreSvg className={styles.moreIcon} />
      </div>
      <div className={styles.row}></div>
    </div>
  );
};

export default RuleItem;
