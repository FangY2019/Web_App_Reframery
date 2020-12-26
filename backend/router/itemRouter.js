import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Item from '../models/itemModel.js';

const itemRouter = express.Router();

itemRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const products = await Item.find({category: "Products"});
    const services = await Item.find({category: "Services"});
    const expertises = await Item.find({category: "Expertises"});
    res.send({products, services, expertises});
  })
);

itemRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    await Item.remove({});
    const products = await Item.insertMany(data.products);
    const services = await Item.insertMany(data.services);
    const expertises = await Item.insertMany(data.expertises);
    res.send({ products, services, expertises });
  })
);

itemRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const item = await Item.findById(req.params.id);
    if (item) {
      res.send(item);
    } else {
      res.status(404).send({ message: 'Item Not Found' });
    }
  })
);

export default itemRouter;