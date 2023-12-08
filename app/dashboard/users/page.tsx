// 'use client'
import { deleteUser, fetchUsers } from "@/app/lib/api/users";
import { Pagination, Search } from "@/app/ui/components";
import Image from "next/image";
import Link from "next/link";

const Users = async ({ searchParams }: any) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || "1";
  const { users, countUsers } = await fetchUsers(q, page);
  return (
    <div className="bg-[--bgSoft] p-5 mt-5 rounded-lg">
      <div className="top flex justify-between items-center">
        <Search placeholder="Search user..." />
        <Link href="/dashboard/users/add">
          <button className="p-2.5 bg-purple-700 rounded-md text-[15px]">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <td className={tdStyle}>Name</td>
            <td className={tdStyle}>Email</td>
            <td className={tdStyle}>Created At</td>
            <td className={tdStyle}>Role</td>
            <td className={tdStyle}>Status</td>
            <td className={tdStyle}>Action</td>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user._id}>
              <td className={tdStyle}>
                <div className="flex gap-2.5 items-center">
                  <Image
                    src={user.img || "/noavatar.png"}
                    width={40}
                    height={40}
                    alt="image"
                    className="rounded-3xl object-cover w-[40px] h-[40px]"
                  />
                  {user.username}
                </div>
              </td>
              <td className={tdStyle}>{user.email}</td>
              <td className={tdStyle}>
                {user.createdAt?.toString().slice(4, 16)}
              </td>
              <td className={tdStyle}>{user.isAdmin ? "Admin" : "User"}</td>
              <td className={tdStyle}>{user.isActive ? "Active" : "CLosed"}</td>
              <td className={tdStyle}>
                <div className="flex gap-2 5 items-center">
                  <Link href={`/dashboard/users/${user._id}`}>
                    <button className="py-1 px-2.5 bg-teal-600 rounded-md text-[16px]">
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input
                      type="hidden"
                      name="id"
                      value={user._id?.toString()}
                    />
                    <button className="py-1 px-2.5 bg-red-600 rounded-md text-[16px]">
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={countUsers} />
    </div>
  );
};

const tdStyle = "p-2.5";

export default Users;
