import { Model, model, models, Schema } from 'mongoose';
import { IStage, IStageRewards } from '../types/types';

const stageRewards = new Schema<IStageRewards>({
  reward: String,
  cooldown: Number
});

const schema = new Schema<IStage>({
  index: Number,
  stage: {
    type: String,
    required: true
  },
  rewards: {
    type: [stageRewards],
    required: true
  }
});
const Stage: Model<IStage> = models.Stage || model('Stage', schema);

export default Stage;
