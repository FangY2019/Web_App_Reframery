import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Feedback from '../models/feedbackModel.js';

const feedbackRouter = express.Router();

feedbackRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const feedbacks = await Feedback.find({});
    res.send({feedbacks});
  })
);

feedbackRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    await Feedback.remove({});
    const createdFeedback= await Feedback.insertMany(data.feedbacks);
    res.send({ createdFeedback });
  })
);

feedbackRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const feedback = await Feedback.findById(req.params.id);
    if (feedback) {
      res.send(feedback);
    } else {
      res.status(404).send({ message: 'Feedback Not Found' });
    }
  })
);

export default feedbackRouter;