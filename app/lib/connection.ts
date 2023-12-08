import mongoose from "mongoose";

export const connecDB = async () => {
  const connection: any = {};
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.DB_URL as string);
    console.log("Connected");
    connection.isConnected = db.connections[0].readyState;
  } catch (error: any) {
    throw new Error(error);
  }
};
