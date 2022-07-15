import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const mongoConnect = async () => {
    try {
        console.log("connecting to MongoDB...");
        await connect(process.env.MONGO_URL as string);
        console.log("Connected to MongoDB!!");
        
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
        
    }    
}