"use client";
import { ButtonAlumnos, LogoMetodo } from "@/components";
import { useLayoutStore } from "@/store/layout/layoutStore";
import { IoMenu } from "react-icons/io5";

export const Navbar = () => {

  const handleOpenMenu = useLayoutStore((store) => store.handleOpenMenu);

  return (
    <nav className="py-6 border-b border-b-gray-300">
      <div className="flex justify-between mx-6 items-center">
        <LogoMetodo />
        <div className="flex gap-3 items-center">
          <ButtonAlumnos />
          <button onClick={handleOpenMenu}>
            <IoMenu size={32} className="fill-black" />
          </button>
        </div>
      </div>
    </nav>
  )
};
