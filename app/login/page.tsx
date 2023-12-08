import React from "react";
import { authenticate } from "../lib/api/users";
import LoginForm from "../ui/login/LoginForm";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100%]">
      <LoginForm />
    </div>
  );
};

export default Login;
