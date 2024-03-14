import Link from "next/link";

interface MenuItemsProps {
  title: string;
  path: string;
}

export const SideMenuItem = ({ title, path }: MenuItemsProps) => {
  return (
    <Link href={path} className="block">{title}</Link>
  )
};
