import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import { config } from 'dotenv';

config();

export const connectDB = (
  handler: (req: NextApiRequest, res: NextApiResponse) => void
) => async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (mongoose.connections[0].readyState) {
      return handler(req, res);
    }

    await mongoose.connect(process.env.MONGO_URI as string, {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useNewUrlParser: true
    });

    return handler(req, res);
  } catch (err) {
    console.error(err);
  }
};
