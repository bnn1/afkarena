import { forwardRef, useEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import { toast } from 'react-toastify';

import { getStageData } from 'utils';
import { IStagesProps } from 'types/types';

import { StyledStages } from './style';

const Stages: React.FC<IStagesProps> = ({ stages, Stage, loading, dispatch }) => {
  const handleMouseSelectStage = (evt: React.MouseEvent<HTMLDivElement>) => {
    if (loading) {
      toast('Loading, please wait.');

      return;
    }

    // get selected stage from data-stage attribute
    const {
      dataset: { stage }
    } = evt.target as HTMLLIElement;

    getStageData(stage as string, dispatch);
    dispatch({ type: 'SET_FILTERED_STAGES', filteredStages: [] });
  };

  const outerElementType = forwardRef<HTMLDivElement>((props, ref) => (
    <div ref={ref} onClick={handleMouseSelectStage} {...props}></div>
  ));

  return (
    <StyledStages>
      <List
        height={300}
        itemData={stages}
        itemSize={50}
        itemCount={stages.length}
        width={300}
        innerElementType='ul'
        outerElementType={outerElementType}
      >
        {Stage}
      </List>
    </StyledStages>
  );
};

export default Stages;
