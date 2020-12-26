import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
    {
        buyerID: { type: String }, 
        sellerID: { type: String }, 
        itemID: { type: String }, 
        quantity: { type: Number }, 
        status: { type: String }, 
        taxPrice: { type: Number }, 
        shippingPrice: { type: Number }, 
        logistics: { type: String }, 
        transactionID: { type: String },
    },
    {
        timestamps: true,
    }

);

const Order = mongoose.model("Order", orderSchema);
export default Order;