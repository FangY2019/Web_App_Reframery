import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema(
    {
        address: { type: String },
        city: { type: String },
        province: { type: String },
        country: { type: String },
        postcode: { type: String },
 
    },
    {
        timestamps: true,
    }

);

const Address = mongoose.model("Address", addressSchema);
export default Address;