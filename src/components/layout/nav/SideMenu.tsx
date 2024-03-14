"use client";

import { useLayoutStore } from "@/store/layout/layoutStore";
import { ButtonAlumnos, SideMenuItem } from "@/components";
import { IoClose } from "react-icons/io5";
import clsx from "clsx";

const menuItems = [
  {
    title: "Inicio",
    path: "/",
  },
  {
    title: "Cátedra",
    path: "/catedra",
  },
  {
    title: "Docentes",
    path: "/docentes",
  },
  {
    title: "Consignas",
    path: "/consignas",
  },
  {
    title: "Teóricas",
    path: "/teoricas"
  }
]


export const SideMenu = () => {

  const isMenuOpen = useLayoutStore((store) => store.isMenuOpen);
  const handleCloseMenu = useLayoutStore((store) => store.handleCloseMenu);

  return (
    <>
      {/* Background Black */}
      {
        isMenuOpen && (<div
          className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
        />)
      }


      {/* Background Blur */}
      {
        isMenuOpen && (<div
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
          onClick={handleCloseMenu}
        />)
      }

      <nav className={clsx("fixed z-10 top-0 right-0 h-screen bg-white w-[270px] md:w-[320px] xl:w-[450px] p-6 transform transition-all duration-300",
        {
          "translate-x-full": !isMenuOpen
        }
      )}>
        <button className="fixed top-8 right-8 p-1 hover:bg-gray-200 rounded-md"
          onClick={handleCloseMenu}
        >
          <IoClose size={28} />
        </button>
        <ul className="flex flex-col gap-3 mt-14">
          {
            menuItems.map((item) => (
              <li className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer transition-all"
                onClick={handleCloseMenu} key={item.path}
              >
                <SideMenuItem {...item} />
              </li>
            ))
          }
          <div onClick={handleCloseMenu}>
            <ButtonAlumnos />
          </div>
        </ul>
      </nav >
    </>
  )
}
