import mongoose from 'mongoose';

const communitySchema = new mongoose.Schema(
    {
        name: { type: String }, 
    },
    {
        timestamps: true,
    }

);

const Community = mongoose.model("Community", communitySchema);
export default Community;