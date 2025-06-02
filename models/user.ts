// /models/User.ts
import mongoose, { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },  // Store hashed password
  name: String,
  createdAt: { type: Date, default: Date.now },
});

const User = models.User || model("User", userSchema);
export default User;
