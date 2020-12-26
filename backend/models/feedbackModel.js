import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema(
    {
        itemID: { type: String }, 
        userID: { type: String }, 
        rating: { type: Number }, 
        createdTime: { type: Date , default: Date.now}, 
        description: { type: String }, 
    },
    {
        timestamps: true,
    }

);

const Feedback = mongoose.model("Feedback", feedbackSchema);
export default Feedback;