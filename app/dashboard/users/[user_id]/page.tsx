import { getUser, updateUser } from "@/app/lib/api/users";
import Input from "@/app/ui/form/Input";
import Select from "@/app/ui/form/Select";
import Image from "next/image";
import React from "react";

const SingleUserPage = async ({ params }: any) => {
  const { user_id } = params;
  const user = await getUser(user_id);
  console.log(user);
  return (
    <div className="flex gap-5">
      <div className="info flexflex-col gap-2 p-4 bg-[--bgSoft] rounded-lg items-center h-max">
        <div className="h-[]">
          <Image src={"/noavatar.png"} width={250} height={250} alt="Avatar" />
        </div>
        {user.username}
      </div>
      <div className="bg-[--bgSoft] p-5 mt-5 rounded-lg flex-[3]">
        <form action={updateUser} className="w-full">
          <input type="hidden" name="id" value={user_id.toString()} />
          <div className="grid grid-cols-1 gap-x-3 gap-y-4">
            <div>
              <Input type="text" placeholder={user.username} label="Username" name="username"/>
            </div>
            <div>
              <Input type="email" placeholder={user.email} label="Email" name="email"/>
            </div>
            <div>
              <Input type="password" placeholder="********" label="Password" name="password"/>
            </div>
            <div>
              <Input type="tel" placeholder={user.phone} label="Phone" name="phone"/>
            </div>
            <div>
              <Select
                options={[
                  { label: "Yes", value: "true", selected: user.isAdmin },
                  { label: "No", value: "false", selected: !user.isAdmin },
                ]}
                placeholder={"is Admin"}
                label="Is Admin"
                name="isAdmin"
              />
            </div>
            <div>
              <Select
                options={[
                  { label: "Yes", value: "true", selected: user.isActive },
                  { label: "No", value: "false", selected: !user.isActive },
                ]}
                placeholder="is Active"
                label="Is Active"
                name="isActive"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-[200px] bg-green-700 hover:bg-green-900 rounded-sm p-3 my-4 self-center"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
