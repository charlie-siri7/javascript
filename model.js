import mongoose from 'mongoose';
// Schema for item
const schema = new mongoose.Schema({
    // item must have name, price, and image
    name: {
        type: String,
        required: true
    }, 
    price: {
        type: Number,
        required: true
    }, 
    image: {
        type: String,
        required: true
    }, 
}, {
    // creation/last update time are optional for item
    timestamps: true 
});

// Make Item using schema and export it
const Item = mongoose.model('Item', schema); 
export default Item;