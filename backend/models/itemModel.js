import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema(
  {
    name: { type: String},
    price: { type: Number },
    image: { type: String },
    description: { type: String },
    stock: { type: Number },
    discount: { type: Number },
    category: { type: String },
    subCategoryID: { type: String },
    userID:{ type: String},
  },
  {
    timestamps: true,
  }
);
const Item = mongoose.model('Item', itemSchema);

export default Item;