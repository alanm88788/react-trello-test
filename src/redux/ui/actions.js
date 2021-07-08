import { MAINSIDEBAR, RULESIDEBAR } from '../types';

export function openMainSidebar(visible) {
  return (dispatch) => {
    dispatch({
      type: MAINSIDEBAR,
      visible,
    });
  };
}

export function openRuleSidebar(visible) {
  return (dispatch) => {
    dispatch({
      type: RULESIDEBAR,
      visible,
    });
  };
}
