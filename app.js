import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import router from "./routes/products.js";
import bodyParser from 'body-parser';

const app = express();

// MIDLEWARE
app.use(bodyParser.json());
app.use('/products', router);


// connect to DB
mongoose.connect(process.env.MONGO_URI, () => {
    console.log('Conected to Mongo DB');
});

// star the server - port 3000
app.listen(3000);

