// mongoose import
import mongoose from "mongoose"
// Function to connect to databasew
export const connectToDatabase = async () => {
    try {
        // Attempt to connect with mongoose and tell user if successful
        const conn = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(`DB connected: ${conn.connection.host}`);
    } catch (error) {
        // Otherwise, show error and exit with 1 = failure
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}