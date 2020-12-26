import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema(
    {
        senderID: { type: String }, 
        receiverID: { type: String }, 
        time:{type: Date, default: Date.now},
        creditUnit: { type: Number },
    },
    {
        timestamps: true,
    }

);

const Transaction = mongoose.model("Transaction", transactionSchema);
export default Transaction;