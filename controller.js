// Imports
import Item from "../models/model.js";
import mongoose from "mongoose";
// Function to get items
export const getItems = async(req, res) => {
    try {
        // Get items and return 200 status (success) if successful
        const items = await Item.find({});
        res.status(200).json({ success: true, data: items });
    } catch (error) {
        // If getting items fails, print error message to console and 500 status error
        console.log("Error getting items: ", error.message);
        res.status(500).json({ success: false, message: "At least one of name, price, or image not provided." });
    }
}
// Function to make an item
export const makeItem = async(req, res) => {
    // Item is data sent by user
    const item = req.body;
    if (!item.name || !item.price || !item.image) {
        // Return 400 status error if at least 1 parameter is empty
        return res.status(400).json({success:false, message: "At least one of name, price, or image not provided."})
    }
    // Make new item if valid
    const newItem = new Item(item);
    try {
        // Create item and notify if successful
        await newItem.save();
        res.status(201).json({ success: true, data: newItem });
    } catch (error) {
        // Notify that there's an error when creating item
        console.error("Item can't be created: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}
// Function to edit an item
export const editItem = async(req, res) => {
    // Get item and its ID
    const {id} = req.params;
    const item = req.body;
    // Break out of method and return message if item's ID isn't valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Item ID not valid" });
    }
    try {
        // Try to update item with given id and return status 200 if successful
        const updatedItem = await Item.findByIdAndUpdate(id, item, {new: true});
        res.status(200).json({ success: true, data: updatedItem });
    } catch (error) {
        // Otherwise, return a status 500 error saying item can't be found
        res.status(500).json({ success: false, message: "Item not found" });
    }
}
// Function to delete an item
export const deleteItem = async (req, res) => {
    // Get ID
    const {id} = req.params;
    // Check if ID is valid and return with error message if not
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Item ID not valid" });
    }
    try {
        // Try to find and delete item and return status 200 message if successful
        await Item.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Item deleted" });
    } catch (error) {
        // If unsuccessful, return status 500 error stating that items couldn't be deleted
        res.status(500).json({ success: false, message: "Error deleting items" });
    }
}