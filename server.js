import "dotenv/config"
import express from 'express';
import  mongoose  from 'mongoose';
import subscriberRouter from './routes/subscribers.js';

const app = express();
const port = 3000;

mongoose.connect(process.env.DATABASE_URI)
            .then(()=>{
        console.log("Connected to MondoDb")
    })
    .catch((error)=>{
        console.log(error)
    })


// Middleware
app.use(express.json());

// Routes
app.use('/subscriber', subscriberRouter);

// Start Server
app.listen(port, (error) => {
    if (!error) {
        console.log(`Server is running on port ${port}`);
    } else {
        console.log('Error occurred, server cannot start:', error);
    }
});
