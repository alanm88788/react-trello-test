import { MAINSIDEBAR, RULESIDEBAR } from '../types';

const initialState = {
  visibleMainSidebar: false,
  visibleRuleSidebar: true,
};

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case MAINSIDEBAR:
      return {
        ...state,
        visibleMainSidebar: action.visible,
      };
    case RULESIDEBAR:
      return {
        ...state,
        visibleRuleSidebar: action.visible,
      };
    default:
      return state;
  }
}
