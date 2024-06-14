import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// Connection to the database
const connectToMongodb = () => {
  mongoose.connect(process.env.MONGODB_URL);
  console.log("Connection to MongoDb Successfull")
};

export default connectToMongodb;