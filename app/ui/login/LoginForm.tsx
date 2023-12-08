"use client";

import { authenticate } from "@/app/lib/api/users";
import Input from "../form/Input";
import { useState } from "react";

const LoginForm = () => {
  const [error, setError] = useState("");
  const handleLogin = async (formData: any) => {
    const data = await authenticate(formData);
    console.log("Dataa", data);
    // data?.error && setError(data?.error);
  };
  return (
    <div className="w-full h-full max-h-[370px] max-w-[420px] bg-[--bgSoft] rounded-lg p-5">
      <h2 className="text-center my-5">Login</h2>
      <form action={handleLogin} className="flex flex-col gap-6">
        <div>
          <Input
            type="text"
            placeholder="username"
            id="username"
            name="username"
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="password"
            id="password"
            name="password"
          />
        </div>
        <button className="bg-teal-500 py-3 px-5 rounded-sm">Login</button>
        <span className="text-center">{error}</span>
      </form>
    </div>
  );
};

export default LoginForm;
