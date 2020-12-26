import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import SubCategory from '../models/subCategoryModel.js';

const subCategoryRouter = express.Router();

subCategoryRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const subCategories = await SubCategory.find({});
    res.send({subCategories});
  })
);

subCategoryRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    await SubCategory.remove({});
    const createdSubCategories= await SubCategory.insertMany(data.subCategories);
    res.send({ createdSubCategories });
  })
);

subCategoryRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const subCategory = await SubCategory.findById(req.params.id);
    if (subCategory) {
      res.send(subCategory);
    } else {
      res.status(404).send({ message: 'Address Not Found' });
    }
  })
);

export default subCategoryRouter;