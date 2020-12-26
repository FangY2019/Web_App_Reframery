import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Order from '../models/orderModel.js';

const orderRouter = express.Router();

orderRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.find({});
    res.send({orders});
  })
);

orderRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    await Order.remove({});
    const createdOrders= await Order.insertMany(data.orders);
    res.send({ createdOrders });
  })
);

orderRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  })
);

export default orderRouter;