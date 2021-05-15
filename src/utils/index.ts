import axios from 'axios';
import { Dispatch } from 'react';
import { IReducerAction, IStage } from 'types/types';

export const getNumberFormat = (length: number) => {
  if (length < 3) {
    return '####';
  }

  if (length === 3) {
    return '#-###';
  }

  return '##-##';
};

export const getStageData = async (stage: string, dispatch: Dispatch<IReducerAction>) => {
  // set loading
  dispatch({ type: 'SET_LOADING', loading: true });

  // get stage data
  try {
    const response = await axios.post('/api/stages', { stage });
    const stageData: IStage = await response.data;

    dispatch({ type: 'SET_STAGE_DATA', stageData });
  } catch (err) {
    console.error(err.message);
  }
};
