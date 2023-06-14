import mongoose from "mongoose";

const connectDatabase = async () => {
  const connection = await mongoose.connect(
    `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_CLUSTER_NAME}.mongodb.net/?retryWrites=true&w=majority`
  );
  if (connection) {
    console.log("database connected");
  } else {
    console.log("databasse not connected");
  }
};

export default connectDatabase;
