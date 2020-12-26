import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        communityID: { type: String, required: true },
        country: { type: String, default:""},
        admin: { type: Boolean, default: false, required: true },
        registerTime: { type: Date, default: Date.now },
        phoneNumber: { type: String, default:"" },
        address: { type: String, default:"" },
        firstName: { type: String, default:"" },
        lastName: { type: String, default:"" },
        birthday: { type: String, default:"" },
        userImage: { type: String, default:"" },
        validateStatus: { type: Boolean, default: false },
        validateTime: { type: Date, default: null},
        superAdmin: { type: Boolean, default: false },
        balance: {type: Number, default: 0},
        addressID: { type: String, default:"" },
    },
    {
        timestamps: true,
    }

);

const User = mongoose.model("User", userSchema);
export default User;