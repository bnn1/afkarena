import { CSSProperties, Dispatch, SetStateAction } from 'react';

/* STAGE TYPES (REWARDS) */
export interface IStageRewards {
  reward: string;
  cooldown: number;
}

export interface IStage {
  stage: string;
  rewards: IStageRewards[];
}
/* END STAGE TYPES */

/* STAGE ITEM COMPONENT TYPES */
export interface IStageItemProps {
  index: number;
  style: CSSProperties;
  data: string[];
}
/* END STAGE ITEM COMPONENT TYPES */

/* STAGES COMPONENT TYPES */
export interface IStagesProps {
  stages: string[];
  Stage: React.FC<IStageItemProps>;
  loading: boolean;
  dispatch: Dispatch<IReducerAction>;
}
/* END STAGES COMPONENT TYPES */

/* INPUT FORM COMPONENT TYPES */
export interface IFormProps {
  dispatch: Dispatch<IReducerAction>;
  inputValue: string;
  searchStage: string;
  stageData: IStage;
  loading: boolean;
}
/* END INPUT FORM COMPONENT TYPES */

/* DATEPICKER COMPONENT TYPES */
export interface IDatePickerProps {
  setDate: Dispatch<SetStateAction<Date>>;
  clearDate: Date;
  className?: string;
}

/* REWARDS COMPONENT TYPES */
export interface IRewardsProps {
  stageData: IStage;
  dispatch: Dispatch<IReducerAction>;
  clearDate: number;
}
/* END REWARDS COMPONENT TYPES */

/* REDUCER TYPES */
export type IReducerAction =
  | { type: 'SET_STAGE_DATA'; stageData: IStage }
  | { type: 'SET_INPUT_VALUE'; inputValue: string }
  | { type: 'SET_FILTERED_STAGES'; filteredStages: string[] }
  | { type: 'SET_SEARCH_STAGE'; searchStage: string }
  | { type: 'SET_LOADING'; loading: boolean }
  | { type: 'SET_SHOULD_SHOW_STAGES'; shouldShowStages: boolean }
  | { type: 'SET_SHOULD_SHOW_REWARDS'; shouldShowRewards: boolean }
  | { type: 'SET_CLEAR_DATE'; clearDate: number };

export type IDispatch = (action: IReducerAction) => void;

export interface IReducerState {
  stageData: IStage;
  inputValue: string;
  searchStage: string;
  filteredStages: string[];
  loading: boolean;
  shouldShowStages: boolean;
  shouldShowRewards: boolean;
  clearDate: number;
}

export interface IReducer {
  (state: IReducerState, action: IReducerAction): IReducerState;
}
/* END REDUCER TYPES */
