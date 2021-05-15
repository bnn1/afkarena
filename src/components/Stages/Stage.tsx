import { CSSProperties } from 'react';
import { IStage, IStageItemProps } from '../../types/types';

const Stage: React.FC<IStageItemProps> = ({ index, style, data }) => {
  return (
    <li data-stage={data[index]} style={style}>
      {data[index]}
    </li>
  );
};

export default Stage;
