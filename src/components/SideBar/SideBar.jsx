import React from "react";
import { SideBarElements } from "./Elements/SideBarElemnts";
import { SidebarItem } from "./Elements/SidebarItem";
import KTronic from "../../../public/assets/logo.png";

export const SideNavBar = () => (
  <>
    <div
      className="bg-white border border-black border-opacity-10 w-20 text-black xl:w-56 md:w-20 h-screen flex flex-col 
    justify-between font-sans sm:h-full sm:flex-shrink-0 md:flex-shrink-0 md:h-full md:flex-shrink-0 hidden lg:block font-serif"
    >
      <div className="flex items-center justify-center h-20 mt-4 lg-desktop:-ml-14">
        <img src={KTronic} alt="empty logo" width={"150px"} />
      </div>
      <nav className="mt-4 ml-1 flex-1 xl:hidden  hover:font-bold">
        {/* Render only icons when screen width is less than or equal to 800px */}
        {SideBarElements.map((element, index) => (
          <SidebarItem key={index} icon={element.icon} />
        ))}
      </nav>
      <nav className="mt-4 ml-1 flex-1 hidden xl:block hover:font-semibold">
        {/* Render full elements when screen width is greater than 800px */}
        {SideBarElements.map((element, index) => (
          <SidebarItem key={index} {...element} />
        ))}
      </nav>
      <div className="py-4 border-t border-gray-300 mt-72">
        <button className="block w-full py-2 px-4 text-sm text-center hover:bg-gray-100">
          Sign Out
        </button>
      </div>
    </div>
  </>
);
