import express from 'express'
import User from '../models/userModel.js';
import data from '../data.js'
import expressAsyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils.js';



const userRouter = express.Router();

// query all users in the database
userRouter.get('/', expressAsyncHandler(async (req, res) => {
    const users = await User.find({});
    res.send({ users });
})
);

// create uses from data
userRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    await User.remove({});
    const createdUsers = await User.insertMany(data.users)
    res.send({ createdUsers });
})
);

//sign in
userRouter.post(
    '/signin',
    expressAsyncHandler(async (req, res) => {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                res.send({
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                    admin: user.admin,
                    superAdmin: user.superAdmin,
                    communityID: user.communityID,
                    token: generateToken(user),
                });
                return;
            }
        }
        res.status(401).send({ message: 'Invalid email or password' });
    })
);


// register
userRouter.post(
    '/register',
    expressAsyncHandler(async (req, res) => {
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            communityID: req.body.communityID,
        });
        // create a new user and set the new user at the createdUser
        const createdUser = await user.save();
        res.send({
            _id: createdUser._id,
            username: createdUser.username,
            email: createdUser.email,
            admin: createdUser.admin,
            superAdmin: createdUser.superAdmin,
            communityID: createdUser.communityID,
            token: generateToken(createdUser),
        });
    })
);
// user profiles
userRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
      const user = await User.findById(req.params.id);
      if (user) {
        res.send(user);
      } else {
        res.status(404).send({ message: 'User Not Found' });
      }
    })
  );

export default userRouter;