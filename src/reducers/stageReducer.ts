import { IReducer, IStage } from 'types/types';

export const initialState = {
  stageData: {} as IStage,
  inputValue: '',
  searchStage: '',
  filteredStages: [],
  loading: false,
  shouldShowStages: false,
  shouldShowRewards: false,
  clearDate: 0
};

export const stageReducer: IReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STAGE_DATA':
      return { ...state, stageData: action.stageData };
    case 'SET_FILTERED_STAGES':
      return { ...state, filteredStages: action.filteredStages };
    case 'SET_INPUT_VALUE':
      return { ...state, inputValue: action.inputValue };
    case 'SET_SEARCH_STAGE':
      return { ...state, searchStage: action.searchStage };
    case 'SET_LOADING':
      return { ...state, loading: action.loading };
    case 'SET_SHOULD_SHOW_REWARDS':
      return { ...state, shouldShowRewards: action.shouldShowRewards };
    case 'SET_SHOULD_SHOW_STAGES':
      return { ...state, shouldShowStages: action.shouldShowStages };
    case 'SET_CLEAR_DATE':
      return { ...state, clearDate: action.clearDate };
    default:
      return state;
  }
};
