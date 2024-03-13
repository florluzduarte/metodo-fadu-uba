"use client";
import { useLayoutStore } from "@/store/layout/layoutStore";
import Link from "next/link";

interface MenuItemsProps {
  title: string;
  path: string;
}

export const SideMenuItem = ({ title, path }: MenuItemsProps) => {
  const handleCloseMenu = useLayoutStore((store) => store.handleCloseMenu);
  return (
    <li className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer transition-all"
      onClick={handleCloseMenu}
    >
      <Link href={path}>{title}</Link>
    </li>
  )
};
