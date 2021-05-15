// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '../../middleware/mongoose';
import Stage from '../../schema/stage.schema';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { stage } = req.body;
      const response = await Stage.findOne({ stage });

      if (!response) {
        res.status(404).json({ err: 'Not found' });
        return;
      }

      const stageData = {
        stage: response.stage,
        rewards: [
          ...response.rewards.map((reward) => ({
            reward: reward.reward,
            cooldown: reward.cooldown
          }))
        ]
      };

      res.status(200).json(stageData);
    } catch (err) {
      console.error(err);
      res.status(500).json({ err: err });

      return;
    }
  } else {
    res.status(404).json({ err: 'Not found' });
  }
};

export default connectDB(handler);
