import express from 'express'
import mongoose from 'mongoose'
// import data from './data/data.json'
// import data from './data.js'
import itemRouter from './router/itemRouter.js';
import userRouter from './router/userRouter.js';
import addressRouter from './router/addressRouter.js';
import communityRouter from './router/communityRouter.js';
import feedbackRouter from './router/feedbackRouter.js';
import orderRouter from './router/orderRouter.js';
import subCategoryRouter from './router/subCategoryRouter.js';
import transactionRouter from './router/transactionRouter.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost/aquafina', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
})


//users data
app.use('/api/users', userRouter);
app.use('/api/items', itemRouter);
app.use('/api/addresses', addressRouter);
app.use('/api/communities', communityRouter);
app.use('/api/feedbacks', feedbackRouter);
app.use('/api/orders', orderRouter);
app.use('/api/subCategories', subCategoryRouter);
app.use('/api/transactions', transactionRouter);

app.get('/', (req, res) => {
    res.send("Server is ready");
});

//handle the errors
app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
})

// const port = process.env.PORT || 5000;
const port = 500;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});