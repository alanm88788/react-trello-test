import styles from './index.module.scss';
import FilterDropdown from '@components/FilterDropdown';
import SortDropdown from '@components/SortDropdown';
import ShowMoreDropdown from '@components/ShowMoreDropdown';
import Accordion from '@components/Accordion';
import RuleItem from '@components/RuleItem';
import SuggestionItem from '@components/SuggestionItem';
import { ReactComponent as RefreshSvg } from '@icons/refresh.svg';
import { SVG_DEFAULT_COLOR } from '@data/constants';
import { myRules, suggestions } from '@data/mockData';

const Rules = () => {
  return (
    <div className={styles.rulesPageWrapper}>
      <div className={styles.paneHeader}>
        <div>
          <h4>Rules.</h4>
        </div>
        <div>
          <RefreshSvg color={SVG_DEFAULT_COLOR} />
          <FilterDropdown />
          <SortDropdown panel="left" />
          <ShowMoreDropdown />
          <div className={styles.btnCreate}>Create New</div>
        </div>
      </div>
      <div className={styles.pageContent}>
        <div className={styles.myRules}>
          <Accordion title={'My Rules.'}>
            {myRules.map((item, index) => (
              <RuleItem data={item} key={index} />
            ))}
          </Accordion>
          <div className={styles.btnShowDefault}>Show Default Rules</div>
        </div>
        <div className={styles.suggestions}>
          <Accordion title={'Suggestions.'}>
            {suggestions.map((item, index) => (
              <SuggestionItem data={item} key={index} />
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Rules;
