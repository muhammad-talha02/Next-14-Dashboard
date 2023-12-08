import mongoose, { Document } from "mongoose";

interface IUserSchema extends Document {
  username: string;
  email: string;
  password: string;
  img?: string;
  isAdmin?: boolean;
  isActive?: boolean;
  address?: string;
  phone?: string;
}

const userSchema = new mongoose.Schema<IUserSchema>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);


const UserModel = mongoose.models.Users || mongoose.model("Users", userSchema)

export default UserModel