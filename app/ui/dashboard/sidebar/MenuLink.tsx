"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface MenuLinkProps {
  item: {
    title: string;
    path: string;
    icon?: React.ReactNode;
  };
}

const MenuLink = ({ item }: MenuLinkProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={item.path}
      className={`flex items-center p-[20px] gap-2 my-[5px] hover:bg-[#2e374a] rounded-lg ${
        item.path === pathname ? "bg-[#2e374a]" : ""
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
