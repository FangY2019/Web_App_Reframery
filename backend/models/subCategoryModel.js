import mongoose from 'mongoose';

const subCategorySchema = new mongoose.Schema(
    {
        name: { type: String }, 
        userID: { type: String }, 
    },
    {
        timestamps: true,
    }

);

const SubCategory = mongoose.model("SubCategory", subCategorySchema);
export default SubCategory;