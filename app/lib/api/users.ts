"use server";
import mongoose from "mongoose";
import { connecDB } from "../connection";
import UserModel from "../models/user.model";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { signIn } from "@/app/auth";
import { resolve } from "path";

export const fetchUsers = async (q: any, page: any) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 5;
  try {
    // const UserModel = mongoose.model("Users")
    connecDB();
    const users = await UserModel.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    const countUsers = await UserModel.find({
      username: { $regex: regex },
    }).countDocuments();
    // const countUsers = await UserModel.countDocuments()
    return { users, countUsers };
  } catch (error: any) {
    throw new Error(error);
  }
};
export const getUser = async (id: any) => {
  try {
    // const UserModel = mongoose.model("Users")
    connecDB();
    const user = await UserModel.findById(id);
    // const countUsers = await UserModel.countDocuments()
    return user;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const addUser = async (formData: any) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connecDB();
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      username,
      email,
      password: hashPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });
    newUser.save();
  } catch (error: any) {
    console.log(error);
    throw new Error("Failed to create user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData: any) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connecDB();
    const updateFields: any = {
      id,
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };
    Object.keys(updateFields).forEach((key) => {
      (updateFields[key] === "" || undefined) && delete updateFields[key];
    });

    const updateUser = await UserModel.findByIdAndUpdate(id, updateFields);
  } catch (error: any) {
    console.log(error);
    throw new Error("Failed to create user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (formData: any) => {
  const { id } = Object.fromEntries(formData);
  try {
    connecDB();

    const deleteUser = await UserModel.findByIdAndDelete(id);
  } catch (error: any) {
    console.log(error);
    throw new Error("Failed to create user");
  }
  revalidatePath("/dashboard/users");
};

export const authenticate = async (formData: any) => {
  "use client"
  const { username, password } = Object.fromEntries(formData);

  const test = await signIn("credentials", { username, password })

};
