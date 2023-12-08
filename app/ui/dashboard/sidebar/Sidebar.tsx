import Image from "next/image";
import MenuLink from "./MenuLink";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import { auth, signOut } from "@/app/auth";
const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async () => {
  const {user} :any = await auth();
  return (
    <div className="sidebar">
      <div className="flex items-center gap-5 mb-5 h-[50px] bg-[--bgSoft]">
        <Image
          className="rounded-3xl"
          src={user?.img || "/noavatar.png"}
          // src={"/noavatar.png"}
          width={50}
          height={50}
          style={{ width: "40px", height: "40px", objectFit: "cover" }}
          alt="hdd"
        />
        <div className="flex flex-col">
          <span className="font-semibold capitalize">{user?.username}</span>
          <span className="text-[14px] text-[--textSoft]">Admin</span>
        </div>
      </div>
      <ul className="sidebar">
        {menuItems?.map((cat) => {
          return (
            <li key={cat.title}>
              <span className="text-[--textSoft] font-bold text-[16px] m-2">
                {cat.title}
              </span>
              {cat?.list?.map((item) => (
                <MenuLink item={item} key={item.title} />
              ))}
            </li>
          );
        })}
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button className="flex gap-3 items-center p-[20px] my-[5px] hover:bg-[#2e374a] rounded-lg w-full">
            <MdLogout /> Logout
          </button>
        </form>
      </ul>
    </div>
  );
};

export default Sidebar;
