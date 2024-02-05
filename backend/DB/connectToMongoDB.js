import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_DB_URI);
    console.log("mongoDB is connected");
  } catch (error) {
    console.log("Error in connecting to database", error);
  }
};

export default connectToMongoDB;
