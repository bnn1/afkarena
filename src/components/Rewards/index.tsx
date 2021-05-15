import { useEffect } from 'react';
import { format } from 'fecha';

import { IRewardsProps } from 'types/types';

import { StyledRewards } from './styles/Rewards.styled';

const Rewards: React.FC<IRewardsProps> = ({ stageData, dispatch, clearDate }) => {
  // when stageData is obtained, disable loading
  useEffect(() => {
    if (stageData) {
      dispatch({ type: 'SET_LOADING', loading: false });
    }
  }, [stageData]);

  return (
    <StyledRewards>
      <div>
        {stageData.rewards.map((reward, idx) => {
          console.log(`reward.cooldown`, reward.cooldown);
          console.log(`${reward.reward} >> `, reward.cooldown + clearDate);
          return (
            <div key={idx}>
              {reward.reward} - {format(new Date(clearDate + reward.cooldown * 1000))}
            </div>
          );
        })}
      </div>
    </StyledRewards>
  );
};

export default Rewards;
