import mongoose from 'mongoose';

const Schema = mongoose.Schema

const subscriberSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    subscriberToChannel: {
        type: String,
        required: true
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now
    }
});

export default mongoose.model('subscribers',subscriberSchema)
