import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Transaction from '../models/transactionModel.js';

const transactionRouter = express.Router();

transactionRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const transactions = await Transaction.find({});
    res.send({transactions});
  })
);

transactionRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    await Transaction.remove({});
    const createdTransactions= await Transaction.insertMany(data.transactions);
    res.send({ createdTransactions });
  })
);

transactionRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const transaction = await Transaction.findById(req.params.id);
    if (transaction) {
      res.send(transaction);
    } else {
      res.status(404).send({ message: 'Transaction Not Found' });
    }
  })
);

export default transactionRouter;