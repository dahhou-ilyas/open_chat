import mongoose, { Model } from "mongoose";

const { DATABASE_URL } = process.env;
console.log(DATABASE_URL);

export const connect = async () => {
  try {
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/open_chat");

    console.log("Mongoose Connection Established");

    // OUR CHAT SCHEMA
    const ChatSchema = new mongoose.Schema({
      nom: String,
      prenom: String,
      socketid:String
    });

    // OUR CHAT MODEL
    const Chat = mongoose.models.Chat || mongoose.model("Chat", ChatSchema);

    return { conn, Chat };
  } catch (error) {
    console.error("Mongoose Connection Error:");
    throw error;
  }
};
