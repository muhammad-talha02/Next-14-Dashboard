
"use client"
// import { redirect } from "next/navigation";
import Input from "../form/Input";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter()
  const handleLogin = async (e: any) => {
    e.preventDefault()
    router.push("/dashboard")
    // Router.b
  };
  return (
    <div className="w-full h-full max-h-[370px] max-w-[420px] bg-[--bgSoft] rounded-lg p-5">
      <h2 className="text-center my-5">Login</h2>
      <form className="flex flex-col gap-6">
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
        <button className="bg-teal-500 py-3 px-5 rounded-sm" onClick={handleLogin}>Login</button>
        <span className="text-center">{ }</span>
      </form>
    </div>
  );
};

export default LoginForm;
