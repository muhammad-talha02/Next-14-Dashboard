"use client";
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center p-4 rounded-lg bg-[--bgSoft] m-3">
      <div className="beadrumb text-[--textSoft] capitalize font-bold">{pathname.split("/").pop()}</div>
      <div className="menu flex items-center gap-4">
        <div className="searchBox flex items-center gap-[10px] bg-[#2e374a] rounded-lg p-[10px]">
          <MdSearch size={20}/>
          <input type="search" placeholder="search" className="outline-0 text-[--text] bg-transparent"/>
        </div>
        <div className="menuLinks flex gap-5">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
