"use server";
import { revalidatePath } from "next/cache";
import { connecDB } from "../connection";
import ProductModel from "../models/product.model";
import { redirect } from "next/navigation";
export const fetchProducts = async (q: string, page: any) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 5;
  try {
    connecDB();
    const products = await ProductModel.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    const count = await ProductModel.find().countDocuments();
    return { products, count };
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getProduct = async (id: any) => {
  try {
    connecDB();
    const product = await ProductModel.findById(id);
    return product;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const addProduct = async (formData: any) => {
  const { title, desc, price, stock, color, size, category } =
    Object.fromEntries(formData);

  try {
    connecDB();
    const newProduct = new ProductModel({
      title,
      desc,
      price,
      stock,
      color,
      size,
      category,
    });
    newProduct.save();
  } catch (error: any) {
    console.log(error);
    throw new Error("Failed to create user");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateProduct = async (formData: any) => {
  const { id, title, desc, price, stock, color, size, category } =
    Object.fromEntries(formData);

  try {
    connecDB();
    const updateFields: any = {
      title,
      desc,
      price,
      stock,
      color,
      size,
      category,
    };
    Object.keys(updateFields).forEach((key) => {
      (updateFields[key] === "" || undefined) && delete updateFields[key];
    });
    console.log(updateFields);
    const updateUser = await ProductModel.findByIdAndUpdate(id, updateFields, {
      new: true,
    });
    console.log(updateUser);
  } catch (error: any) {
    console.log(error);
    throw new Error("Failed to create user");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData: any) => {
  const { id } = Object.fromEntries(formData);
  try {
    connecDB();

    const deleteProduct = await ProductModel.findByIdAndDelete(id);
  } catch (error: any) {
    console.log(error);
    throw new Error("Failed to create user");
  }
  revalidatePath("/dashboard/products");
  // redirect("/dashboard/products");
};
