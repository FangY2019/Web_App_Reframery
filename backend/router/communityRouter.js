import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Community from '../models/communityModel.js';

const communityRouter = express.Router();

communityRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const communities = await Community.find({});
    res.send({communities});
  })
);

communityRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    await Community.remove({});
    const createdCommunity= await Community.insertMany(data.communities);
    res.send({ createdCommunity });
  })
);

communityRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const community = await Community.findById(req.params.id);
    if (community) {
      res.send(community);
    } else {
      res.status(404).send({ message: 'Community Not Found' });
    }
  })
);

export default communityRouter;