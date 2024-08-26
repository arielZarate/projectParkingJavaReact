"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import ClickOutside from "@/components/ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaCar,
  FaChartPie,
  FaLongArrowAltLeft,
  FaUser,
} from "react-icons/fa";
import { FaTableList } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { MdLogin } from "react-icons/md";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

//==============MENU DE SIDEBAR=====================
const menuGroups = [
  {
    name: "MENU PARKING",
    menuItems: [
      {
        icon: (
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaArrowAltCircleRight size={15} />
            <FaCar size={24} style={{ marginLeft: "5px" }} />
          </div>
        ),
        label: "Ingreso Vehiculo",
        route: "/forms/form-elements",
      },

      {
        icon: (
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaArrowAltCircleLeft size={15} />
            <FaCar size={24} style={{ marginLeft: "5px" }} />
          </div>
        ),
        label: "Salida Vehiculo",
        route: "/forms/form-layout",
      },

      {
        icon: <FaTableList size={18} />,
        label: "Listado de parking",
        route: "/tables",
      },

      /*
      {
        icon: <FaUserShield size={18} />,
        label: "Administrador",
        route: "#",
        children: [{ label: "eCommerce", route: "/" }],
      },
    */

      {
        icon: <IoSettings size={18} />,
        label: "Configuracion",
        route: "#",
        children: [
          { label: "Perfil", route: "/profile" },
          { label: "Cuenta", route: "/settings" },
        ],
      },

      {
        icon: <FaUser size={18} color="white" />,
        label: "Cerrar Sesion",
        route: "/profile",
      },

      /**  {
        icon: <FaWpforms />,
        label: "UI Elements",
        route: "#",
        children: [
          { label: "Alerts", route: "/ui/alerts" },
          { label: "Buttons", route: "/ui/buttons" },
        ],
      }, */

      /*      {
        icon: <FaTableList size={18} />,
        label: "Forms",
        route: "#",
        children: [
          { label: "Form Elements", route: "/forms/form-elements" },
          { label: "Form Layout", route: "/forms/form-layout" },
        ],
      }, */
    ],
  },
  {
    name: "OTROS",
    menuItems: [
      {
        icon: <FaChartPie size={20} />,
        label: "Chart",
        route: "/chart",
      },

      {
        icon: <MdLogin size={20} />,
        label: "Authentication",
        route: "#",
        children: [
          { label: "Iniciar Sesion", route: "/auth/signin" },
          { label: "Registro", route: "/auth/signup" },
        ],
      },
    ],
  },
]; //FIN DE MENU DE SIDEBAR

//============================  COMPONENTE SIDEBAR================================================
const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
          <Link href="/">
            <Image
              width={80}
              height={20}
              src={"/images/logo/parking-logo.svg"}
              alt="Logo"
              priority
            />
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            className="block lg:hidden"
          >
            <FaLongArrowAltLeft size={25} color={"white"} />
          </button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                  {group.name}
                </h3>

                <ul className="mb-6 flex flex-col gap-1.5">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
