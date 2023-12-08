import { addUser } from "@/app/lib/api/users";
import Input from "@/app/ui/form/Input";
import Select from "@/app/ui/form/Select";
import TextArea from "@/app/ui/form/TextArea";
import React from "react";

const AddUser = () => {
  const options = [
    { label: "Phone", value: "phone" },
    { label: "Computer", value: "computer" },
    { label: "Kitchen", value: "kitchen" },
  ];
  return (
    <div className="bg-[--bgSoft] p-5 mt-5 rounded-lg">
      <form action={addUser} className="w-full">
        <div className="grid grid-cols-2 gap-x-3 gap-y-8">
          <div>
            <Input type="text" placeholder="Username" name="username" />
          </div>
          <div>
            <Input type="email" placeholder="Email" name="email" />
          </div>
          <div>
            <Input type="text" placeholder="Password" name="password" />
          </div>
          <div>
            <Input type="tel" placeholder="Phone" name="phone" />
          </div>
          <div>
            <Select
              options={[
                { label: "Yes", value: "true" },
                { label: "No", value: "false" },
              ]}
              placeholder="is Active"
              name="isActive"
            />
          </div>
          <div>
            <Select
              options={[
                { label: "Yes", value: "true" },
                { label: "No", value: "false" },
              ]}
              placeholder="is Admin"
              name="isAdmin"
            />
          </div>
          <div className="col-span-2">
            <TextArea placeholder="Enter Address" name="address" />
          </div>
        </div>
        <button
          type="submit"
          className="w-[200px] bg-green-700 hover:bg-green-900 rounded-sm p-3 my-3 self-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddUser;
