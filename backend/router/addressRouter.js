import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Address from '../models/addressModel.js';

const addressRouter = express.Router();

addressRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const addresses = await Address.find({});
    res.send({addresses});
  })
);

addressRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    await Address.remove({});
    const createdAddresses = await Address.insertMany(data.addresses);
    res.send({ createdAddresses });
  })
);

addressRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const address = await Address.findById(req.params.id);
    if (address) {
      res.send(address);
    } else {
      res.status(404).send({ message: 'Address Not Found' });
    }
  })
);

export default addressRouter;