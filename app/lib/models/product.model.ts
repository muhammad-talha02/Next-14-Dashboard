import mongoose, { Document } from "mongoose";

interface IProductSchema extends Document {
  title: string;
  desc: string;
  price: number;
  stock: number;
  img: string;
  color: string;
  size: string;
  address: string;
  phone: string;
  category: string;
}

const productSchema = new mongoose.Schema<IProductSchema>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type:String,
      enum: ["phone", "computer", "kitchen"],
      required: true,
    },
    img: {
      type: String,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const ProductModel =
  mongoose.models.Products || mongoose.model("Products", productSchema);

export default ProductModel;
