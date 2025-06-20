import React from "react";
import { SidebarTrigger } from "./ui/sidebar";

function Header() {
  return (
    <div className="  w-full z-100 bg-primary text-white/90 flex flex-row justify-center items-center">
      <header className="container min-h-[57px] px-2  w-full xl:min-h-[65px] xl:px-8 flex justify-between items-center ">
        <div className="flex z-10 justify-center items-center gap-4">
          <img src="src/assets/logo.png" className="h-10" alt="logo" />
          <SidebarTrigger onClick={() => console.log("hit")} />
        </div>
        <div>SearchBAr</div>
        <div>side stuff</div>
        <SidebarTrigger />

      </header>
    </div>
  );
}

export default Header;
